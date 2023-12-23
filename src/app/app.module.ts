import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FooterModule } from './layout/footer/footer.module';
import { NavbarModule } from './layout/navbar/navbar.module';
import { ScrollToTopModule } from './shared/components/scroll-to-top/scroll-to-top.module';
import { SafePipe } from './core/pipe/safe.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    FooterModule,
    NavbarModule,
    ScrollToTopModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
