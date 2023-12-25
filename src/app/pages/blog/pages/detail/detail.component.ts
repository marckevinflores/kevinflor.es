import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  slug: string | null = '';
  post$: Observable<any> | undefined;
  error: any | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient){}
  ngOnInit() {
    const url = "http://localhost:1337/api/blogs?filters[slug][$eq]=";
    // Retrieve the slug from the route parameters
    this.slug = this.route.snapshot.paramMap.get('slug');

    this.post$ = this.http.get<Response>(`${url}${this.slug}`).pipe(
      catchError((error: any) => {
        console.log(error)
        return this.handleError(error)
      }),
      map((response: any) => {
        return response.data.map((x: any) => x.attributes)[0]
      })
    )

  }
  private handleError(error: HttpErrorResponse): Observable<never> {
    this.error = error;
    return of();
  }
}
