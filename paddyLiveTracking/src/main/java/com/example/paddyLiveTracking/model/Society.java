package com.example.paddyLiveTracking.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "society") // Table name in the database
public class Society {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-incremented ID
    @Column(name = "societyId") // Column name in the table
    private Long societyId;

    @Column(name = "societyName", nullable = false, length = 100) // Not nullable, max length 100
    private String societyName;

    @Column(name = "incharge", nullable = false, length = 100) // Not nullable, max length 100
    private String incharge;

    @Column(name = "phoneNumber", length = 15) // Nullable, max length 15
    private String phoneNumber;

    @Column(name = "email", length = 100) // Nullable, max length 100
    private String email;

    // Getters and Setters
    public Long getSocietyId() {
        return societyId;
    }

    public void setSocietyId(Long societyId) {
        this.societyId = societyId;
    }

    public String getSocietyName() {
        return societyName;
    }

    public void setSocietyName(String societyName) {
        this.societyName = societyName;
    }

    public String getIncharge() {
        return incharge;
    }

    public void setIncharge(String incharge) {
        this.incharge = incharge;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
