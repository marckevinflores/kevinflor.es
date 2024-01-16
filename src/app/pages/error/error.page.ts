import { Component, ViewEncapsulation } from '@angular/core';
import { Button } from '@shared/components/button/button';

@Component({
  selector: 'error-page',
  template: `<div class="grid grid-cols-1 py-48">
    <div class="flex flex-col gap-3 justify-center order-1 sm:-order-1 text-center sm:text-start">
    <h1 class="font-bold text-xl sm:text-3xl dark:text-white text-gray-900">Woops! ~ Page not found</h1>
    <p class="dark:text-white text-gray-900">Unfortunately, the page you're looking for doesn't exist or has been moved.
    </p>
    <p class="dark:text-white text-gray-900">Please double check the URL for typos. Otherwise,</p>
    <btn link="/">Go back home</btn>
    </div>
  </div>
  `,
  imports: [Button],
  encapsulation: ViewEncapsulation.None,
  standalone: true
})
export class ErrorPage{}
