import { TestBed } from '@angular/core/testing';

import { CreatorService } from './creator.service';

describe('CreatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatorService = TestBed.get(CreatorService);
    expect(service).toBeTruthy();
  });
});
