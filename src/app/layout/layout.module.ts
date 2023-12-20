import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule
  ],
  exports: [NavbarModule, FooterModule]
})
export class LayoutModule { }
