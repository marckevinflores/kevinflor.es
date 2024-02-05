import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, ViewEncapsulation, effect, inject, signal } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { PlatformCheckService } from '@core/services/platform-check.service';
import { Button } from '@shared/components/button/button';
import { ManSorrow } from '@pages/home/components/intro/man-sorrow/man-sorrow';
import { SocialLink } from '@shared/components/social-link/social-link';
import  ProfileData from '@data/profile.data'
import { ProfileSchema } from '@data/schema/profile.schema';
import { Icon } from '@shared/components/icon/icon';
import { file } from '@icon/solid.icon';
import { Loader } from '@shared/components/loader/loader';
@Component({
  selector: 'intro',
  template: `
    <section class="mt-8 relative">
      <div class="grid grid-cols-1">
        <div>
          <man-sorrow class="flex justify-end"/>
        </div>
        <div
          class="w-full sm:w-auto flex flex-col gap-3 justify-between sm:absolute top-0 left-0 sm:top-5 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-400 p-5">
          <p class="flex justify-start text-xl dark:text-gray-200 font-semibold"><span
              class="animate-waving-hand">👋</span>&nbsp;&nbsp;{{ changingText() }}!
          </p>
          <h1 class="text-xl font-semibold dark:text-white">I'm <span class="text-primary-600 dark:text-primary-400 ">{{profile().name}}</span></h1>
          <span class="dark:text-gray-200">{{profile().bio}}</span>
          <div class="flex flex-col sm:flex-row sm:items-center gap-4">
            <btn [link]="profile().resumeLink" ariaLabel="resume" class="flex gap-1">
              <icon [size]="20" iconClass="fill-white"
              [path]="fileIcon"
              />
            <span>Resume</span>
            </btn>
            <social-link/>
          </div>
        </div>
      </div>
    </section>
  `,
  imports: [SocialLink, Button, ManSorrow, Icon, Loader],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class Intro {
  profile = signal<ProfileSchema>(ProfileData);
  fileIcon = file;
  public changingText = signal<string>(this.profile().greetings[0]);
  platformCheck = Inject(PlatformCheckService)
  cd = inject(ChangeDetectorRef)
  currentGreetingIndex = signal<number>(0);
  greetingSub!: Subscription;

  constructor(){
    effect((onCleanup) => {
        this.greetingSub = interval(2000).subscribe(() => {
          this.updateText();
        });
      onCleanup(() => {
        if (this.greetingSub) {
          this.greetingSub.unsubscribe();
        }
      });
    });
  }
  updateText(): void {
    this.currentGreetingIndex.set((this.currentGreetingIndex() + 1) % this.profile().greetings.length);
    this.changingText.set(this.profile().greetings[this.currentGreetingIndex()]);
  }
}
