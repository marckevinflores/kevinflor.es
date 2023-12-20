import { Component, Input } from '@angular/core';

@Component({
  selector: 'devicon',
  templateUrl: './devicon.component.html',
  styleUrls: ['./devicon.component.scss']
})
export class DeviconComponent {
  @Input() public name!: string;
  @Input() public color!: string;
  @Input() public bordered: boolean = true;
  @Input() public showName: boolean = true;

  public iconPath(){
    return `assets/devicon/${name}.svg`
  }
}
