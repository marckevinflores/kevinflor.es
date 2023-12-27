import { Component, ViewEncapsulation } from '@angular/core';
import { api, mobile, monitor, search, site, speed} from './expertise-area.icon'
import { NgForOf } from '@angular/common';
import { Icon } from 'src/app/shared/components/icon/icon';
import { SpotlightDirective } from './directive/spotlight.directive'
@Component({
  selector: 'expertise-area',
  template: `<section class="text-center mt-16">
  <p class="mb-8 text-2xl lg:text-2xl text-gray-900  dark:text-white inline-block">Expertise Area</p>
  <div class="max-w-screen-xl grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start group" spot-light>
    @for (s of services; track $index) {
    <div
      class="border border-gray-200 dark:border-gray-700  relative h-full dark:bg-slate-800 bg-white rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-primary before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-primary after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
      <div class="relative h-full dark:bg-slate-900 bg-white p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
        <div
          class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square">
          <div class="absolute inset-0  dark:bg-slate-800 bg-white rounded-full blur-[80px] translate-z-0"></div>
        </div>
        <div class="flex flex-col gap-3">
          <icon [path]="s.icon" [size]="50" class="mx-auto"></icon>
          <span class="text-xl font-semibold dark:text-white">{{s.name}}</span>
          <span class="text-gray-800 dark:text-gray-300">{{s.description}}</span>
        </div>
      </div>
    </div>
    }
  </div>
</section>
`,
  encapsulation: ViewEncapsulation.None,
  imports: [ Icon, NgForOf, SpotlightDirective ],
  standalone: true
})
export class ExpertiseArea {
  services = [
    {
      icon: site,
      name: '90%',
      description: 'Web Development'
    },
    {
      icon: api,
      name: '60%',
      description: 'API Development'
    },
    {
      icon: mobile,
      name: '70%',
      description: 'Mobile Development'
    },
    {
      icon: monitor,
      name: '30%',
      description: 'UX/UI Design'
    },
    {
      icon: speed,
      name: '75%',
      description: 'Performance Optimization'
    },
    {
      icon: search,
      name: '20%',
      description: 'Unit Testing'
    },
  ]
}
