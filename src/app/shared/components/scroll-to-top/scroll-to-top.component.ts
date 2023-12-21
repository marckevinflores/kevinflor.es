import { Component, ElementRef, HostListener, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScrollToTopComponent {
  windowScrolled = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = this.el.nativeElement.scrollTop || document.documentElement.scrollTop || document.body.scrollTop;
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
