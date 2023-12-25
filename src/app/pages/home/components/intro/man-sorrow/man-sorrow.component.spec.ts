import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManSorrowComponent } from './man-sorrow.component';


describe('StarfieldComponent', () => {
  let component: ManSorrowComponent;
  let fixture: ComponentFixture<ManSorrowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManSorrowComponent]
    });
    fixture = TestBed.createComponent(ManSorrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
