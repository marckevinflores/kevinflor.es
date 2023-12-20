import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostListener,
  Injector,
  Input,
  ViewContainerRef
} from '@angular/core';
import {TooltipComponent} from "./tooltip.component";
import {TooltipPosition, TooltipTheme} from "./tooltip.enums";

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {

  @Input() tooltip = '';
  @Input() position: TooltipPosition = TooltipPosition.DEFAULT;
  @Input() theme: TooltipTheme = TooltipTheme.DEFAULT;
  @Input() showDelay = 0;
  @Input() hideDelay = 0;

  private componentRef: ComponentRef<any> | null = null;
  private showTimeout?: number;
  private hideTimeout?: number;
  private touchTimeout?: number;

  constructor(private elementRef: ElementRef, private appRef: ApplicationRef,
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

  @HostListener('mousemove', ['$event'])
  onMouseMove($event: MouseEvent): void {
    if (this.componentRef !== null && this.position === TooltipPosition.DYNAMIC) {
      this.componentRef.instance.left = $event.clientX;
      this.componentRef.instance.top = $event.clientY;
      this.componentRef.instance.tooltip = this.tooltip;
    }
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

      document.body.appendChild(tooltipDOMElement);
      this.showTimeout = window.setTimeout(this.showTooltip.bind(this), this.showDelay);
    }
  }

  private setTooltipComponentProperties() {
    if (this.componentRef !== null) {
      this.componentRef.instance.tooltip = this.tooltip;
      this.componentRef.instance.position = this.position;
      this.componentRef.instance.theme = this.theme;

      const {left, right, top, bottom} = this.elementRef.nativeElement.getBoundingClientRect();

      switch (this.position) {
        case TooltipPosition.BELOW: {
          this.componentRef.instance.left = Math.round((right - left) / 2 + left);
          this.componentRef.instance.top = Math.round(bottom);
          break;
        }
        case TooltipPosition.ABOVE: {
          this.componentRef.instance.left = Math.round((right - left) / 2 + left);
          this.componentRef.instance.top = Math.round(top);
          break;
        }
        case TooltipPosition.RIGHT: {
          this.componentRef.instance.left = Math.round(right);
          this.componentRef.instance.top = Math.round(top + (bottom - top) / 2);
          break;
        }
        case TooltipPosition.LEFT: {
          this.componentRef.instance.left = Math.round(left);
          this.componentRef.instance.top = Math.round(top + (bottom - top) / 2);
          break;
        }
        default: {
          break;
        }
      }
    }
  }

  private showTooltip() {
    if (this.componentRef !== null) {
      this.componentRef.instance.visible = true;
    }
  }

  private setHideTooltipTimeout() {
    this.hideTimeout = window.setTimeout(this.destroy.bind(this), this.hideDelay);
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
