package com.janchabik.filmbox.dao;


import com.janchabik.filmbox.model.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;
import java.util.List;

@Component
public class CreatorDAO {

    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @Autowired
    private EntityManager entityManager;


    public void testEMF(){
        Query reviewQuery =  entityManager.createQuery("SELECT * FROM reviews");
        List<Review> list = (List<Review>) reviewQuery.getResultList();
        list.forEach(v-> System.out.println(v));

    }
}
