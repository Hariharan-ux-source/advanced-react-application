package com.elderly.elderly.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Bookingdto {
    private Long id;
    private String name;
    private String address;
    private String eventname;
    private String email;
    private String date;
    private String timing;
    private Integer people;

}