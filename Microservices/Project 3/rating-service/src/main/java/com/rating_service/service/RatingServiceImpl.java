package com.rating_service.service;

import com.rating_service.model.Rating;
import com.rating_service.repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RatingServiceImpl implements RatingService{

    @Autowired
    private RatingRepository ratingRepository;

    @Override
    public Rating saveRating(Rating rating) {
        return this.ratingRepository.save(rating);
    }

    @Override
    public List<Rating> getAllRatings() {
        return this.ratingRepository.findAll();
    }

    @Override
    public List<Rating> getRatingByUserId(String userId) {
        return this.ratingRepository.findByUserId(userId);
    }

    @Override
    public List<Rating> getRatingByHotelId(String hotelId) {
        return this.ratingRepository.findByHotelId(hotelId);
    }
}
