import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { appstore, github, playstore } from '@icon/brand.icon';
import { site2 } from '@icon/regular.icon';
import { Icon } from '@shared/components/icon/icon';
import { ProjectLinks } from '@data/schema/project.schema';
@Component({
  selector: 'project-link',
  standalone: true,
  imports: [KeyValuePipe, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `@for (link of links() | keyvalue; track $index){
    @if(link.value){
      <a [href]="link.value" target="_blank" [attr.aria-label]="link.key" [title]="link.key">
        <div class="rounded-full py-1 pr-1 inline-flex items-center mr-1 transition ease-in-out delay-0 text-primary-500 dark:text-primary-400">
          <span class="text-sm capitalize">
            <icon [path]="getIcon(link.key)" [size]="24"/>
          </span>
        </div>
      </a>
    }
  }`,
})
export class ProjectLink {
  links = input<ProjectLinks>()
  getIcon(name: string): any{
    const icon: ProjectLinks = {
      'website': site2,
      'playstore': playstore,
      'appstore': appstore,
      'github': github
    }
    return icon[name]
  }
}
