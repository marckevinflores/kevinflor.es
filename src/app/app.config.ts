import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes, withViewTransitions(), withPreloading(PreloadAllModules)
  //     withInMemoryScrolling({
  //   scrollPositionRestoration: 'enabled',
  // })
  )]
};
