import { TestBed, inject } from '@angular/core/testing';

import { SlideViewService } from './slide-view.service';

describe('SlideViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlideViewService]
    });
  });

  it('should be created', inject([SlideViewService], (service: SlideViewService) => {
    expect(service).toBeTruthy();
  }));
});
