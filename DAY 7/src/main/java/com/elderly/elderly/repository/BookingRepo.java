
// package com.elderly.elderly.repository;

// import org.springframework.data.jpa.repository.JpaRepository;

// import com.elderly.elderly.entity.Serviceentity;

// public interface ServiceRepo extends JpaRepository<Serviceentity, Long> {

// }

package com.elderly.elderly.repository;

import com.elderly.elderly.entity.Bookingentity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepo extends JpaRepository<Bookingentity, Long> {
    Bookingentity findByName(String name);
    void deleteByName(String name);
    // Other methods...
}