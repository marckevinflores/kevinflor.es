import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import { map, tap } from 'rxjs';
import { ProjectSchema } from '@data/schema/project.schema';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { StrapiProjectResponse, Data } from '@data/schema/strapi-project-response.schema'
export interface ProjectState {
  projects: ProjectSchema[];
}
@Injectable({providedIn: 'root'})
export class ProjectService {
  private http = inject(HttpClient)
  private jsonUrl = `${environment.url}/assets/json/projects.json`;
  // private jsonUrl = `http://localhost:4200/assets/json/projects.json`;

  public state = signal<ProjectState>({ projects: []});
  public projects: Signal<ProjectSchema[]> = computed(() => this.state().projects);
  public featuredProjects: Signal<ProjectSchema[]> = computed(() => this.state().projects?.filter(p => p.featured)
        .map((p, index) => {return {...p, toRight: (index + 1) % 2 == 0}}))

  public otherProjects: Signal<ProjectSchema[]> = computed(() => this.state().projects?.filter((p: any) => !p.featured))

  constructor() {
    this.getAll();
  }
  getAll(){
    this.http.get<StrapiProjectResponse>(this.jsonUrl).pipe(map(res => {
      const projects = res.data?.map((item: Data) => {
      const { thumbnail } = item.attributes.picture.data.attributes.formats;
      const { website, playstore, appstore, github } = item.attributes.links
      const images = item.attributes.images;
      return {
        id: item.id,
        title: item.attributes.title,
        description: item.attributes.description,
        thumbnail: thumbnail.url,
        links: {
          website,
          playstore,
          appstore,
          github
        },
        featured: item.attributes.featured,
        tools: item.attributes.tools.data?.map((t: any) => t.attributes.name),
        image: images.data && images.data[0].attributes.formats.large.url
      }
    })
    return projects as ProjectSchema[];
    }), tap(projects => {
        this.state.update(state => ({ ...state, projects}));
    })).subscribe();
  }

}
