import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';
@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LogoModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
