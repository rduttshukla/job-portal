import { TestBed } from '@angular/core/testing';

import { JobsProviderService } from './jobs-provider.service';

describe('JobsProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobsProviderService = TestBed.get(JobsProviderService);
    expect(service).toBeTruthy();
  });
});
