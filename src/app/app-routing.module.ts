import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationsComponent } from './locations/locations.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'locations', component: LocationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//menu-categories, menu-items, locations, menu-page