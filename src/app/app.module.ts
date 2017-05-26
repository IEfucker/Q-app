import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module'

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DescriptionComponent } from './description/description.component';
import { QSlideComponent } from './q-slide/q-slide.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ButtonModule,RadioButtonModule } from 'primeng/primeng';

import {TestService} from "./test.service";
import { EndComponent } from './end/end.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DescriptionComponent,
    QSlideComponent,
    PageNotFoundComponent,
    EndComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ButtonModule,
    RadioButtonModule
    // DataTableModule, 
    // MenubarModule, 
    // InputTextModule, 
    // InputTextareaModule, 
    // MultiSelectModule, 
    // ConfirmDialogModule 
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
