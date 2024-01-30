import { Component, signal } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';
import { github } from '@icon/brand.icon';
import { Devicon } from '@shared/components/devicon/devicon';
import { Logo } from '@shared/components/logo/logo';

@Component({
  selector: 'use-page',
  standalone: true,
  imports: [Devicon, Logo],
  template: `<div>
  <h1 class="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug dark:text-white">Uses</h1>
  <div class="flex flex-col gap-7">
    <h2 class="text-xl font-bold dark:text-white">Tech Stack:</h2>
    <p class="dark:text-gray-200">
      This website is created with Angular and Tailwind CSS. It's hosted on AWS
      S3, and if you're curious, feel free to explore the source code on
      <a class="underline" href="https://github.com/marckevinflores/kevinflor.es" target="_blank"
        >GitHub</a
      >.
    </p>
    <ul class="flex flex-row py-5 gap-5">
      <li class="pr-5">
        <devicon name="Angular 17" cssClass="w-12 h-12"></devicon>
      </li>
      <li class="pr-5">
        <devicon name="Tailwind CSS" cssClass="w-12 h-12"></devicon>
      </li>
    </ul>
    <h2 class="text-xl font-bold dark:text-white">Typography:</h2>
    <div
      class="grid grid-cols-2 sm:grid-cols-4 dark:text-gray-200 text-gray-900 text-center border-y border-gray-500"
    >
      <p class="border-x border-gray-500 p-4  font-normal">Inter Regular</p>
      <p class="border-r border-gray-500 p-4 font-semibold">Inter Semibold</p>
      <p class="border-r border-gray-500 p-4 font-bold">Inter Bold</p>
      <p class="border-r border-gray-500 p-4 font-extrabold">Inter Extrabold</p>
    </div>
    <h2 class="text-xl font-bold dark:text-white">Colors:</h2>
    <p class="dark:text-white text-black">I choose this color palette. The design is a blend of inspiration from various people and websites.
    </p>
    <div class="grid grid-cols-5 sm:grid-cols-10 text-center">
      @for(v of variants(); track $index){
        <p [class]="'bg-primary-' + v +' p-4 text-'+ ( v > 400 ? 'white' : 'black')">{{v}}</p>
      }
    </div>

    <h2 class="text-xl font-bold dark:text-white">Logo:</h2>
    <p class="text-black dark:text-white">
      The logo is mixed with the first letter of my full name, M, K, and F letters, to make it short, I just got an idea on Google search.
    </p>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 items-center place-items-center"
    >
      <div
        class="flex flex-col items-center justify-center p-6 w-full border border-gray-500 text-center bg-white dark:bg-black"
      >
        <logo class="dark:text-white text-black"></logo>
      </div>
      <div
        class="flex flex-col items-center justify-center p-6 w-full border dark:border-white border-black text-center bg-black dark:bg-white"
      >
        <logo class="dark:text-black text-white"></logo>
      </div>
    </div>
  </div>
  </div>`,
})
export class UsePage {
  public variants = signal<number[]>([50, 100, 200, 300, 400, 500, 600, 700, 800, 900]);
  constructor(private metaService: MetaService){
    this.metaService.setMetaTags(
      `Uses - ${profileData.name}`,
      'Dive into my portfolio, a passionate software engineer based in the Philippines. Explore the intricacies of my journey, from personal details to exciting projects. Join me on this virtual exploration of technology, creativity, and more.',
      [
        'marc kevin flores',
        'marc kevin',
        'marckevinflores',
        'software engineer',
        'philippines',
        'bio',
        'developer',
        'portfolio',
        'development',
        'android',
        'web',
        'ios',
      ]
    );
  }
  public github = github;
}
