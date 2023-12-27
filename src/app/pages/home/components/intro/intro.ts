import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { PlatformCheckService } from 'src/app/core/services/platform-check.service';
import { environment } from 'src/environments/environment.development';
import { Button } from 'src/app/shared/components/button/button';
import { ManSorrow } from './man-sorrow/man-sorrow';
import { SocialLink } from 'src/app/shared/components/social-link/social-link';

@Component({
  selector: 'intro',
  template: `
  <section class="mt-8 relative">
  <div class="grid grid-cols-1">
    <div>
      <man-sorrow class="flex justify-end"></man-sorrow>
    </div>
    <div
      class="w-full sm:w-auto flex flex-col gap-3 justify-between sm:absolute z-10 top-0 left-0 sm:top-5 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-400 p-5">
      <p class="flex justify-start text-xl dark:text-gray-200 font-semibold"><span
          class="animate-waving-hand">👋</span>&nbsp;&nbsp;{{ changingText }}!
      </p>
      <h1 class="text-xl font-semibold dark:text-white">I'm <span class="text-primary-600 dark:text-primary-400 ">Marc
          Kevin
          Flores</span></h1>
      <span class="dark:text-gray-200">Enthusiastic software engineer from Philippines</span>
      <div class="flex flex-row items-center gap-4">
        <btn [link]="cvUrl" ariaLabel="resume">Resume</btn>
        <social-link></social-link>
      </div>
    </div>
  </div>
</section>
  `,
  imports: [SocialLink, Button, ManSorrow],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class Intro implements OnInit, OnDestroy {
  public cvUrl = `${environment.url}/cv.pdf`
  greetings: string[] = [
    'Hello, world',
    'Kamusta, mundo'
  ];
  currentGreetingIndex: number = 0;
  changingText: string = this.greetings[0];
  private intervalSubscription!: Subscription;

  constructor(private cd: ChangeDetectorRef, private platformCheck: PlatformCheckService){}
  ngOnInit(): void {
    if (this.platformCheck.onBrowser) {
      this.intervalSubscription = interval(2000).subscribe(() => {
        this.updateText();
        this.cd.detectChanges();
      });
    }
  }
  ngOnDestroy(): void {
    if(this.intervalSubscription){
      this.intervalSubscription.unsubscribe();
    }
  }
  updateText(): void {
    this.currentGreetingIndex = (this.currentGreetingIndex + 1) % this.greetings.length;
    this.changingText = this.greetings[this.currentGreetingIndex];
  }
}
