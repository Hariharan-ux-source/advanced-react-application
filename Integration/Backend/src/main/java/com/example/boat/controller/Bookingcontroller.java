package com.example.boat.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.boat.dto.Bookingdto;
import com.example.boat.service.Bookingservice;

@RestController
@RequestMapping("/book")
public class Bookingcontroller {

    private final Bookingservice bookingservice;

    public Bookingcontroller(Bookingservice bookingservice) {
        this.bookingservice = bookingservice;
    }

    @GetMapping("/{email}")
    public ResponseEntity<Bookingdto> getServiceByEmail(@PathVariable String email) {
        try {
            Bookingdto service = bookingservice.getServiceByEmail(email);
            return new ResponseEntity<>(service, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping
    public ResponseEntity<Bookingdto> createService(@RequestBody Bookingdto service) {
        try {
            Bookingdto createdService = bookingservice.createService(service);
            return new ResponseEntity<>(createdService, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateServiceById(@PathVariable Long id, @RequestBody Bookingdto service) {
        try {
            bookingservice.updateServiceById(id, service);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteServiceById(@PathVariable Long id) {
        try {
            bookingservice.deleteServiceById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
