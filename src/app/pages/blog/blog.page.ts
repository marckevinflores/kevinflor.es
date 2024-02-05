import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { BlogService } from '@pages/blog/blog.service'
import { RouterLink } from '@angular/router';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';
import { ImageSkeletonDirective } from '@core/directives/image-skeleton.directive';
import { Loader } from '@shared/components/loader/loader';
@Component({
  selector: 'blog-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [RouterLink, ImageSkeletonDirective, Loader],
  template: `
  <div class="container px-8 mx-auto xl:px-5">
  <div class="mx-auto max-w-screen-md">
    <h1
      class="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug dark:text-white">
      Blogs
    </h1>
  </div>
</div>
  @defer(on immediate) {
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-lg mx-auto my-10 text-left ">
      @for (post of blogService.blogs(); track post.id) {
      <a class="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg" [routerLink]="['/blog/'+ post.slug+'']">
        <img skeleton class="rounded-lg object-cover hover:scale-105 transition-all w-full h-52" [src]="post.smallImage"
          [alt]="post.title"/>
        <div class="pt-3">
          <h5 class="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{{post.title}}</h5>
          <p class="mb-2 text-sm text-gray-900 dark:text-gray-200">{{post.summary}}</p>
        </div>
      </a>
      }
    </div>
  }@placeholder {
    <loader/>
  }
`
})
export class BlogPage {
  blogService = inject(BlogService);
  metaService = inject(MetaService)
  constructor(){
    this.metaService.setMetaTags(
      `Blogs - ${profileData.name}`,
      `Blog posts by ${profileData.name}. I share some guide, tutorials and information about software development`,
      'tech,software,development,thoughts,blog,content,news,tutorials,guide,post'
      )
  }
}
