
package com.example.boat.mapper;

import com.example.boat.dto.Bookingdto;
import com.example.boat.model.Bookingentity;

public class Bookingmapper {

    public static Bookingdto maptoServicedto(Bookingentity seriviceentity) {
        // Implement the mapping logic
        return new Bookingdto(
            seriviceentity.getId(),
            seriviceentity.getName(),
            seriviceentity.getAddress(),
            seriviceentity.getEventname(),
            seriviceentity.getEmail(),
            seriviceentity.getDate(),
            seriviceentity.getTiming(),
            seriviceentity.getPeople()
        );
    }

    public static Bookingentity maptoServiceentity(Bookingdto servicedto) {
        // Implement the mapping logic
        return new Bookingentity(
                servicedto.getId(),
                servicedto.getName(),
                servicedto.getAddress(),
                servicedto.getEventname(),
                servicedto.getEmail(),
                servicedto.getDate(),
                servicedto.getTiming(),
                servicedto.getPeople()
        );
    }
}