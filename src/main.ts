/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { SongtekstenComponent } from './app/components/songteksten/songteksten.component';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
