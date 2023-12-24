import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit{
  token:string = ''
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const authorizationCode = params['code'];
      if (authorizationCode) {
        // Handle the authorization code, initiate token exchange, etc.
        console.log('Authorization Code:', authorizationCode);
        this.token = authorizationCode
      } else {
        console.error('Authorization code not found.');
      }
    });
  }

}
