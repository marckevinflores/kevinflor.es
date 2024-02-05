import { Component, ElementRef, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { Navbar } from '@layout/navbar/navbar';
import { ScrollToTop } from '@shared/components/scroll-to-top/scroll-to-top';
import { RouterOutlet } from '@angular/router';
import { Footer } from '@layout/footer/footer';
@Component({
  selector: 'app',
  template: `
  <navbar/>
    <main class="max-w-screen-lg mx-auto px-4 md:px-10 my-24 overflow-x-hidden min-h-screen">
      <router-outlet/>
      <scroll-to-top/>
    </main>
  <foot-note/>
  `,
  imports: [Footer, RouterOutlet, Navbar, ScrollToTop],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class App implements OnInit {
  private elementRef = inject(ElementRef)
  ngOnInit(): void {
    this.elementRef.nativeElement.removeAttribute("ng-version");
    this.elementRef.nativeElement.removeAttribute("ng-server-context");
  }

}
