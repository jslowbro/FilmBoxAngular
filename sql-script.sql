DROP database if exists `filmbox`;
CREATE database `filmbox`;
USE  `filmbox`;

DROP TABLE if exists `films`;
DROP TABLE if exists `creators`;
DROP TABLE if exists `reviews`;

CREATE TABLE `creators` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` nvarchar(64) NOT NULL,
  `surname` nvarchar(64) NOT NULL,
  `description` nvarchar(256),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

CREATE TABLE `films` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` nvarchar(64) NOT NULL,
  `theatrical_release` DATE DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `genre` nvarchar(64) DEFAULT NULL,
  `creator_id` int(11) DEFAULT NULL,
  `rating` double DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `FK_FROM_idx` (`creator_id`),
  FOREIGN KEY (`creator_id`) REFERENCES `creators` (`id`)
 ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
 
 CREATE TABLE `reviews` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
    `author` nvarchar(64) NOT NULL,
    `content` nvarchar(512) NOT NULL,
    `upvotes` int(11) DEFAULT 0,
    `downvotes` int(11) DEFAULT 0,
    `film_id` int(11) DEFAULT NULL,
    `rating` int(11) DEFAULT 0,
    `pub_date` Date DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `FK_FROM_idx` (`film_id`),
	FOREIGN KEY (`film_id`) REFERENCES `films` (`id`)
 ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
 
 INSERT INTO `creators`(name,surname, description) values
 ('David', 'Cameron', 'American Director'),
 ('Roman', 'Polanski', 'Polish Director'),
 ('Alejandro ', 'Inarritu', 'Mexican Director'),
 ('Francis', 'Coppola', 'American Director'),
 ('Danny', 'Boyle', 'British Director');
 
 INSERT INTO `films`(title,theatrical_release,duration,genre,creator_id, rating) values
 ('Avatar', now(), 123, 'Action', 1, 0.0),
 ('Pianist', now(), 123, 'War/Drama', 2 , 0.0),
 ('Birdman', now(), 123, 'Drama', 3 , 0.0),
 ('The Godfather', now(), 123, 'Gangster', 4 , 0.0),
 ('Trainspotting', now(), 123, 'Drama', 5 , 0.0),
 ('Rosemarys Baby', now(), 123, 'Drama', 2 , 0.0),
 ('The Godfather 2', now(), 123, 'Gangster', 4 , 0.0);
 
 INSERT INTO `reviews`(author,content,film_id, rating, pub_date) values
 ('Anonymous', 'This movie sucks', 1, 0, now()),
 ('Anonymous', 'This movie sucks', 2, 0, now()),
 ('Anonymous', 'This movie sucks', 3, 0, now()),
 ('Anonymous', 'This movie sucks', 4, 0, now()),
 ('Anonymous', 'This movie sucks', 5, 0, now()),
 ('Anonymous', 'This movie sucks', 2, 0, now());