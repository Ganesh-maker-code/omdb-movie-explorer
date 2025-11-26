package com.example.omdbapi.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class OmdbService {

    @Value("${omdb.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();
    private final ObjectMapper objectMapper = new ObjectMapper();
    private final String OMDB_URL = "http://www.omdbapi.com/";

    @Cacheable(value = "omdbCache", key = "#title")
    public JsonNode searchByTitle(String title) {
        String url = OMDB_URL + "?s=" + title + "&apikey=" + apiKey;
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        try {
            return objectMapper.readTree(response.getBody());
        } catch (Exception e) {
            throw new RuntimeException("Error parsing OMDB response");
        }
    }

    @Cacheable(value = "omdbCache", key = "#id")
    public JsonNode getById(String id) {
        String url = OMDB_URL + "?i=" + id + "&apikey=" + apiKey;
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        try {
            return objectMapper.readTree(response.getBody());
        } catch (Exception e) {
            throw new RuntimeException("Error parsing OMDB response");
        }
    }
}