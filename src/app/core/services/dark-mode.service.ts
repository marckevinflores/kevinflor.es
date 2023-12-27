import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private darkModeState = new BehaviorSubject<boolean>(this.getInitialDarkModeState());
  constructor() { }
  getDarkModeState() {
    return this.darkModeState.asObservable();
  }

  toggleDarkMode() {
    const isDarkMode = !this.darkModeState.value;
    this.darkModeState.next(isDarkMode);
    this.saveDarkModeState(isDarkMode);
  }

  private getInitialDarkModeState(): boolean {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        return true;
      }
    }
    return false;
  }

  private saveDarkModeState(isDarkMode: boolean) {
    (localStorage as any).theme = isDarkMode ? 'dark' : 'light';
  }
}
