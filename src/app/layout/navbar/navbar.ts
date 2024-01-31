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
  imports: [RouterModule, Logo, NgClass, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  template: `<nav
  class="bg-gray-50/75 dark:bg-gray-900/75 fixed w-full z-[2] top-0 start-0 border-b border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 backdrop-blur-lg rounded transition-all delay-0">
  <div class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
    <logo class="dark:text-white text-black"></logo>
    <div class="flex lg:order-2 lg:space-x-0">
      <button (click)="darkModeService.toggleDarkMode()" type="button" aria-label="DarkMode"
        class="mx-5 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <icon [path]="icon()" [size]="20" iconClass="dark:fill-white fill-black"></icon>
      </button>
      <button (click)="open = !open" type="button" aria-label="MenuToggle"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-900 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <div class="space-y-1.5">
          <div class="w-6 h-0.5 bg-black dark:bg-white transition-all delay-0"
            [ngClass]="{'rotate-45 translate-y-2': open}"></div>
          <div class="w-6 h-0.5 bg-black dark:bg-white transition-all delay-0" [ngClass]="{'opacity-0': open}"></div>
          <div class="w-6 h-0.5 bg-black dark:bg-white transition-all delay-0"
            [ngClass]="{'-rotate-45 -translate-y-2': open}">
          </div>
        </div>
      </button>
    </div>
    <div class="w-full ml-auto lg:w-auto lg:order-1 flex lg:block min-h-96 lg:min-h-0 items-center"
      [ngClass]="{ 'hidden': !open}">
      <ul
        class="text-center w-full flex flex-col p-4 lg:p-0 mt-4 font-medium rounded-lg lg:space-x-8 lg:flex-row lg:mt-0 dark:border-gray-700">
        @for (link of links(); track $index) {
        <li>
          <a [routerLink]="link.path" routerLinkActive="text-primary dark:text-primary-400"
            [routerLinkActiveOptions]="{exact: true}" (click)="open = false"
            class="block py-4 px-3 rounded hover:text-primary dark:hover:text-primary-400 dark:text-gray-100 lg:p-0 dark:border-gray-700">{{link.name}}</a>
        </li>
        }
      </ul>
    </div>
  </div>
</nav>`
})
export class Navbar {
  public open: boolean = false;
  public links = computed(() => navlinkData)
  public icon = computed(() => this.darkModeService.isDark() ? sun : moon)
  constructor(
    public darkModeService: DarkModeService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {
    effect(() => {
      this.applyDarkModeStyles();
    });
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
