import { TestBed } from '@angular/core/testing';

import { MaterialComponentService } from './material-component.service';

describe('MaterialComponentService', () => {
  let service: MaterialComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
