package com.example.springboottomcat.service;

import com.example.springboottomcat.models.Status;
import com.example.springboottomcat.models.User;
import com.example.springboottomcat.repository.StatusRepository;
import com.example.springboottomcat.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class StatusService {

    @Autowired
    private StatusRepository statusRepository;

    public List<Status> list() {
        return statusRepository.findAll();
    }

    public ResponseEntity<Status> add(String status) {
        Status statusRes = statusRepository.save(new Status(status, LocalDate.now()));
        return new ResponseEntity<>(statusRes, HttpStatus.CREATED);
    }

    public ResponseEntity<Status> updateStatus(long statusId, String status) {
        Optional<Status> statusData = statusRepository.findById(statusId);
        Status _status = statusData.get();
        _status.setStatus(status);
        _status.setDate(LocalDate.now());
        return new ResponseEntity<>(statusRepository.save(_status), HttpStatus.OK);

    }

}