package com.hotel_service.service;

import com.hotel_service.exception.ResourceNotFoundException;
import com.hotel_service.model.Hotel;
import com.hotel_service.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.UUID;

@Service
public class HotelServiceImpl implements HotelService{

    @Autowired
    private HotelRepository hotelRepository;

    @Override
    public Hotel saveHotel(Hotel hotel) {
        //generate unique hotelId
        String randomUserId = UUID.randomUUID().toString();
        hotel.setId(randomUserId);
        return this.hotelRepository.save(hotel);
    }

    @Override
    public List<Hotel> getAllHotel() {
        return this.hotelRepository.findAll();
    }

    @Override
    public Hotel getHotel(String id) {
        return this.hotelRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Hotel with given Id is not found"));
    }
}
