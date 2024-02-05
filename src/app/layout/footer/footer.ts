import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  effect,
  inject,
  signal,
} from '@angular/core';
import { PlatformCheckService } from '@core/services/platform-check.service';
import profileData from '@data/profile.data';
import { ProfileSchema } from '@data/schema/profile.schema';
import { clock } from '@icon/regular.icon';
import { Icon } from '@shared/components/icon/icon';
import { Logo } from '@shared/components/logo/logo';
import { SocialLink } from '@shared/components/social-link/social-link';
import { Subscription, interval } from 'rxjs';
@Component({
  selector: 'foot-note',
  template: `<div
    class="border-t border-neutral-200 dark:border-neutral-700 max-w-screen-lg mx-auto p-2"
  >
    <div
      class="flex flex-col sm:flex-row gap-4 justify-between py-2 text-gray-900 dark:text-white"
    >
      <div class="flex flex-row gap-3">
        <logo/>
        <span>{{ profile().name }}</span>
      </div>
        <div class="flex items-center gap-1">
          <icon
          [path]="clockIcon"
          [size]="20"
        /> <span>{{ currentTime() }} (PHT GMT+8)</span></div>

      <social-link/>
    </div>
  </div> `,
  imports: [SocialLink, Logo, Icon],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class Footer {
  platformCheck = inject(PlatformCheckService)
  currentTime = signal<string>(this.getCurrentTime());
  profile = signal<ProfileSchema>(profileData);
  clockIcon = clock;
  timer!: Subscription;
  constructor() {
    effect((onCleanup) => {
      if (this.platformCheck.onBrowser) {
        this.timer = interval(1000).subscribe(() => {
          this.currentTime.set(this.getCurrentTime());
        });
      }
      onCleanup(() => {
        if (this.timer) {
          this.timer.unsubscribe();
        }
      });
    });
  }

  getCurrentTime(): string {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }
}
