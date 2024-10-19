package com.example.paddyLiveTracking.service;

import com.example.paddyLiveTracking.exception.InvalidCredentialsException;
import com.example.paddyLiveTracking.exception.UserNotFoundException;
import com.example.paddyLiveTracking.model.User;
import com.example.paddyLiveTracking.repository.UserRepository;
import com.example.paddyLiveTracking.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    // Create a new user
    public User createUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    // Get all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Get a user by ID
    public User getUserById(Long userId) {
        return userRepository.findById(userId).orElseThrow(() -> new UserNotFoundException("User not found with ID: " + userId));
    }

    // Update user details
    // public User updateUser(Long userId, User updatedUser) {
    //     User user = userRepository.findById(userId)
    //             .orElseThrow(() -> new UserNotFoundException("User not found with ID: " + userId));

    //     user.setEmail(updatedUser.getEmail());
    //     user.setUsername(updatedUser.getUsername());
    //     if (updatedUser.getPassword() != null) {
    //         user.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
    //     }

    //     return userRepository.save(user);
    // }

    // Delete a user
    public void deleteUser(Long userId) {
        if (!userRepository.existsById(userId)) {
            throw new UserNotFoundException("User not found with ID: " + userId);
        }
        userRepository.deleteById(userId);
    }

    // User login
    public String login(String userName,String password) {
        Optional<User> existingUser = userRepository.findByUserName(userName);
        if (existingUser.isPresent()) {
            User foundUser = existingUser.get();
            if (passwordEncoder.matches(password, foundUser.getPassword())) {
                return jwtUtil.generateToken(foundUser);
            } else {
                throw new InvalidCredentialsException("Invalid username or password");
            }
        } else {
            throw new InvalidCredentialsException("Invalid username or password");
        }
    }

    // Validate JWT token
    public boolean validateToken(String token) {
        String username = jwtUtil.extractUsername(token);
        return username != null && jwtUtil.validateToken(token, username);
    }

    public void logout() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'logout'");
    }
}
