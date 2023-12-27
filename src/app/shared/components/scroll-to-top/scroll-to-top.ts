import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, Renderer2, ViewEncapsulation } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'scroll-to-top',
  template: `
  <div class="scroll-to-top fixed bottom-4 right-4 opacity-0 transition-all delay-200 ease-in-out z-50"
  [ngClass]="{'show-scrollTop opacity-100 transition-all delay-200 ease-in-out': windowScrolled}">
    <button aria-label="Scroll To Top Button" type="button" class="bg-primary p-3 rounded-full" (click)="scrollToTop()">
      <svg class="w-5" viewBox="0 0 512 512">
        <path class="fill-white"
          d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
      </svg>
    </button>
  </div>
  `,
  styles: [``],
  imports: [NgClass],
  encapsulation: ViewEncapsulation.None,
  standalone: true
})
export class ScrollToTop {
  windowScrolled = false;

  constructor(private el: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = this.el.nativeElement.scrollTop || this.document.documentElement.scrollTop || this.document.body.scrollTop;
    this.windowScrolled = scrollOffset > 100;
  }

  scrollToTop() {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }
}
