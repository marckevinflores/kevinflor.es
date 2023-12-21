import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Renderer2, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {sun, moon} from './toggle-icon'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
    private sanitizer: DomSanitizer
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
        const root = document.documentElement;
        const favicon = document.querySelector("link[rel*='icon']");

        this.darkMode = isDarkMode;
        const newFaviconHref = `assets/icons/favicon-${isDarkMode ? 'dark' : 'light'}.png`;
        this.renderer.setAttribute(favicon, 'href', newFaviconHref);
        root.classList[isDarkMode ? 'add' : 'remove']('dark');
      });
  }
  get svgIcon(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.darkMode ? sun : moon);
  }
}
