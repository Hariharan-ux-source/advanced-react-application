
package com.elderly.elderly.mapper;

import com.elderly.elderly.dto.Bookingdto;
import com.elderly.elderly.entity.Bookingentity;

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