package com.rating_service.service;

import com.rating_service.model.Rating;
import java.util.List;

public interface RatingService {

    //create
    Rating saveRating(Rating rating);

    //get All ratings
    List<Rating> getAllRatings();

    //get All ratings by userId
    List<Rating> getRatingByUserId(String userId);

    //get All ratings by hotelId
    List<Rating> getRatingByHotelId(String hotelId);

}
