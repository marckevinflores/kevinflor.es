import { HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { FooterModule } from './layout/footer/footer.module';
import { NavbarModule } from './layout/navbar/navbar.module';
import { ScrollToTopModule } from './shared/components/scroll-to-top/scroll-to-top.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [FooterModule, RouterOutlet, NavbarModule, ScrollToTopModule],
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.elementRef.nativeElement.removeAttribute("ng-version");
    this.elementRef.nativeElement.removeAttribute("ng-server-context");
  }

}
