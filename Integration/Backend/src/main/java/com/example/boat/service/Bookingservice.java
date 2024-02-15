package com.example.boat.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.boat.dto.Bookingdto;
import com.example.boat.mapper.Bookingmapper;
import com.example.boat.model.Bookingentity;
import com.example.boat.repository.BookingRepository;

@Service
public class Bookingservice {

    private final BookingRepository bookingRepository;

    public Bookingservice(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    public List<Bookingdto> getAllServices() {
        return bookingRepository.findAll().stream()
                .map(Bookingmapper::maptoServicedto)
                .collect(Collectors.toList());
    }

    public Bookingdto createService(Bookingdto service) {
        Bookingentity entity = Bookingmapper.maptoServiceentity(service);
        return Bookingmapper.maptoServicedto(bookingRepository.save(entity));
    }

    public Bookingdto getServiceByEmail(String email) {
        Bookingentity entity = bookingRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Service not found with email: " + email));
        return Bookingmapper.maptoServicedto(entity);
    }

    public void updateServiceByEmail(String email, Bookingdto service) {
        Bookingentity entity = bookingRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Service not found with email: " + email));
        entity.setName(service.getName());
        entity.setAddress(service.getAddress());
        entity.setEventname(service.getEventname());
        entity.setDate(service.getDate());
        entity.setTiming(service.getTiming());
        entity.setPeople(service.getPeople());
        bookingRepository.save(entity);
    }

    public void deleteServiceByEmail(String email) {
        Bookingentity entity = bookingRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Service not found with email: " + email));
        bookingRepository.delete(entity);
    }

    public void updateServiceById(Long id, Bookingdto dto) {
        Bookingentity entity = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Service not found with id: " + id));
        entity.setName(dto.getName());
        entity.setAddress(dto.getAddress());
        entity.setEventname(dto.getEventname());
        entity.setEmail(dto.getEmail());
        entity.setDate(dto.getDate());
        entity.setTiming(dto.getTiming());
        entity.setPeople(dto.getPeople());
        bookingRepository.save(entity);
    }
    
    public void deleteServiceById(Long id) {
        Bookingentity entity = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Service not found with id: " + id));
        bookingRepository.delete(entity);
    }
    
}
