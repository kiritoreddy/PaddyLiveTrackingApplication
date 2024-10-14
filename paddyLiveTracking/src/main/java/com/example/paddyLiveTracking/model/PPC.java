package com.example.paddyLiveTracking.model;

import javax.persistence.*;

@Entity
@Table(name = "ppc")
public class PPC {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ppc_name")
    private String ppcName;

    @Column(name = "location")
    private String location;

    @Column(name = "incharge_name")
    private String inchargeName;

    @Column(name = "phone_number")
    private String phoneNumber;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPpcName() {
        return ppcName;
    }

    public void setPpcName(String ppcName) {
        this.ppcName = ppcName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getInchargeName() {
        return inchargeName;
    }

    public void setInchargeName(String inchargeName) {
        this.inchargeName = inchargeName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
