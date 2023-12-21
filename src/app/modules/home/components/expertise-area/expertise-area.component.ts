import { Component, ViewEncapsulation } from '@angular/core';
import { mobile, monitor, site} from './expertise-area.icon'
@Component({
  selector: 'expertise-area',
  templateUrl: './expertise-area.component.html',
  styleUrls: ['./expertise-area.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExpertiseAreaComponent {

  services = [
    {
      icon: site,
      name: '90%',
      description: 'Web Development'
    },
    {
      icon: mobile,
      name: '60%',
      description: 'Mobile Development'
    },
    {
      icon: monitor,
      name: '30%',
      description: 'UX/UI Design'
    },

  ]

}
