import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppRoutingModule} from './app-routing.module'

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DescriptionComponent } from './description/description.component';
import { QSlideComponent } from './q-slide/q-slide.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ButtonModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DescriptionComponent,
    QSlideComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ButtonModule
    // DataTableModule, 
    // MenubarModule, 
    // InputTextModule, 
    // InputTextareaModule, 
    // MultiSelectModule, 
    // ConfirmDialogModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
