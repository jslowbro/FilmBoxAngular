package com.janchabik.filmbox.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
import java.util.List;

@Entity
@Data
@Table(name = "films")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Film implements Serializable {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "theatrical_release")
    private Date theatricalRelease;

    @Column(name = "duration")
    private int duration;

    @Column(name = "genre")
    private String genre;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "creator_id", nullable = false)
    @JsonIgnore
    private Creator creator;

    @Column(name ="rating")
    private double rating;



    @OneToMany(mappedBy = "film", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    //@JsonBackReference
    private List<Review> reviews;



    public Film(String title, Date theatricalRelease, int duration, String genre, Creator creator) {
        this.title = title;
        this.theatricalRelease = theatricalRelease;
        this.duration = duration;
        this.genre = genre;
        this.creator = creator;
    }


    @Override
    public String toString() {
        return "Film{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", theatricalRelease=" + theatricalRelease +
                ", duration=" + duration +
                ", genre='" + genre + '\'' +
                ", creator=" + creator +
                '}';
    }
}
