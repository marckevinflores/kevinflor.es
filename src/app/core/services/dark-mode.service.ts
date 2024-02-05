import { Injectable, Signal, computed, signal } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  public state = signal<boolean>(this.getInitialDarkModeState());
  public isDark: Signal<boolean> = computed(() => this.state());

  toggleDarkMode() {
    this.state.set(!this.state())
    this.saveDarkModeState();
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

  private saveDarkModeState() {
    (localStorage as any).theme = this.state() ? 'dark' : 'light';
  }
}
