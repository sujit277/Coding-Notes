package com.jwt.service;

import com.jwt.models.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class UserService {
    private List<User> store = new ArrayList<>();

    public UserService(){
        store.add(new User(UUID.randomUUID().toString(),"Sujit Kumar Verma","sujit@dev.in"));
        store.add(new User(UUID.randomUUID().toString(),"Mansi Mallick","mansi@dev.in"));
        store.add(new User(UUID.randomUUID().toString(),"Sharguru Ravi","sharguru@dev.in"));
        store.add(new User(UUID.randomUUID().toString(),"Subham Tyagi","shubham@dev.in"));
    }

    public List<User> getUsers(){
        return this.store;
    }
}
