import { Injectable, Signal, computed, signal } from '@angular/core';
import { tap } from 'rxjs';
import { ProjectSchema } from '@data/schema/project.schema';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment.development';

export interface ProjectState {
  projects: ProjectSchema[];
  id: undefined | number;
  isLoading: boolean
}
@Injectable()
export class ProjectService {
  private jsonUrl = `${environment.url}/assets/json/projects.json`;

  public state = signal<ProjectState>({ projects: [], id: undefined, isLoading: true});
  public projects: Signal<ProjectSchema[]> = computed(() => this.state().projects);
  public isLoading: Signal<boolean> = computed(() => this.state().isLoading);

  constructor(private http: HttpClient) {
    this.getAll();
  }

  getAll(): void {
    this.http.get<ProjectSchema[]>(this.jsonUrl).pipe(tap((projects: ProjectSchema[]) => {
        this.state.update((state: ProjectState) => ({ ...state, projects, isLoading: false }));
    })).subscribe();
  }

}
