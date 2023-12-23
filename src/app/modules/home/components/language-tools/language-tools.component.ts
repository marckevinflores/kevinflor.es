import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LanguageToolService } from 'src/app/data/service/language-tool.service';
import icons from '../../../../icon/tech-stack.icon'
@Component({
  selector: 'language-tools',
  templateUrl: './language-tools.component.html',
  styleUrls: ['./language-tools.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LanguageToolsComponent implements OnInit {
  constructor(public lts: LanguageToolService){}
  data: any = [];
  icons: any = [];
  ngOnInit(): void {
    this.lts.getData().subscribe((data: any) => {
      this.data = data;
      console.log(data)
    })
    this.icons = icons;
    console.log(icons)
  }
  hoveredIndex: number = -1;
  onMouse(i: number){
    this.hoveredIndex = i;
  }
}
