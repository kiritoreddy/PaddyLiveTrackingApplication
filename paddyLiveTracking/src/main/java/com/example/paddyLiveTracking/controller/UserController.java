package com.example.paddyLiveTracking.controller;

import com.example.paddyLiveTracking.model.User;
import com.example.paddyLiveTracking.service.ExcelTemplateService;
import com.example.paddyLiveTracking.service.SocietyService;
import com.example.paddyLiveTracking.service.UserService;
import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

   

    private final UserService userService;
    private final SocietyService societyService;
    private final ExcelTemplateService excelTemplateService;

    @Autowired
    public UserController(SocietyService societyService, ExcelTemplateService excelTemplateService,UserService userService) {
        this.societyService = societyService;
        this.userService = userService;
        this.excelTemplateService = excelTemplateService;
    }

    // Create a new user
    @PostMapping("/register")
    public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
        User createdUser = userService.createUser(user);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    

    @GetMapping("/download-template")
    public ResponseEntity<ByteArrayResource> downloadUserTemplate() {
        try {
            Map<String, Long> societyNameToIdMap = societyService.getSocietyNameToIdMap(); // Fetch society names with IDs
            return excelTemplateService.generateUserTemplate(societyNameToIdMap);
        } catch (IOException e) {
            // Log the exception (optional, you may want to use a logging framework)
            // log.error("Error while generating user template: ", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ByteArrayResource("An error occurred while generating the template.".getBytes()));
        }
    }

    @PostMapping("/bulkRegister")
    public ResponseEntity<String> uploadUsers(@RequestBody List<User> users) {
        try {
            userService.createMultipleUsers(users);
            return ResponseEntity.ok("Users registered successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to register users: " + e.getMessage());
        }
    }

    // Get all users
    @GetMapping("/all")
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
    // public ResponseEntity<User> updateUser(@PathVariable Long userId, @Valid
    // @RequestBody User user) {
    // User updatedUser = userService.updateUser(userId, user);
    // return new ResponseEntity<>(updatedUser, HttpStatus.OK);
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
        String token = userService.login(requestBody.get("userName"), requestBody.get("password"));
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
        String extractedToken = ""; // Initialize outside if block
        if (token != null && token.startsWith("Bearer ")) {
            // Remove "Bearer " prefix
            extractedToken = token.substring(7);
        } else {
            // Handle missing or improperly formatted token
            return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
        }
        boolean isValid = userService.validateToken(extractedToken);
        return new ResponseEntity<>(isValid, HttpStatus.OK);
    }

}
