package com.example.springboottomcat.controller;

import com.example.springboottomcat.models.Status;
import com.example.springboottomcat.models.User;
import com.example.springboottomcat.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class StatusController {

    @Autowired
    StatusService statusService;

    @GetMapping("/status")
    public List allStatus() {
        return statusService.list();
    }

    @PostMapping("/status")
    public ResponseEntity<Status> addStatus(@RequestBody Status status) {
        return statusService.add(status.getStatus());
    }

    @PutMapping("/status")
    public ResponseEntity<Status> updateStatus(@RequestBody Status status) {
        return statusService.updateStatus(status.getStatusId(), status.getStatus());
    }
}
