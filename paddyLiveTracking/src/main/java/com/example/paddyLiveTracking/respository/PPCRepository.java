package com.example.paddyLiveTracking.repository;

import com.example.paddyLiveTracking.model.PPC;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PPCRepository extends JpaRepository<PPC, Long> {
}
