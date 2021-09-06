package com.example.springboottomcat.service;

import com.example.springboottomcat.models.Status;
import com.example.springboottomcat.models.User;
import com.example.springboottomcat.repository.StatusRepository;
import com.example.springboottomcat.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Period;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StatusRepository statusRepository;

    public List<User> list() {
        return userRepository.findAll();
    }

    public List<User> getPending(){
        List<User> UserWithPending = list().stream().filter(p -> { System.out.println(p.getStatus().getStatus()); return p.getStatus().getStatus().equals("pending"); }).collect(Collectors.toList());
        return UserWithPending;
    }

    public ResponseEntity<User> add(String first, String last, String contact, String email, String address, String business) {
        Status statusRes = statusRepository.save(new Status("pending", LocalDate.now()));
        User user = userRepository.save(new User(first, last, contact, email, address, business, statusRes));
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    public List<User> last30Days(){

        List<User> _last30Days = list().stream().filter(p -> {
            Duration duration = Duration.between(p.getStatus().getDate().atStartOfDay(), LocalDateTime.now());
            System.out.println(duration.toDays());
            System.out.println(p.getStatus().getStatus());
            return ((duration.toDays() <= 30) && (!p.getStatus().getStatus().equals("pending"))); }).collect(Collectors.toList());
        return _last30Days;

    }

}