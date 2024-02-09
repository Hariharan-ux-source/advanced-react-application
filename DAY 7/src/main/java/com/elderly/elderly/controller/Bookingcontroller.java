package com.elderly.elderly.controller;

import com.elderly.elderly.dto.Bookingdto;
import com.elderly.elderly.service.Bookingservice;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/services")
public class Bookingcontroller  {

    private final Bookingservice Bookingservice;

    public Bookingcontroller(Bookingservice serviceservice) {
        this.Bookingservice = serviceservice;
    }

    @GetMapping
    public ResponseEntity<List<Bookingdto>> getAllServices() {
        List<Bookingdto> services = Bookingservice.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    @GetMapping("/{name}")
    public ResponseEntity<Bookingdto> getServiceByName(@PathVariable String name) {
        Bookingdto service = Bookingservice.getServiceByName(name);
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Bookingdto> createService(@RequestBody Bookingdto service) {
        Bookingdto createdService = Bookingservice.createService(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }

    @PutMapping("/{name}")
    public ResponseEntity<Bookingdto> updateServiceByName(@PathVariable String name, @RequestBody Bookingdto updatedService) {
        Bookingdto updatedServiceDto = Bookingservice.updateServiceByName(name, updatedService);
        if (updatedServiceDto != null) {
            return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{name}")
    public ResponseEntity<Void> deleteServiceByName(@PathVariable String name) {
        Bookingservice.deleteServiceByName(name);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}