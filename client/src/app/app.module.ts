import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReviewService} from './shared/services/review/review.service';
import {HttpClientModule} from '@angular/common/http';
import { ReviewListComponent } from './review-list/review-list.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { CreatorDetailComponent } from './creator-detail/creator-detail.component';
import { CreatorListComponent } from './creator-list/creator-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatButtonToggleModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatTabBody,
  MatTabLabel,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { ReviewFormComponent } from './review-form/review-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ReviewListComponent,
    FilmListComponent,
    FilmDetailsComponent,
    CreatorDetailComponent,
    CreatorListComponent,
    ReviewFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    MatTabsModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
