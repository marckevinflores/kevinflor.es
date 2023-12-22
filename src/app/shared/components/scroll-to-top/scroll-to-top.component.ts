import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScrollToTopComponent {
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
