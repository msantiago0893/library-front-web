import { TestBed } from '@angular/core/testing';

import { EducationalStaffServiceService } from './educational-staff-service.service';

describe('EducationalStaffServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EducationalStaffServiceService = TestBed.get(EducationalStaffServiceService);
    expect(service).toBeTruthy();
  });
});
