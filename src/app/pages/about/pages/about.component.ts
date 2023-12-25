import { Component, ViewEncapsulation } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent {
  constructor(private metaService: MetaService){
    this.metaService.setMetaTags(
      'About - Marc Kevin Flores',
      'Dive into a curated space to learn more about the person behind the name',
      ['bio', 'biography', 'information', 'about', 'contact', 'detail']
      )
  }
  public aboutDetails =  [
    {
      title: 'What I Do',
      desc: `I've worked on a variety of projects, ranging from
      mobile apps and web development to optimizing performance, writing clean code, and emphasizing good design
      principles. I take pride in my attention to detail and commitment to creating efficient, well-designed solutions
      that meet both user needs and industry standards. I'm your go-to person for JavaScript frameworks and ensuring
      the overall quality of software development projects.`
    },
    {
      title: 'Always Learning',
      desc: `I'm always eager to learn new things. Whether
      it's staying updated on the latest technologies or exploring different coding techniques, I enjoy expanding my
      knowledge to grow as a developer.`
    },
    {
      title: 'Off-Duty Fun',
      desc: `During my off-duty hours, I find joy in coding, exploring new aspects of coding, and staying updated by reading
      the latest blogs on technology. I also enjoy playing games on my phone, watching videos, listening to popular
      songs, and taking refreshing walks outside. It's important for me to spend quality time with my family and
      friends.`
    },
    {
      title: 'Why I Code',
      desc: `I code because it allows me to turn ideas into
      reality. It's a creative outlet that lets me build useful and innovative solutions. Coding challenges me to
      solve problems and continuously improve my skills. Ultimately, it's my way of making a positive impact through
      technology.`
    },
  ];
  public contactInfo = [
    {
      title: 'Address',
      desc: `BLK 2 LOT 10 Cameron St. Princetown Subd. Bagumbong Caloocan City, Barangay 171, Metro Manila, Philippines`,
      link: 'https://maps.app.goo.gl/dT2aE2RxeQTEA7ne7'
    },
    {
      title: 'Mobile Number',
      desc: '+639092884082',
      link: 'tel:+639092884082'
    },
    {
      title: 'Email',
      desc: 'marc@kevinflor.es',
      link: 'mailto:marc@kevinflor.es'
    },
  ]
}
