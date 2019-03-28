package com.janchabik.filmbox.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;


@Entity
@Table(name = "creators")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = "films")
public class Creator implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "description")
    private String description;

    @OneToMany(mappedBy = "creator")
    @JsonBackReference
    private List<Film> films;




    public Creator(String name, String surname, String description) {
        this.name = name;
        this.surname = surname;
        this.description = description;
    }


    @Override
    public String toString() {
        return "Creator{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
