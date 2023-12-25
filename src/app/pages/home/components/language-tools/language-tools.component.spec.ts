import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageToolsComponent } from './language-tools.component';

describe('LanguageToolsComponent', () => {
  let component: LanguageToolsComponent;
  let fixture: ComponentFixture<LanguageToolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageToolsComponent]
    });
    fixture = TestBed.createComponent(LanguageToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
