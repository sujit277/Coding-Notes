package com.user_service.service;

import com.user_service.exception.ResourceNotFoundException;
import com.user_service.model.User;
import com.user_service.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        //generate unique userId
        String randomUserId = UUID.randomUUID().toString();
        user.setUserId(randomUserId);
        return this.userRepository.save(user);
    }

    @Override
    public List<User> getAllUser() {
        return this.userRepository.findAll();
    }

    @Override
    public User getUser(String userId) {
        return this.userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException(("User with given id is not found")));
    }
}
