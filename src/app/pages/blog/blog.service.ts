import { Injectable, Signal, computed, signal } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BlogSchema } from '@pages/blog/blog-detail/blog-detail.interface'
import { StrapiData, StrapiResponse } from '@data/schema/stapi-response.schema'

interface Blog {
  blogs: BlogSchema[];
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private jsonUrl = `http://localhost:4200/assets/json/blogs.json`;
  public state = signal<Blog>({ blogs: []});
  public blogs: Signal<BlogSchema[]> = computed(() => this.state().blogs);

  constructor(private http: HttpClient) {
    this.getAll();
  }
  get(slug: string | null): Observable<BlogSchema>{
    return this.http.get<StrapiResponse>(this.jsonUrl).pipe(map(res => {
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
        image: picture.data.attributes.formats.large.url,
        smallImage: picture.data.attributes.formats.small.url,
        keywords: seo && seo.keywords
      }
    }))
  }
  getAll(): void {
    this.http.get<StrapiResponse>(this.jsonUrl).pipe(map(res => {
      const blogs = res.data.map((item: any) => {
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
