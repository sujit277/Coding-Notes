package com.hotel_service.controller;

import com.hotel_service.model.Hotel;
import com.hotel_service.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/hotels")
public class HotelController {

    @Autowired
    private HotelService hotelService;

    @PostMapping
    public ResponseEntity<Hotel> createHotel(@RequestBody Hotel hotel){
        Hotel hotel1 = this.hotelService.saveHotel(hotel);
        return ResponseEntity.status(HttpStatus.CREATED).body(hotel1);
    }

    @GetMapping("/{hotelId}")
    public  ResponseEntity<Hotel> getSingleHotel(@PathVariable String hotelId){
        Hotel hotel = this.hotelService.getHotel(hotelId);
        return ResponseEntity.ok(hotel);
    }

    @GetMapping
    public ResponseEntity<List<Hotel>> getAllHotel(){
        List<Hotel> allHotels = this.hotelService.getAllHotel();
        return ResponseEntity.ok(allHotels);
    }

}
