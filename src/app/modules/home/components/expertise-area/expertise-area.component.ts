import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'expertise-area',
  templateUrl: './expertise-area.component.html',
  styleUrls: ['./expertise-area.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExpertiseAreaComponent {

  services = [
    {
      icon: 'site',
      name: '90%',
      description: 'Web Development'
    },
    {
      icon: 'mobile-notch',
      name: '60%',
      description: 'Mobile Development'
    },
    {
      icon: 'display-code',
      name: '30%',
      description: 'UX/UI Design'
    },

  ]

}
