package com.janchabik.filmbox;

import com.janchabik.filmbox.repo.CreatorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManagerFactory;

@SpringBootApplication
public class FilmboxApplication {


	@Autowired
	private CreatorRepository creatorRepository;

	@Autowired
	private EntityManagerFactory entityManagerFactory;


	@Component
	class DataSetup implements ApplicationRunner {

		@Override
		public void run(ApplicationArguments args) throws Exception {


		}
	}

	public static void main(String[] args) {
		SpringApplication.run(FilmboxApplication.class, args);
	}

}
