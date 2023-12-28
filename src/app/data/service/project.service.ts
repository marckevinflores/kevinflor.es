import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { Project } from '../schema/project.interface';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ProjectService {
  private jsonUrl = 'assets/json/projects.json';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(this.jsonUrl);
  }
  getProjectById(slug: string): Observable<any> {
    return this.getAll().pipe(
      map((projects) => projects.find((project) => project.slug === slug))
    );
  }
}
