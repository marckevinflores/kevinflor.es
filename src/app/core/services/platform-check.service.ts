import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatformCheckService {
  private platformId: Object = inject(PLATFORM_ID)

  get onBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  get onServer(): boolean {
    return isPlatformServer(this.platformId);
  }
}
