import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpotlightService {
  private containerSize = { w: 0, h: 0 };
  private mouse = { x: 0, y: 0 };

  initContainer(container: HTMLElement): void {
    this.containerSize.w = container.offsetWidth;
    this.containerSize.h = container.offsetHeight;
  }

  onMouseMove(event: MouseEvent, container: HTMLElement, cards: HTMLElement[]): void {
    const { clientX, clientY } = event;
    const rect = container.getBoundingClientRect();
    const { w, h } = this.containerSize;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const inside = x < w && x > 0 && y < h && y > 0;

    if (inside) {
      this.mouse.x = x;
      this.mouse.y = y;
      cards.forEach((card) => {
        const cardX = -(card.getBoundingClientRect().left - rect.left) + this.mouse.x;
        const cardY = -(card.getBoundingClientRect().top - rect.top) + this.mouse.y;
        card.style.setProperty('--mouse-x', `${cardX}px`);
        card.style.setProperty('--mouse-y', `${cardY}px`);
      });
    }
  }
}
