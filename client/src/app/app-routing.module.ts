import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ReviewListComponent} from './review-list/review-list.component';
import {FilmListComponent} from './film-list/film-list.component';
import {FilmDetailsComponent} from './film-details/film-details.component';
import {CreatorDetailComponent} from './creator-detail/creator-detail.component';
import {CreatorListComponent} from './creator-list/creator-list.component';

const routes: Routes = [
  {path: '', component: FilmListComponent},
  {path: 'films', redirectTo: ''},
  {path: 'films/:id', component: FilmDetailsComponent},
  {path: 'creators/:id', component: CreatorDetailComponent},
  {path: 'creators', component: CreatorListComponent},
  {path: 'reviews', component: ReviewListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
