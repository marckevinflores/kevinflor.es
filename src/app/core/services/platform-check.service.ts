import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatformCheckService {

  private isBrowser: boolean;
  private isServer: boolean;
  private platformId: Object = inject(PLATFORM_ID)
  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.isServer = isPlatformServer(this.platformId);
  }

  get onBrowser(): boolean {
    return this.isBrowser;
  }

  get onServer(): boolean {
    return this.isServer;
  }
}
