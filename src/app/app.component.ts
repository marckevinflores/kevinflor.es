import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.elementRef.nativeElement.removeAttribute("ng-version");
  }

}
