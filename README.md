# OMDB Movie Explorer

A full-stack movie search application built with **Java Spring Boot (Backend)** + **React (Frontend)** as part of the assignment for Java Developer role.

**Live Demo (when running locally):** http://localhost:3000

## Features Implemented

- Search movies/series by title using the official OMDB API
- Display results in a responsive grid with posters, title and year
- Click any movie → view detailed modal (plot, director, actors, rating, poster)
- Fully responsive design (mobile + desktop)
- In-memory caching with Caffeine (10-minute expiry, max 100 entries)
- Secure API key handling (via environment variable – never hardcoded)
- Proper RESTful endpoints
- CORS properly configured
- Clean, modular and extensible code structure

## Tech Stack

**Backend**

- Java 17
- Spring Boot 3.4.12
- Spring Web + Spring Cache
- Caffeine (in-memory cache with expiry & size limit)
- RestTemplate + Jackson
- Maven

**Frontend**

- React (Create React App)
- Axios
- Bootstrap 5 + React-Bootstrap
- Responsive design

## Project Structure

omdb-movie-explorer/
├── backend/ # Spring Boot API
│ ├── src/main/java/com/example/omdbapi/
│ │ ├── controller/OmdbController.java
│ │ ├── service/OmdbService.java
│ │ ├── config/CacheConfig.java
│ │ ├── config/CorsGlobalConfig.java
│ │ └── OmdbApiApplication.java
│ └── pom.xml
├── frontend/ # React UI
│ ├── src/App.js
│ ├── src/MovieDetails.js
│ └── package.json
└── README.md

## How to Run Locally

### 1. Get your free OMDB API Key

https://www.omdbapi.com/apikey.aspx (free tier is enough)

### 2. Start the Backend (Spring Boot)

In powershell

- cd backend

# Set your API key (replace with your actual key)

- $env:OMDB_API_KEY="key"

# Run the server

- mvn spring-boot:run

Backend will run on → http://localhost:8080

### 3. Start the Frontend (React)

Open a new terminal:
PowerShell - cd frontend - npm start
Frontend will open automatically → http://localhost:3000

### 4. Use the App

Type any movie/series name (e.g., "batman", "friends", "avengers")
Click any card to see full details

API Endpoints (for reference)

GET /search?title=batman → returns search results
GET /movie?id=tt3896198 → returns single movie details
Caching: repeated searches are served from memory (faster + saves API calls)
