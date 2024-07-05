package com.rating_service.controller;

import com.rating_service.model.Rating;
import com.rating_service.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/ratings")
public class RatingController {

    @Autowired
    private RatingService ratingService;

    @PostMapping
    public ResponseEntity<Rating> createRating(@RequestBody Rating rating){
        Rating rating1 = this.ratingService.saveRating(rating);
        return ResponseEntity.status(HttpStatus.CREATED).body(rating);
    }

    @GetMapping
    public ResponseEntity<List<Rating>> getRatings(){
        List<Rating> Ratings = this.ratingService.getAllRatings();
        return ResponseEntity.ok(Ratings);
    }

    @GetMapping("/users/{userId}")
    public ResponseEntity<List<Rating>> getRatingsByUserId(@PathVariable String userId){
        List<Rating> Ratings = this.ratingService.getRatingByUserId(userId);
        return ResponseEntity.ok(Ratings);
    }

    @GetMapping("/hotels/{hotelId}")
    public ResponseEntity<List<Rating>> getRatingsByHotelId(@PathVariable String hotelId){
        List<Rating> Ratings = this.ratingService.getRatingByHotelId(hotelId);
        return ResponseEntity.ok(Ratings);
    }
}
