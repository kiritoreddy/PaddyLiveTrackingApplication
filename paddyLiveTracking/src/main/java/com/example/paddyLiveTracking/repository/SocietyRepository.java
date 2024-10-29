package com.example.paddyLiveTracking.repository;

import com.example.paddyLiveTracking.model.Society;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SocietyRepository extends JpaRepository<Society, Long> {
    // You can define custom query methods here if needed.
    List<Society> findAll();
}
