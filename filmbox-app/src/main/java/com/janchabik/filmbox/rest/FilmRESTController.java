package com.janchabik.filmbox.rest;

import com.janchabik.filmbox.model.Creator;
import com.janchabik.filmbox.model.Film;
import com.janchabik.filmbox.model.Review;
import com.janchabik.filmbox.repo.FilmRepository;
import com.janchabik.filmbox.repo.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FilmRESTController {


    @Autowired
    private FilmRepository filmRepository;

    @Autowired
    private ReviewRepository reviewRepository;

    @GetMapping("/films")
    private List<Film> getAllFilms(){
        return filmRepository.findAll();
    }

    @GetMapping("/films/{id}")
    private Film getFilmById (@PathVariable long id) {
        return filmRepository.findById(id).orElse(null);
    }

    @GetMapping("/films/{id}/reviews")
    private List<Review> getReviewsForFilm(@PathVariable long id){
        return filmRepository.findById(id).orElse(null).getReviews();
    }

    @GetMapping("/films/{id}/creator")
    private Creator getCreator(@PathVariable long id) {
        return filmRepository.findById(id).orElse(null).getCreator();
    }

    @PostMapping("/films/{id}/reviews")
    @CrossOrigin
    private Review addReview(@PathVariable long id, @Valid @RequestBody Review review) throws Exception {
        return filmRepository.findById(id)
                .map(film -> {
                    review.setFilm(film);
                    //film.getReviews().add(review);
                    //filmRepository.save(film);
                    return reviewRepository.save(review);
                }).orElseThrow(()-> new Exception("Film not found"));
    }
}
