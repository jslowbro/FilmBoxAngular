package com.janchabik.filmbox.rest;

import com.janchabik.filmbox.model.Film;
import com.janchabik.filmbox.repo.FilmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FilmRESTController {


    @Autowired
    private FilmRepository filmRepository;

    @GetMapping("/films")
    private List<Film> getAllFilms(){
        return filmRepository.findAll();
    }

    @GetMapping("/films/{id}")
    private Film getFilmById (@PathVariable int id) {
        return filmRepository.findById(id).orElse(null);
    }
}
