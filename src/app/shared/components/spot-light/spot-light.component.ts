import { Component, Input } from '@angular/core';
import { SpotlightDirective } from '@pages/home/components/expertise-area/directive/spotlight.directive'
@Component({
  selector: 'app-spot-light',
  standalone: true,
  imports: [SpotlightDirective],
  templateUrl: './spot-light.component.html',
  styleUrl: './spot-light.component.scss'
})
export class SpotLightComponent {
  @Input() data!: any[];
}
