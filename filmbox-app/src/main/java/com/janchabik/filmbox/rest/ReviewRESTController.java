package com.janchabik.filmbox.rest;

import com.janchabik.filmbox.model.Review;
import com.janchabik.filmbox.repo.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200","chrome-extension://aejoelaoggembcahagimdiliamlcdmfm/restlet_client.html"})
public class ReviewRESTController {

    @Autowired
    private ReviewRepository reviewRepository;

    @GetMapping("/reviews")
    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }
    @PutMapping("/reviews/{id}")
    public Review updateReview(@PathVariable long id, @Valid @RequestBody Review reviewUpdated) throws Exception{
        return reviewRepository.findById(id).
                map(review -> {
                    review.setContent(reviewUpdated.getContent());
                    review.setUpvotes(reviewUpdated.getUpvotes());
                    review.setDownvotes(reviewUpdated.getDownvotes());
                    return reviewRepository.save(review);
                }).orElseThrow(() -> new Exception("Review update failed"));

    }

    /*@PostMapping("/reviews")
    @CrossOrigin
    public Review newReview(@RequestBody Review review) {
        return reviewRepository.save(review);
    }*/


}
