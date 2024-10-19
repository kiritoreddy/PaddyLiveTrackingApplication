package com.example.paddyLiveTracking.controller;

import com.example.paddyLiveTracking.model.PPC;
import com.example.paddyLiveTracking.service.PPCService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ppc")
public class PPCController {

    @Autowired
    private PPCService ppcService;

    @GetMapping("/{ppcId}")
    public PPC getPPCById(@PathVariable Long ppcId) {
        return ppcService.getPPCById(ppcId);
    }

    @GetMapping("/")
    public List<PPC> getAllPPCs() {
        return ppcService.getAllPPCs();
    }

    @PostMapping("/")
    public PPC createPPC(@RequestBody PPC ppc) {
        return ppcService.createPPC(ppc);
    }
}
