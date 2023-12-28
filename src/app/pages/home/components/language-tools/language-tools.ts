import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LanguageToolService } from 'src/app/data/service/language-tool.service';
import icons from '../../../../icon/tech-stack.icon'
import { Devicon } from 'src/app/shared/components/devicon/devicon';
import { PlatformCheckService } from 'src/app/core/services/platform-check.service';
@Component({
  selector: 'language-tools',
  templateUrl: './language-tools.html',
  imports: [Devicon],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class LanguageTools implements OnInit {
  constructor(public lts: LanguageToolService, private platformCheck: PlatformCheckService){}
  data: any = [];
  icons: any = [];
  ngOnInit(): void {
    if(this.platformCheck.onBrowser){
      this.lts.getData().subscribe((data: any) => {
        this.data = data;
      })
      this.icons = icons;
    }

  }
}
