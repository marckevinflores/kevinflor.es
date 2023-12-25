import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import projects from '../../../../data/json/projects.json';
import languageTools from '../../../../data/json/language-tools.json';
@Component({
  selector: 'project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute){}
  data: any
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (slug) {
        this.data = projects.find((item) => item.slug === slug)
      }
    });
  }
  getColor(name: string): string{
    return languageTools.lists.find(l => l.name == name)?.color || '#000'
  }
}
