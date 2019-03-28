package com.janchabik.filmbox.rest;

import com.janchabik.filmbox.model.Review;
import com.janchabik.filmbox.repo.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ReviewRESTController {

    @Autowired
    private ReviewRepository reviewRepository;


    @GetMapping("/reviews")
    public List<Review> getAllReviews(){
        return reviewRepository.findAll();
    }


}
