import { Component, OnInit } from '@angular/core';
import {Creator} from '../shared/models/Creator';
import {CreatorService} from '../shared/services/creator/creator.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-creator-list',
  templateUrl: './creator-list.component.html',
  styleUrls: ['./creator-list.component.css']
})
export class CreatorListComponent implements OnInit {
  creators: Creator[];
  constructor(
    private creatorService: CreatorService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getCreators();
  }
  getCreators() {
    this.creatorService.getAll().subscribe(creators => this.creators = creators);
  }

  gotoCreator(creator: Creator) {
    const link = ['/creators', creator.id];
    this.router.navigate(link);
  }
}
