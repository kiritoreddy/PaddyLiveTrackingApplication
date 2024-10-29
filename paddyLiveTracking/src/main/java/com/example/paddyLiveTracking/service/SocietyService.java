package com.example.paddyLiveTracking.service;

import com.example.paddyLiveTracking.model.Society;
import com.example.paddyLiveTracking.repository.SocietyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SocietyService {

    private final SocietyRepository societyRepository;

    @Autowired
    public SocietyService(SocietyRepository societyRepository) {
        this.societyRepository = societyRepository;
    }

    // Method to retrieve all societies
    public List<Society> getAllSocieties() {
        return societyRepository.findAll();
    }

    // Method to get a map of society names to their IDs
    public Map<String, Long> getSocietyNameToIdMap() {
        List<Society> societies = societyRepository.findAll();
        Map<String, Long> societyNameToIdMap = new HashMap<>();

        for (Society society : societies) {
            societyNameToIdMap.put(society.getSocietyName(), society.getSocietyId());
        }

        return societyNameToIdMap;
    }
}
