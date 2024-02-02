
import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { PlatformCheckService } from '../services/platform-check.service';
type ImageSrc = string | null | undefined;

@Directive({
  selector: 'img[skeleton]',
  standalone: true
})

export class ImageSkeletonDirective {
  @Input({ required: true }) src: ImageSrc = null;
  private defaultLocalImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';
  constructor(
    private platformCheck: PlatformCheckService,
    private imageRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnChanges(): void {
    this.initImage();
  }

  private initImage() {
    if (this.platformCheck.onServer) {
      return;
    }
    this.renderer.addClass(this.imageRef.nativeElement, 'animate-skeleton-loading');
    const img = new Image();
    if (!this.src) {
      return;
    }
    img.onload = () => {
      this.setImage(this.resolveImage(this.src));
      this.renderer.removeClass(this.imageRef.nativeElement, 'animate-skeleton-loading');
    };

    img.onerror = () => {
      this.setImage(this.defaultLocalImage);
      this.renderer.removeClass(this.imageRef.nativeElement, 'animate-skeleton-loading');
    };
    img.src = this.resolveImage(this.src);
  }

  private setImage(src: ImageSrc) {
    this.imageRef.nativeElement.setAttribute('src', src);
  }

  private resolveImage(src: ImageSrc): string {
    if (!src) {
      return this.defaultLocalImage;
    }
    return src;
  }

}
