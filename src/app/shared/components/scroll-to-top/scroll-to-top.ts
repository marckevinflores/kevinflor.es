import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, Renderer2, ViewEncapsulation } from '@angular/core';
import { NgClass } from '@angular/common';
import { Icon } from '../icon/icon';
import { chevronUp } from '@icon/regular.icon';
@Component({
  selector: 'scroll-to-top',
  template: `
  <div class="scroll-to-top fixed bottom-4 right-4 opacity-0 transition-all delay-200 ease-in-out z-50"
  [ngClass]="{'show-scrollTop opacity-100 transition-all delay-200 ease-in-out': windowScrolled}">
    <button aria-label="Scroll To Top Button" type="button" class="bg-primary p-3 rounded-full" (click)="scrollToTop()">
      <icon
        [path]="chevronUpIcon"
        [size]="25"
        viewBox="0 0 512 512"
        iconClass="fill-white"
      ></icon>
    </button>
  </div>
  `,
  styles: [``],
  imports: [NgClass, Icon],
  encapsulation: ViewEncapsulation.None,
  standalone: true
})
export class ScrollToTop {
  windowScrolled = false;
  public chevronUpIcon = chevronUp
  constructor(private el: ElementRef, @Inject(DOCUMENT) private document: Document) {}

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
