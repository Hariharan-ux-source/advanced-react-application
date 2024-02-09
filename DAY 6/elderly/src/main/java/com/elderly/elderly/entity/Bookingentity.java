package com.elderly.elderly.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "eve")
public class Bookingentity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name",nullable = false)
    private String name;

    @Column(name = "address",nullable = false)
    private String address;

    @Column(name = "eventname",nullable = false)
    private String eventname;

    @Column(name = "email",nullable = false)
    private String email;
    
    @Column(name = "date",nullable = false)
    private String date;

    @Column(name = "timing",nullable = false)
    private String timing;

    @Column(name = "people",nullable = false)
    private Integer people;


}