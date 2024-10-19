package com.example.paddyLiveTracking.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "ppc")
public class PPC {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ppcId")
    private Long id;

    @Column(name = "ppcName")
    private String ppcName;

    @Column(name = "mandal")
    private String mandal;

    @Column(name = "incharge")
    private String inchargeName;

    @Column(name = "societyId")
    private Long societyId;

    @Column(name = "phoneNumber")
    private String phoneNumber;

    @Column(name = "activeStatus")
    private Boolean activeStatus;

    public String getMandal() {
        return mandal;
    }

    public void setMandal(String mandal) {
        this.mandal = mandal;
    }

    public Boolean getActiveStatus() {
        return activeStatus;
    }

    public void setActiveStatus(Boolean activeStatus) {
        this.activeStatus = activeStatus;
    }

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

    public String getInchargeName() {
        return inchargeName;
    }

    public void setIncharge(String inchargeName) {
        this.inchargeName = inchargeName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
