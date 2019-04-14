import { Component, OnInit } from '@angular/core';
import {CreatorService} from '../shared/services/creator/creator.service';
import {Creator} from '../shared/models/Creator';
import {ActivatedRoute, Router} from '@angular/router';
import {Film} from '../shared/models/Film';
import {FilmService} from '../shared/services/film/film.service';

@Component({
  selector: 'app-creator-detail',
  templateUrl: './creator-detail.component.html',
  styleUrls: ['./creator-detail.component.css']
})
export class CreatorDetailComponent implements OnInit {
  creator: Creator;
  films: Film[];
  constructor(
    private creatorService: CreatorService,
    private filmService: FilmService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getCreator(id);
    this.getFilms(id);
  }
  getCreator(id: number): void {
    this.creatorService.getById(id).subscribe(creator => this.creator = creator);
  }

  getFilms(id: number) {
    this.filmService.getByCreatorId(id).subscribe(films => this.films = films);
  }
  gotoFilm(film: Film) {
    const link =['/films', film.id];
    this.router.navigate(link);
  }
}
