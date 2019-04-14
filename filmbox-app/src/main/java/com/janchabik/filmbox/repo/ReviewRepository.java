package com.janchabik.filmbox.repo;


import com.janchabik.filmbox.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(path = "reviews", collectionResourceRel = "reviews")
@CrossOrigin(origins = "http://localhost:4200")
public interface ReviewRepository extends JpaRepository<Review, Long> {
}
