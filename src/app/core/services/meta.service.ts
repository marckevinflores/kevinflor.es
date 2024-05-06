import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import profileData from '@data/profile.data';
import { environment } from '@env/environment';

type MetaImageStyle = 'summary_large_image' | 'summary';

@Injectable({
  providedIn: 'root'
})

export class MetaService {
  public defaultImage: string = './assets/image/meta-image.jpg'
  public urlKeywords: string[] = ['blog/', 'project/'];
  private meta = inject(Meta);
  private router = inject(Router);
  private title = inject(Title);

  get contentType(): string{
   return this.urlKeywords.some(str => this.router.url.includes(str)) ? 'article' : 'website'
  }
  get rootUrl(): string{
    return `${environment.url}${this.router.url}`
  }

  setMetaTags(title: string, description: string, keywords?: string | Array<string> | null, image?: string | null , metaImageStyle?: MetaImageStyle): void{
    this.title.setTitle(title);
    this.meta.addTags([
      {name: 'title', content: title},
      {name: 'description', content: description},
      {name: 'keywords', content: Array.isArray(keywords) ? keywords.join(', ') : keywords as string},
      {name: 'authors', content: profileData.name},
      {name: 'og:title', content: title},
      {name: 'og:description', content: description},
      {name: 'og:url', content: this.rootUrl},
      {name: 'og:image', content: image || this.defaultImage},
      {name: 'og:locale', content: 'en_US'},
      {name: 'og:type', content: this.contentType},
      {name: 'og:site_name', content: title},
      {name: 'twitter:card', content: metaImageStyle || 'summary_large_image'},
      {name: 'twitter:url', content: this.rootUrl},
      {name: 'twitter:title', content: title},
      {name: 'twitter:description', content: description},
      {name: 'twitter:image', content: image || this.defaultImage},
      {name: 'twitter:site', content: '@marckevinflores'},
      {name: 'twitter:creator', content: '@marckevinflores'},
    ])
  }
}
