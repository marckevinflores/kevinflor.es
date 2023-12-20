import { Injectable } from '@angular/core';
import data from '../json/projects.json';
import { Observable, of } from 'rxjs';
import { Project } from '../schema/project.interface';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
  getData(): Observable<Project[]> {
    return of(data)
  }
}
