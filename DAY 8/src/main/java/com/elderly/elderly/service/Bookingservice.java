package com.elderly.elderly.service;
import com.elderly.elderly.dto.Bookingdto;
import com.elderly.elderly.entity.Bookingentity;
import com.elderly.elderly.mapper.Bookingmapper;
import com.elderly.elderly.repository.BookingRepo;

import jakarta.transaction.Transactional;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class Bookingservice {

    private final BookingRepo BookingRepo;

    public Bookingservice(BookingRepo BookingRepo) {
        this.BookingRepo = BookingRepo;
    }

    public List<Bookingdto> getAllServices() {
        List<Bookingentity> services = BookingRepo.findAll();
        return services.stream()
                .map(Bookingmapper::maptoServicedto)
                .collect(Collectors.toList());
    }

    public Bookingdto getServiceByName(String name) {
        Bookingentity serviceentity = BookingRepo.findByName(name);
        return Bookingmapper.maptoServicedto(serviceentity);
    }

    @SuppressWarnings("null")
    public Bookingdto createService(Bookingdto servicedto) {
        Bookingentity serviceentity = Bookingmapper.maptoServiceentity(servicedto);
        serviceentity = BookingRepo.save(serviceentity);
        return Bookingmapper.maptoServicedto(serviceentity);
    }

    public Bookingdto updateServiceByName(String name, Bookingdto updatedServicedto) {
        Bookingentity existingService = BookingRepo.findByName(name);

        if (existingService != null) {
            // Update the fields you want to allow updating
            existingService.setName(updatedServicedto.getName());
            existingService.setAddress(updatedServicedto.getAddress());
            existingService.setEventname(updatedServicedto.getEventname());
            existingService.setEmail(updatedServicedto.getEmail());
            existingService.setDate(updatedServicedto.getDate());
            existingService.setTiming(updatedServicedto.getTiming());
            existingService.setPeople(updatedServicedto.getPeople());
            existingService = BookingRepo.save(existingService);
            return Bookingmapper.maptoServicedto(existingService);
        } else {
            // Handle not found scenario
            return null;
        }
    }
    @Transactional
    public void deleteServiceByName(String name) {
        BookingRepo.deleteByName(name);
    }
}