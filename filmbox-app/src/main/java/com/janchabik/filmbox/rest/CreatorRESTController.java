package com.janchabik.filmbox.rest;

import com.janchabik.filmbox.model.Creator;
import com.janchabik.filmbox.model.Film;
import com.janchabik.filmbox.repo.CreatorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CreatorRESTController {

    @Autowired
    private CreatorRepository creatorRepository;

    @GetMapping("/creators")
    public List<Creator> getAllCreators(){
        return creatorRepository.findAll();
    }

    @GetMapping("/creators/{id}")
    public Creator getCreatorById(@PathVariable long id){
        return creatorRepository.findById(id).orElse(null);
    }

    @GetMapping("/creators/{id}/films")
    public List<Film> getFilmsOfCreator(@PathVariable long id){
        return creatorRepository.findById(id).orElse(null).getFilms();
    }


}
