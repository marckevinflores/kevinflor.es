import { Component, Signal, ViewEncapsulation, signal } from '@angular/core';
import { Icon } from '@shared/components/icon/icon';
import { SpotlightDirective } from '@pages/home/components/expertise-area/directive/spotlight.directive'
import expertiseAreaData from '@data/expertise-area.data'
import { ExpertiseAreaSchema } from '@data/schema/expertise-area.schema';
@Component({
  selector: 'expertise-area',
  encapsulation: ViewEncapsulation.None,
  imports: [ Icon, SpotlightDirective ],
  standalone: true,
  template: `
    <section class="mt-16">
      <p class="mb-8 text-2xl text-gray-900 dark:text-white inline-block">Expertise Area</p>
      <div class="max-w-screen-xl grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start group" spot-light>
        @for (s of services(); track $index) {
        <div
          class="border border-gray-200 dark:border-gray-700  relative h-full dark:bg-slate-800 bg-white rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-primary before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100  before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-primary after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:blur-[100px] overflow-hidden">
          <div class="relative h-full dark:bg-slate-900 bg-white p-6 pb-8 rounded-[inherit] overflow-hidden">
            <div
              class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square">
              <div class="absolute inset-0  dark:bg-slate-800 bg-white rounded-full blur-[80px] translate-z-0"></div>
            </div>
            <div class="flex flex-col gap-3 text-center">
              <icon [path]="s.icon" [size]="50" class="mx-auto"/>
              <span class="text-xl font-semibold dark:text-white">{{s.percent}}</span>
              <span class="text-gray-800 dark:text-gray-300">{{s.name}}</span>
            </div>
          </div>
        </div>
      }
    </div>
`
})
export class ExpertiseArea{
  public services: Signal<ExpertiseAreaSchema[]> = signal(expertiseAreaData)
}
