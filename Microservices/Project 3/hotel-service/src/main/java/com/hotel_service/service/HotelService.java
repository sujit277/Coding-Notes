package com.hotel_service.service;

import com.hotel_service.model.Hotel;
import java.util.List;

public interface HotelService {

    //create
    Hotel saveHotel(Hotel hotel);

    //get All
    List<Hotel> getAllHotel();

    //get Single
    Hotel getHotel(String id);
}
