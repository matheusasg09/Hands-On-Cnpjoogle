import { TestBed } from '@angular/core/testing';

import { ReceitaFederalService } from './receitaFederal.service';

describe('SearchCNPJService', () => {
  let service: ReceitaFederalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceitaFederalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
