package com.janchabik.filmbox.repo;

import com.janchabik.filmbox.model.Film;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(path = "films", collectionResourceRel = "films")
@CrossOrigin(origins = "http://localhost:4200")
public interface FilmRepository extends JpaRepository<Film,Integer> {

}
