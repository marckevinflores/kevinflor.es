import { NgModule } from '@angular/core';
import { SafePipe } from '@core/pipe/safe.pipe';
import { MarkdownPipe } from '@core/pipe/markdown.pipe';

@NgModule({
  declarations: [SafePipe, MarkdownPipe],
  exports: [SafePipe, MarkdownPipe]
})
export class CoreModule { }
