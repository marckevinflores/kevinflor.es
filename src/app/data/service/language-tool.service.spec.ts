import { TestBed } from '@angular/core/testing';

import { LanguageToolService } from './language-tool.service';

describe('LanguageToolService', () => {
  let service: LanguageToolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageToolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
