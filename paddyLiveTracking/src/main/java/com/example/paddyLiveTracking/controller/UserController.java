package com.example.paddyLiveTracking.controller;

import com.example.paddyLiveTracking.model.User;
import com.example.paddyLiveTracking.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    // Create a new user
    @PostMapping("/register")
    public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
        User createdUser = userService.createUser(user);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    // Get all users
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    // Get a user by ID
    @GetMapping("/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable Long userId) {
        User user = userService.getUserById(userId);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    // Update user details
    // @PutMapping("/{userId}")
    // public ResponseEntity<User> updateUser(@PathVariable Long userId, @Valid @RequestBody User user) {
    //     User updatedUser = userService.updateUser(userId, user);
    //     return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    // }

    // Delete a user
    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // User login
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> requestBody) {
        String token = userService.login(requestBody.get("userName"),requestBody.get("password"));
        if (token != null) {
            return ResponseEntity.ok(token); // Return the token if login is successful
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    // User logout
    @PostMapping("/logout")
    public ResponseEntity<Void> logout() {
        userService.logout();
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // Validate token
    @GetMapping("/validate")
    public ResponseEntity<Boolean> validateToken(@RequestHeader("Authorization") String token) {
        boolean isValid = userService.validateToken(token);
        return new ResponseEntity<>(isValid, HttpStatus.OK);
    }
}
