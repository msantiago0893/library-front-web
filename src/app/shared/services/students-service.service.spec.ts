import { TestBed } from '@angular/core/testing';

import { StudentsServiceService } from './students-service.service';

describe('StudentsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentsServiceService = TestBed.get(StudentsServiceService);
    expect(service).toBeTruthy();
  });
});
