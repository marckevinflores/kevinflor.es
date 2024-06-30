import { Component, ElementRef, OnInit, Renderer2, ViewEncapsulation, effect, inject } from '@angular/core';
import { Navbar } from '@layout/navbar/navbar';
import { ScrollToTop } from '@shared/components/scroll-to-top/scroll-to-top';
import { RouterOutlet } from '@angular/router';
import { Footer } from '@layout/footer/footer';
import { ThemeService } from '@core/services/theme.service';
import { DOCUMENT, NgClass } from '@angular/common';
import { environment } from '@env/environment';
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
  elementRef = inject(ElementRef)
  theme = inject(ThemeService)
  renderer = inject(Renderer2)
  document: Document = inject(DOCUMENT);

  constructor(){
    effect(() => {
      this.elementRef.nativeElement.style.setProperty(`--primary-color`, this.theme.getColor())
    })
  }
  ngOnInit(): void {
    this.elementRef.nativeElement.removeAttribute("ng-version");
    this.elementRef.nativeElement.removeAttribute("ng-server-context");

    if(environment.production){
      const script = this.renderer.createElement('script');
      script.defer = true;
      script.src = 'https://cloud.umami.is/script.js';
      script.setAttribute('data-website-id', environment.umamiWebsiteId);
      this.renderer.appendChild(this.document.head, script);
    }
  }

}
