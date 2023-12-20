import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'btn',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() link: string = '';
  @Input() ariaLabel: string = '';
  constructor(private router: Router) {}
  redirect() {
    if(this.link){
      if (this.link?.startsWith('/') && this.link?.length === 1) {
        this.router.navigateByUrl(this.link);
      } else {
        window.open(this.link, '_blank');
      }
    }
  }
}
