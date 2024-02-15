package com.example.boat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.boat.dto.Bookingdto;
import com.example.boat.model.Bookingentity;
import com.example.boat.service.Bookingservice;


@CrossOrigin
@RestController
@RequestMapping("/admin/")
public class AdminController {

    
    @Autowired
    private Bookingservice bookingservice;


    @GetMapping
    public ResponseEntity<List<Bookingdto>> getAllServices() {
        List<Bookingdto> services = bookingservice.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }


    @PutMapping("/{email}")
    public ResponseEntity<Void> updateServiceByEmail(@PathVariable String email, @RequestBody Bookingdto service) {
        bookingservice.updateServiceByEmail(email, service);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
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
