import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatformCheckService {

  private isBrowser: boolean;
  private isServer: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
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
