import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, NgZone, OnDestroy, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroComponent implements OnInit, OnDestroy {
  public cvUrl = `${environment.url}/cv.pdf`
  greetings: string[] = [
    'Hello, world',
    'Kamusta, mundo'
  ];
  currentGreetingIndex: number = 0;
  changingText: string = this.greetings[0];
  private intervalSubscription!: Subscription;

  constructor(private cd: ChangeDetectorRef, @Inject(PLATFORM_ID) private platformId: Object){}
  ngOnInit(): void {
    // if (isPlatformBrowser(this.platformId)) {
    //   this.intervalSubscription = interval(2000).subscribe(() => {
    //     this.updateText();
    //     this.cd.detectChanges();
    //   });
    // }
  }
  ngOnDestroy(): void {
    // if(this.intervalSubscription){
    //   this.intervalSubscription.unsubscribe();
    // }
  }
  updateText(): void {
    this.currentGreetingIndex = (this.currentGreetingIndex + 1) % this.greetings.length;
    this.changingText = this.greetings[this.currentGreetingIndex];
  }
}
