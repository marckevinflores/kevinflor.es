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
import { DarkModeService } from '@core/services/dark-mode.service';
import { Logo } from '@shared/components/logo/logo';
import { DOCUMENT, NgClass } from '@angular/common';
import navlinkData from '@data/nav-link.data'
import { PlatformCheckService } from '@core/services/platform-check.service';
import { Icon } from '@shared/components/icon/icon';
import { moon, sun } from '@icon/regular.icon';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.html',
  imports: [RouterModule, Logo, NgClass, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class Navbar {
  public open: boolean = false;
  public links = computed(() => navlinkData)
  public icon = computed(() => this.darkModeService.isDark() ? sun : moon)
  constructor(
    private darkModeService: DarkModeService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
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
  }
}
