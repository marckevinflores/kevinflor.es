import { Component, ElementRef, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Navbar } from '@layout/navbar/navbar';
import { ScrollToTop } from '@shared/components/scroll-to-top/scroll-to-top';
import { RouterOutlet } from '@angular/router';
import { Footer } from '@layout/footer/footer';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app',
  template: `
  <navbar></navbar>
    <main class="max-w-screen-lg mx-auto px-4 md:px-10 my-24 overflow-x-hidden min-h-screen">
      <router-outlet></router-outlet>
      <scroll-to-top></scroll-to-top>
    </main>
  <footer endnote></footer>
  `,
  imports: [Footer, RouterOutlet, Navbar, ScrollToTop],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class App implements OnInit {
  constructor(private elementRef: ElementRef, @Inject(DOCUMENT) private document: Document) {}
  ngOnInit(): void {
    this.elementRef.nativeElement.removeAttribute("ng-version");
    this.elementRef.nativeElement.removeAttribute("ng-server-context");
  }

}