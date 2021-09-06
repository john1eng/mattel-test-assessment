package com.example.springboottomcat.controller;

import com.example.springboottomcat.models.Status;
import com.example.springboottomcat.models.User;
import com.example.springboottomcat.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class AdminController {

    @Autowired
    UserService userService;

    @GetMapping("/user")
    public List allUser() {
       return userService.list();
    }

    @GetMapping("/userwithpending")
    public List allPending() {
        return userService.getPending();
    }

    @PostMapping("/user")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        return userService.add(user.getFirst(), user.getLast(), user.getContact(), user.getEmail(), user.getAddress(), user.getBusiness());
    }

    @GetMapping("/last30Days")
    public List last30Days() {
        return userService.last30Days();
    }
}
