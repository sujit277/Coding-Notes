package com.user_service.service;

import com.user_service.model.User;
import java.util.List;

public interface UserService {

    // Create User
    User saveUser(User user);

    // Get All Users
    List<User> getAllUser();

    // Get Single User using UserId
    User getUser(String userId);
}
