import { APP_ID, NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule, TransferState, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularSvgIconModule, SvgLoader } from 'angular-svg-icon';
import { isPlatformServer } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterModule } from './layout/footer/footer.module';
import { NavbarModule } from './layout/navbar/navbar.module';
import { ScrollToTopModule } from './shared/components/scroll-to-top/scroll-to-top.module';
import { SvgServerLoader } from './utils/svg-server.loader';
import { SvgBrowserLoader } from './utils/svg-browser.loader';
export function svgLoaderFactory(http: HttpClient, transferState: TransferState, platformId: any): SvgServerLoader | SvgBrowserLoader {
  if (isPlatformServer(platformId)) {
    return new SvgServerLoader('../browser/assets/devicon', transferState);
  } else {
    return new SvgBrowserLoader(http, transferState);
  }
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot({
      loader: {
        provide: SvgLoader,
        useFactory: svgLoaderFactory,
        deps: [ HttpClient, TransferState, PLATFORM_ID ],
      },
    }),
    FooterModule,
    NavbarModule,
    ScrollToTopModule,

  ],
  providers: [
    { provide: APP_ID,  useValue: 'serverApp' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
