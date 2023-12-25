import { NgModule } from '@angular/core';
import { ManSorrowComponent } from './man-sorrow.component';
import { AsyncPipe, NgFor, NgForOf, NgIf } from '@angular/common';

@NgModule({
  declarations: [ManSorrowComponent],
  imports: [AsyncPipe, NgIf, NgFor, NgForOf],
  exports: [ManSorrowComponent]
})
export class ManSorrowModule { }
