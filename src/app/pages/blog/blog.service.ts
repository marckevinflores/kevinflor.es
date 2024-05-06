import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BlogSchema } from '@pages/blog/blog-detail/blog-detail.interface'
import { StrapiData, StrapiBlogResponse } from '@data/schema/stapi-blog-response.schema'
import { environment } from '@env/environment';

interface Blog {
  blogs: BlogSchema[];
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private jsonUrl = `${environment.url}/assets/json/blogs.json`;
  // private jsonUrl = `http://localhost:4200/assets/json/blogs.json`;
  public state = signal<Blog>({ blogs: []});
  public blogs: Signal<BlogSchema[]> = computed(() => this.state().blogs);
  private http = inject(HttpClient)
  constructor() {
    this.getAll();
  }
  get(slug: string | null | undefined): Observable<BlogSchema>{
    return this.http.get<StrapiBlogResponse>(this.jsonUrl).pipe(map(res => {
      const blogDetail = res.data.find((x: StrapiData) => x.attributes.slug === slug);
      if (!blogDetail) {
        throw new Error('Blog Detail not found');
      }
      const { id, attributes: { content, title, summary, seo, picture } } = blogDetail
      return {
        id,
        content,
        title,
        summary,
        image: picture.data.attributes.url,
        smallImage: picture.data.attributes.formats.small.url,
        keywords: seo && seo.keywords
      }
    }))
  }
  getAll(): void {
    this.http.get<StrapiBlogResponse>(this.jsonUrl).pipe(map(res => {
      const blogs = res.data?.map((item: any) => {
      const { small } = item.attributes.picture.data.attributes.formats;
      return {
        id: item.id,
        title: item.attributes.title,
        smallImage: small.url,
        summary: item.attributes.summary,
        slug: item.attributes.slug
      }
    })
      return blogs as BlogSchema[]
    }), tap((blogs: BlogSchema[]) => {
        this.state.update((state: any) => ({ ...state, blogs }));
    })).subscribe();
  }
}
