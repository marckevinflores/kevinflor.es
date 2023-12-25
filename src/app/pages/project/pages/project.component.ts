import { Component, ViewEncapsulation } from '@angular/core';
import { Observable} from 'rxjs';
import { ProjectService } from 'src/app/data/service/project.service';
import { Project } from 'src/app/data/schema/project.interface';
import languageTool from '../../../data/json/language-tools.json';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent {
  error: any | undefined;
  posts$: Observable<Project[]> | undefined

  constructor(private projectService: ProjectService, private metaService: MetaService) {
    this.metaService.setMetaTags(
      'Projects - Marc Kevin Flores',
      'Projects made by Marc Kevin Flores. Get to know all the sources.',
      [
        'tech',
        'software',
        'development',
        'project',
        'portfolio',
        'app',
        'programming',
        'open-source',
        'web',
        'android',
        'ios'
      ]
      )
  }

  ngOnInit(): void {
    this.posts$ = this.projectService.getData();
  }
  getColorByName(name: string): string{
    const item = languageTool.lists.find(item => item.name == name)
    return item ? item.color : '';
  }

  getPlatformClasses(platformName: string): { [key: string]: boolean } {
    const colors: { [key: string]: string }  = {
      'Web': 'sky',
      'Android': 'green',
      'IOS': 'slate',
    };

    return {
      [`dark:text-${colors[platformName]}-200`]: true,
      [`dark:bg-${colors[platformName]}-700`]: true,
      [`dark:hover:bg-${colors[platformName]}-200`]: true,
      [`dark:hover:text-${colors[platformName]}-500`]: true,
      [`hover:bg-${colors[platformName]}-700`]: true,
      [`hover:text-${colors[platformName]}-200`]: true,
      [`bg-${colors[platformName]}-200`]: true,
      [`text-${colors[platformName]}-500`]: true,
    };
  }
}
