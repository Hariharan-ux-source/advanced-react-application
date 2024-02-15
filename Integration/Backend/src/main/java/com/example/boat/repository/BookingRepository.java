package com.example.boat.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.boat.model.Bookingentity;

public interface BookingRepository extends JpaRepository<Bookingentity, Long> {
    Optional<Bookingentity> findByEmail(String email);
    // Add a new method for finding a booking by ID
    Optional<Bookingentity> findById(Long id);
}
