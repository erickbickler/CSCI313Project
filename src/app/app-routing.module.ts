import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { LocationsComponent } from './locations/locations.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuItemPageComponent } from './menu-item-page/menu-item-page.component';
import { MenuCategoryPageComponent } from './menu-category-page/menu-category-page.component';
import { MenuItemDescriptionPageComponent } from './menu-item-description-page/menu-item-description-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'menu-category-page', component:MenuCategoryPageComponent},
  { path: 'menu-item-page', component: MenuItemPageComponent },
  { path: 'menu-item-description-page', component: MenuItemDescriptionPageComponent},
  { path: 'menu' , component:MenuPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//menu-categories, menu-items, locations, menu-page
