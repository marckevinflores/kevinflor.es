import { Component, ElementRef, OnInit, ViewEncapsulation, effect, inject } from '@angular/core';
import { Navbar } from '@layout/navbar/navbar';
import { ScrollToTop } from '@shared/components/scroll-to-top/scroll-to-top';
import { RouterOutlet } from '@angular/router';
import { Footer } from '@layout/footer/footer';
import { ThemeService } from '@core/services/theme.service';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app',
  template: `
  <navbar/>
    <main class="max-w-screen-lg mx-auto px-4 md:px-10 my-28 overflow-x-hidden min-h-screen">
      <router-outlet/>
      <scroll-to-top/>
    </main>
  <foot-note/>
  `,
  imports: [Footer, RouterOutlet, Navbar, ScrollToTop, NgClass],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class App implements OnInit {
  constructor(){
    effect(() => {
      this.elementRef.nativeElement.style.setProperty(`--primary-color`, this.theme.getColor())
    })
  }
  private elementRef = inject(ElementRef)
  public theme = inject(ThemeService)
  ngOnInit(): void {
    this.elementRef.nativeElement.removeAttribute("ng-version");
    this.elementRef.nativeElement.removeAttribute("ng-server-context");
  }

}
