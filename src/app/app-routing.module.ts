import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

import { WelcomeComponent } from "./welcome/welcome.component"
import { DescriptionComponent } from './description/description.component'
import {QSlideComponent} from './q-slide/q-slide.component'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: "welcome", component: WelcomeComponent },
  { path: "description", component: DescriptionComponent },
  {path: "q/:index", component: QSlideComponent },
  { path: "**", component: PageNotFoundComponent }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}