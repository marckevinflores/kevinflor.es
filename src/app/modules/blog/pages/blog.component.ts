import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  error: any | undefined;
  posts$: Observable<any[]> | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
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
}
