import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import profileData from '@data/profile.data';
import { environment } from '@env/environment.development';

type MetaImageStyle = 'summary_large_image' | 'summary';

@Injectable({
  providedIn: 'root'
})

export class MetaService {

  constructor(private meta: Meta) { }

  setMetaTags(title: string, description: string, keywords?: string | Array<string> | null, exactUrl?: string, image?: string | null , metaImageStyle?: MetaImageStyle): any{
    this.meta.addTags([
      {name: 'title', content: title},
      {name: 'description', content: description},
      {name: 'keywords', content: Array.isArray(keywords) ? keywords.join(', ') : keywords as string},
      {name: 'authors', content: profileData.name, url: exactUrl || environment.url},

      {name: 'og:title', content: title},
      {name: 'og:description', content: description},
      {name: 'og:url', content: exactUrl || environment.url},
      {name: 'og:image', content: './assets/image/meta-image.jpg'},
      {name: 'og:locale', content: 'en_US'},
      {name: 'og:type', content: 'website'},
      {name: 'og:site_name', content: title},

      {name: 'twitter:card', content: metaImageStyle || 'summary_large_image'},
      {name: 'twitter:url', content: exactUrl || environment.url},
      {name: 'twitter:title', content: title},
      {name: 'twitter:description', content: description},
      {name: 'twitter:image', content: image || ''},
      {name: 'twitter:site', content: '@marckevinflores'},
      {name: 'twitter:creator', content: '@marckevinflores'},
    ])
  }
}
