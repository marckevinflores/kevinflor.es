import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './pages/blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    BlogComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
