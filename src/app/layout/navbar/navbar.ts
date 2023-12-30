import {
  ChangeDetectionStrategy,
  Component,
  Renderer2,
  ViewEncapsulation,
  Inject,
  effect,
  computed,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DarkModeService } from 'src/app/core/services/dark-mode.service';
import { sun, moon } from './toggle-icon';
import { DomSanitizer, Meta, SafeHtml } from '@angular/platform-browser';
import { PlatformCheckService } from 'src/app/core/services/platform-check.service';
import { Logo } from 'src/app/shared/components/logo/logo';
import { DOCUMENT, NgClass } from '@angular/common';
import navlinkData from 'src/app/data/nav-link.data'
@Component({
  selector: 'navbar',
  templateUrl: './navbar.html',
  imports: [RouterModule, Logo, NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class Navbar {
  public open = false;
  public links = computed(() => navlinkData)
  icon!: SafeHtml;
  constructor(
    private darkModeService: DarkModeService,
    private renderer: Renderer2,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: Document,
    private meta: Meta,
    private platformCheck: PlatformCheckService
  ) {
    effect(() => {
      this.applyDarkModeStyles();
    });
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  private applyDarkModeStyles() {
    const darkMode = this.darkModeService.isDark();
    const root = this.document.documentElement;
    const favicon = this.document.querySelector("link[rel*='icon']");
    const newFaviconHref = `assets/icons/favicon-${
      darkMode ? 'dark' : 'light'
    }.png`;
    this.renderer.setAttribute(favicon, 'href', newFaviconHref);
    root.classList[darkMode ? 'add' : 'remove']('dark');
    this.meta.updateTag(
      { content: darkMode ? '#111827' : '#fff' },
      'name=theme-color'
    );
    this.icon = this.sanitizer.bypassSecurityTrustHtml(darkMode ? sun : moon);
  }
  onActivate() {
    this.open = false;
    if (this.platformCheck.onBrowser) {
      window.scrollTo(0, 0);
    }
  }
}
