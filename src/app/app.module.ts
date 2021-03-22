import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxSignGenModule } from 'projects/ngx-sign-gen/src/public-api';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxSignGenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
