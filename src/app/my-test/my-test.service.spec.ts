import { TestBed, inject } from '@angular/core/testing';

import { MyTestService } from './my-test.service';

describe('MyTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyTestService]
    });
  });

  it('should ...', inject([MyTestService], (service: MyTestService) => {
    expect(service).toBeTruthy();
  }));
});
