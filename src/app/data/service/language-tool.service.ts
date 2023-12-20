import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import data from '../json/language-tools.json';
@Injectable({
  providedIn: 'root'
})
export class LanguageToolService {
  constructor(){}
  getData(): any {
    return of(data.lists)
  }
}
