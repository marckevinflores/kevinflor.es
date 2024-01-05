import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostListener,
  Inject,
  Injector,
  Input,
  ViewContainerRef
} from '@angular/core';
import {Tooltip as TooltipComponent} from "./tooltip";
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[tooltip]',
  standalone: true
})
export class TooltipDirective {

  @Input() tooltip = '';
  @Input() showDelay = 0;
  @Input() hideDelay = 0;

  private componentRef: ComponentRef<any> | null = null;
  private showTimeout?: number;
  private touchTimeout?: number;

  constructor(private elementRef: ElementRef, private appRef: ApplicationRef, @Inject(DOCUMENT) private document: Document,
              private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector) {
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.initializeTooltip();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.setHideTooltipTimeout();
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart($event: TouchEvent): void {
    $event.preventDefault();
    window.clearTimeout(this.touchTimeout);
    this.touchTimeout = window.setTimeout(this.initializeTooltip.bind(this), 500);
  }

  @HostListener('touchend')
  onTouchEnd(): void {
    window.clearTimeout(this.touchTimeout);
    this.setHideTooltipTimeout();
  }

  private initializeTooltip() {
    if (this.componentRef === null) {
      window.clearInterval(this.hideDelay);
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);
      this.componentRef = componentFactory.create(this.injector);

      this.appRef.attachView(this.componentRef.hostView);
      const [tooltipDOMElement] = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes;

      this.setTooltipComponentProperties();

      this.document.body.appendChild(tooltipDOMElement);
      this.showTimeout = window.setTimeout(this.showTooltip.bind(this), this.showDelay);
    }
  }

  private setTooltipComponentProperties() {
    if (this.componentRef !== null) {
      this.componentRef.instance.tooltip = this.tooltip;

      const {left, right, top} = this.elementRef.nativeElement.getBoundingClientRect();
      this.componentRef.instance.left = Math.round((right - left) / 2 + left);
      this.componentRef.instance.top = Math.round(top);

    }
  }

  private showTooltip() {
    if (this.componentRef !== null) {
      this.componentRef.instance.visible = true;
    }
  }

  private setHideTooltipTimeout() {
    window.setTimeout(this.destroy.bind(this), this.hideDelay);
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  destroy(): void {
    if (this.componentRef !== null) {
      window.clearInterval(this.showTimeout);
      window.clearInterval(this.hideDelay);
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}
