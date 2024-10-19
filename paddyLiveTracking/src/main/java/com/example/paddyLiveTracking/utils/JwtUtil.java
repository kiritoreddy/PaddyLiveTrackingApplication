package com.example.paddyLiveTracking.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import javax.crypto.SecretKey;
import org.springframework.stereotype.Component;

import com.example.paddyLiveTracking.model.PPC;
import com.example.paddyLiveTracking.model.User;
import com.example.paddyLiveTracking.repository.PPCRepository;
import com.example.paddyLiveTracking.repository.UserRepository;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Component
public class JwtUtil {

    private final UserRepository userRepository;
    private final PPCRepository ppcRepository;

    private static final String base64EncodedKey = "MFMwZjJhZDI1ZmI2ODZjNjIxMDNiYWI1Y2QzZDEyMTNhNmE4ZjRkNjU4MzcwMmYxMjUyYmFlM2ZmNmNjMTAz" ; 
    private static final SecretKey secretKey = Keys.hmacShaKeyFor(Base64.getDecoder().decode(base64EncodedKey));

    public JwtUtil(UserRepository userRepository, PPCRepository ppcRepository) {
        this.userRepository = userRepository;
        this.ppcRepository = ppcRepository;
    }

    public String generateToken(User user) {
        return createToken( user.getUserName());
    }

     public String createToken(String username) {
        // Fetch user details from the user table
        Optional<User> optionalUser = userRepository.findByUserName(username);
        
        // Handle the case where the user is not found
        User user = optionalUser.orElseThrow(() -> new RuntimeException("User not found"));

        // Fetch ppcName from ppc table based on ppcId
        String ppcName = null;
        if (user.getPpcId() != null) {
            PPC ppc = ppcRepository.findById(user.getPpcId()).orElse(null);
            if (ppc != null) {
                ppcName = ppc.getPpcName();  // Assuming PPC has a 'name' field
            }
        }

        // Create claims map and add custom claims
        Map<String, Object> claims = new HashMap<>();
        claims.put("role", user.getRole());
        claims.put("ppcId", user.getPpcId());
        claims.put("societyId", user.getSocietyId());
        claims.put("ppcName", ppcName);

        // Create the JWT token with claims
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // 10 hours expiration
                .signWith(secretKey, SignatureAlgorithm.HS256)
                .compact();
    }


    public boolean validateToken(String token, String username) {
        final String extractedUsername = extractUsername(token);
        return (extractedUsername.equals(username) && !isTokenExpired(token));
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return Jwts.parserBuilder().setSigningKey(secretKey).build().parseClaimsJws(token).getBody().getExpiration();
    }

    public String extractUsername(String token) {
        return Jwts.parserBuilder().setSigningKey(secretKey).build().parseClaimsJws(token).getBody().getSubject();
    }
}
