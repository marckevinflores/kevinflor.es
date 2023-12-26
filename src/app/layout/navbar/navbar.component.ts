import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Renderer2, OnDestroy, ViewEncapsulation, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {sun, moon} from './toggle-icon'
import { DomSanitizer, Meta, SafeHtml } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit, OnDestroy {
  public open = false;
  links = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Project',
      path: '/project'
    }
  ];
  public href: string = '/';
  darkMode: boolean = false;
  private ngUnsubscribe = new Subject();

  constructor(
    private router: Router,
    private darkModeService: DarkModeService,
    private cd: ChangeDetectorRef,
    private renderer: Renderer2,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: Document,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.href = this.router.url;
    this.applyDarkModeStyles();
    this.darkModeService.getDarkModeState()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        this.applyDarkModeStyles();
      });
  }

  ngOnDestroy(): void {
    if(this.ngUnsubscribe){
      this.ngUnsubscribe.unsubscribe()
    }
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
    this.cd.markForCheck();
  }

  private applyDarkModeStyles() {
    this.darkModeService.getDarkModeState()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((isDarkMode) => {
        const root = this.document.documentElement;
        const favicon = this.document.querySelector("link[rel*='icon']");

        this.darkMode = isDarkMode;
        const newFaviconHref = `assets/icons/favicon-${isDarkMode ? 'dark' : 'light'}.png`;
        this.renderer.setAttribute(favicon, 'href', newFaviconHref);
        root.classList[isDarkMode ? 'add' : 'remove']('dark');
        this.meta.updateTag({ content: isDarkMode? '#111827' : '#fff' }, 'name=theme-color');
      });
  }
  get svgIcon(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.darkMode ? sun : moon);
  }
}
