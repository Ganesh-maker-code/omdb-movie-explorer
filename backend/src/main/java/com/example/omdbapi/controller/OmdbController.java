package com.example.omdbapi.controller;

import com.example.omdbapi.service.OmdbService;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;   


@RestController
public class OmdbController {

    @Autowired
    private OmdbService omdbService;

    @GetMapping("/search")
    public ResponseEntity<JsonNode> search(@RequestParam String title) {
        return ResponseEntity.ok(omdbService.searchByTitle(title));
    }

    @GetMapping("/movie")
    public ResponseEntity<JsonNode> getMovie(@RequestParam String id) {
        return ResponseEntity.ok(omdbService.getById(id));
    }
}