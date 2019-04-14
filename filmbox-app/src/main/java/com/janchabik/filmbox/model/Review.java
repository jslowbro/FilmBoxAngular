package com.janchabik.filmbox.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;


@Entity
@Table(name = "reviews")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Review implements Serializable{


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "author")
    private String author;

    @Column(name = "content")
    private String content;

    @Column(name ="upvotes")
    private int upvotes;

    @Column(name = "downvotes")
    private int downvotes;

    @Column(name = "rating")
    private int rating;

    @Column(name = "pub_date")
    private Date date;

    @ManyToOne
    @JoinColumn(name = "film_id", nullable = false)
    @JsonIgnore
    private Film film;

    public Review(String author, String content, Film film) {
        this.author = author;
        this.content = content;
        this.film = film;
        this.upvotes = 0;
        this.downvotes = 0;
    }

    @Override
    public String toString() {
        return "Review{" +
                "id=" + id +
                ", author='" + author + '\'' +
                ", content='" + content + '\'' +
                ", upvotes=" + upvotes +
                ", downvotes=" + downvotes +
                ", film=" + film +
                '}';
    }

}
