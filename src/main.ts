<<<<<<< HEAD
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
=======
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
>>>>>>> 1952e5cd8c52369ce0437287027499e69ccb4be5

if (environment.production) {
  enableProdMode();
}

<<<<<<< HEAD
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
=======
platformBrowserDynamic().bootstrapModule(AppModule);
>>>>>>> 1952e5cd8c52369ce0437287027499e69ccb4be5
