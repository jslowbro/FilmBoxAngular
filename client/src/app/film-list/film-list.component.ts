import {Component, Input, OnInit} from '@angular/core';
import {FilmService} from '../shared/services/film/film.service';
import {Film} from '../shared/models/Film';
import {Router} from '@angular/router';
import {Creator} from '../shared/models/Creator';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  @Input() creator: Creator;
  @Input() sortby: string;
  films: Film[];
  constructor(
    private filmService: FilmService,
    private router: Router) { }

  ngOnInit() {
    if (!this.creator) {
      this.filmService.getAll().subscribe(data => {
        this.films = data;
      });
    } else {
      this.filmService.getByCreatorId(this.creator.id).subscribe( data => {
        this.films = data;
      });
    }
  }

  gotoDetail(film: Film): void {
    const link = ['/films', film.id];
    this.router.navigate(link);
  }

}
