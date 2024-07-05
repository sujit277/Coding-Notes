package com.user_service.controller;

import com.user_service.model.Hotel;
import com.user_service.model.Rating;
import com.user_service.model.User;
import com.user_service.service.UserService;
import com.user_service.service.UserServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private RestTemplate restTemplate;

    private Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    //create
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user){
        User user1 = this.userService.saveUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(user1);
    }


    //getting single user
    @GetMapping("/{userId}")
    public ResponseEntity<User> getSingleUser(@PathVariable String userId){
        //get user from database with the help of user Repository
        User user = this.userService.getUser(userId);
        //get ratings from the rating-service
        Rating[] ratingsOfUser = this.restTemplate.getForObject("http://RATING-SERVICE/ratings/users/"+user.getUserId(), Rating[].class);

        List<Rating> ratings = Arrays.stream(ratingsOfUser).toList();

        logger.info("{}",ratingsOfUser);

        List<Rating> ratingList = ratings.stream().map(rating -> {
            //API call to hotel service to get the hotel
            ResponseEntity<Hotel> forEntity =  restTemplate.getForEntity("http://HOTEL-SERVICE/hotels/"+rating.getHotelId(), Hotel.class);
            Hotel hotel = forEntity.getBody();
            logger.info("response status code: {} ",forEntity.getStatusCode());
            //Set the hotel to rating
            rating.setHotel(hotel);
            //Return the rating
            return rating;
        }).collect(Collectors.toList());

        user.setRatings(ratingList);
        return ResponseEntity.ok(user);
    }

    //get all user
    @GetMapping
    public ResponseEntity<List<User>> getAllUser(){
        List<User> allUsers = this.userService.getAllUser();
        return ResponseEntity.ok(allUsers);
    }

}
