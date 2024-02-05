
import {
  Directive,
  ElementRef,
  Renderer2,
  inject,
  input,
} from '@angular/core';
import { PlatformCheckService } from '../services/platform-check.service';
type ImageSrc = string | null | undefined;

@Directive({
  selector: 'img[skeleton]',
  standalone: true
})

export class ImageSkeletonDirective {
  src = input.required<ImageSrc>();
  platformCheck = inject(PlatformCheckService);
  imageRef = inject(ElementRef);
  renderer = inject(Renderer2);

  private defaultLocalImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';

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
      this.setImage(this.resolveImage(this.src()));
      this.renderer.removeClass(this.imageRef.nativeElement, 'animate-skeleton-loading');
    };

    img.onerror = () => {
      this.setImage(this.defaultLocalImage);
      this.renderer.removeClass(this.imageRef.nativeElement, 'animate-skeleton-loading');
    };
    img.src = this.resolveImage(this.src());
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
