import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  error: any | undefined;
  posts$: Observable<any[]> | undefined;

  constructor(private http: HttpClient, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.removeAttribute("ng-version");
    const url = "http://localhost:1337/api/blogs";
    const opts = { params: { populate: "*" } };

    this.posts$ = this.http.get<Response>(url, opts).pipe(
      catchError((error: any) => {
        console.log(error)
        return this.handleError(error)
      }),
      map((response: any) => {
        return response.data.map((x: any) => x.attributes)
      })
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    this.error = error;
    return of();
  }
  hexToRgb(hex: string): string {
    hex = hex.replace(/^#/, '');
    const bigint = parseInt(hex, 16);
    const red = (bigint >> 16) & 255;
    const green = (bigint >> 8) & 255;
    const blue = bigint & 255;
    return `${red} ${green} ${blue}`;
  }
}
