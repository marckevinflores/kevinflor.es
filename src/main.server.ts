import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';


const bootstrap = () => bootstrapApplication(App, appConfig);

export default bootstrap;
