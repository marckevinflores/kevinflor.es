import { Component } from '@angular/core';
import { github } from '@icon/brand.icon';
import { Devicon } from '@shared/components/devicon/devicon';
import { Icon } from '@shared/components/icon/icon';

@Component({
  selector: 'use-page',
  standalone: true,
  imports: [Devicon, Icon],
  template: `<div class="flex flex-col gap-5">
  <h1 class="text-2xl font-bold dark:text-white">Tech Stack</h1>
  <p class="dark:text-white">
    This website is created with <a class="text-primary" href="https://angular.io" aria-label="Angular"
      target="_blank">Angular 17</a>
    and
    <a class="text-primary" href="https://tailwindcss.com/" aria-label="Tailwind CSS" target="_blank">Tailwind CSS</a>.
    It's hosted on
    <a class="text-primary" href="https://aws.amazon.com/s3/" target="_blank">AWS S3</a>, and if you're
    curious, feel free to
    explore the source code on <a class="text-primary" href="https://github.com/marckevinflores/kevinflor.es"
      target="_blank">GitHub</a>.
  </p>

  <div class="flex flex-row gap-16">
    <div>
      <h2 class="text-lg font-bold dark:text-white">Angular:</h2>
      <ul class="text-gray-700 dark:text-gray-200">
        <li>Lazy Loading
        </li>
        <li>Standalone Components</li>
        <li>Signals</li>
        <li>Prerender (SSG)</li>
        <li>Deferrable Views</li>
        <li>Control Flow Syntax</li>
      </ul>
    </div>
    <div>
      <h2 class="text-lg font-bold dark:text-white">Tailwind CSS:</h2>
      <ul class="text-gray-700 dark:text-gray-200">
        <li>Dark Mode
        </li>
        <li>Animation</li>
        <li>Safelist</li>
        <li>Typography</li>
      </ul>
    </div>
    <div>
      <h2 class="text-lg font-bold dark:text-white">Libraries:</h2>
      <ul class="text-gray-700 dark:text-gray-200">
        <li>Medium Zoom
        </li>
      </ul>
    </div>
  </div>
  <h1 class="text-2xl font-bold dark:text-white">Typography:</h1>
  <p class="dark:text-white">I'm using <a class="text-primary" href="https://fonts.google.com/specimen/Inter?query=inter">Inter</a> for all
    content</p>
</div>
`
})
export class UsePage {
  public github = github;
}
