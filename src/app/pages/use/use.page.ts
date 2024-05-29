import { Component, inject } from '@angular/core';
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
    <p class="dark:text-white text-black">
      This website is created with Angular and Tailwind CSS. It's hosted on AWS
      S3, and if you're curious, feel free to explore the source code on
      <a class="underline" href="https://github.com/marckevinflores/kevinflor.es" target="_blank"
        >GitHub</a
      >.
    </p>
    <ul class="flex flex-row py-5 gap-5">
      <li class="pr-5">
        <devicon name="Angular" cssClass="w-12 h-12"/>
      </li>
      <li class="pr-5">
        <devicon name="Tailwind CSS" cssClass="w-12 h-12"/>
      </li>
    </ul>
    <h2 class="text-xl font-bold dark:text-white">Typography:</h2>
    <p class="dark:text-white text-black">For now, I've chosen <a href="https://fonts.google.com/specimen/Inter?query=inter" class="underline" target="_blank" aria-label="Font Style">Inter</a>, a typeface commonly utilized by web designers.</p>
    <div
      class="grid grid-cols-2 sm:grid-cols-4 dark:text-gray-200 text-gray-900 text-center border-y border-gray-500"
    >
      <p class="border-x border-gray-500 p-4  font-normal">Inter Regular</p>
      <p class="border-r border-gray-500 p-4 font-semibold">Inter Semibold</p>
      <p class="border-r border-gray-500 p-4 font-bold">Inter Bold</p>
      <p class="border-r border-gray-500 p-4 font-extrabold">Inter Extrabold</p>
    </div>
    <h2 class="text-xl font-bold dark:text-white">Colors:</h2>
    <p class="dark:text-white text-black">I chose this color palette, drawing inspiration from various websites to create the design.
    </p>
    <div class="grid grid-cols-5 sm:grid-cols-10 text-center select-none">
      <p class="bg-primary-50 p-4 text-black">50</p>
      <p class="bg-primary-100 p-4 text-black">100</p>
      <p class="bg-primary-200 p-4 text-black">200</p>
      <p class="bg-primary-300 p-4 text-black">300</p>
      <p class="bg-primary-400 p-4 text-black">400</p>
      <p class="bg-primary-500 p-4 text-white">500</p>
      <p class="bg-primary-600 p-4  text-white">600</p>
      <p class="bg-primary-700 p-4 text-white">700</p>
      <p class="bg-primary-800 p-4 text-white">800</p>
      <p class="bg-primary-900 p-4 text-white">900</p>
    </div>

    <h2 class="text-xl font-bold dark:text-white">Logo:</h2>
    <p class="text-black dark:text-white">
    I designed the logo myself, incorporating the first letters of my full name M, K, and F to create a concise design. The inspiration struck me during a Google search.
    </p>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 items-center place-items-center"
    >
      <div
        class="flex flex-col items-center justify-center p-6 w-full border border-gray-500 text-center bg-white dark:bg-transparent"
      >
        <logo class="dark:text-white text-black"/>
      </div>
      <div
        class="flex flex-col items-center justify-center p-6 w-full border dark:border-white border-black text-center bg-gray-900 dark:bg-white"
      >
        <logo class="dark:text-black text-white"/>
      </div>
    </div>
    <h2 class="text-xl font-bold dark:text-white">Intro Image:</h2>
    <p class="text-black dark:text-white">I just found it here on <a class="underline" target="_blank" href="https://storyset.com/illustration/before-dawn/pana#utm_source=freepik&utm_medium=referall&utm_campaign=storiesdetail&utm_content=edit-button&utm_term=edit">storyset.com</a></p>
  </div>
  </div>`,
})
export class UsePage {
  metaService = inject(MetaService)
  constructor(){
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
