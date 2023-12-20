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
      icon: 'display-code',
      name: 'Full-Stack Development',
      description: 'Ensure a consistent and user-friendly experience on desktops, tablets, and mobile devices'
    },
    {
      icon: 'site',
      name: 'Responsive Design',
      description: 'Ensure a consistent and user-friendly experience on desktops, tablets, and mobile devices'
    },
    {
      icon: 'site',
      name: 'Web Performance',
      description: 'Ensure a consistent and user-friendly experience on desktops, tablets, and mobile devices'
    },
    {
      icon: 'mobile-notch',
      name: 'Mobile development',
      description: 'Ensure a consistent and user-friendly experience on desktops, tablets, and mobile devices'
    }
  ]

}
