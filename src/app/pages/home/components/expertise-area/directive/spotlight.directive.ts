import { Directive, ElementRef, HostListener, Renderer2, inject } from '@angular/core';
import { SpotlightService } from '@pages/home/components/expertise-area/service/spotlight.service';

@Directive({
  selector: '[spot-light]',
  standalone: true
})
export class SpotlightDirective {
  el = inject(ElementRef)
  renderer = inject(Renderer2)
  spotlightService = inject(SpotlightService)

  ngAfterViewInit(): void {
    this.initSpotlight();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.spotlightService.initContainer(this.el.nativeElement);
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.spotlightService.onMouseMove(event, this.el.nativeElement, this.getCards());
  }

  private getCards(): HTMLElement[] {
    return Array.from(this.el.nativeElement.children) as HTMLElement[];
  }

  private initSpotlight(): void {
    this.sanitizeCards();
    this.spotlightService.initContainer(this.el.nativeElement);
  }

  private sanitizeCards(): void {
    const cards = this.getCards();
    cards.forEach((card) => {
      this.renderer.setStyle(card, 'position', 'relative');
    });
  }
}
