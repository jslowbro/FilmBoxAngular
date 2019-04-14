import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestReviewListComponent } from './latest-review-list.component';

describe('LatestReviewListComponent', () => {
  let component: LatestReviewListComponent;
  let fixture: ComponentFixture<LatestReviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestReviewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestReviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
