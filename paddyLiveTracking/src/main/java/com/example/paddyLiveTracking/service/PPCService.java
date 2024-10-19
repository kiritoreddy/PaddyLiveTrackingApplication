package com.example.paddyLiveTracking.service;

import com.example.paddyLiveTracking.model.PPC;
import com.example.paddyLiveTracking.repository.PPCRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PPCService {

    @Autowired
    private PPCRepository ppcRepository;

    public PPC getPPCById(Long ppcId) {
        Optional<PPC> ppc = ppcRepository.findById(ppcId);
        return ppc.orElse(null);
    }

    public List<PPC> getAllPPCs() {
        return ppcRepository.findAll();
    }

    public PPC createPPC(PPC ppc) {
        return ppcRepository.save(ppc);
    }
}
