import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginService } from './login.service';
import { FooterComponent } from './footer/footer.component';
import { LocationsComponent } from './locations/locations.component';
import { HomeComponent } from './home/home.component';
import { MenuCategoryPageComponent } from './menu-category-page/menu-category-page.component';
import { MenuCategoryCardComponent } from './menu-category-card/menu-category-card.component';
import { MenuCategoryAddCardComponent } from './menu-category-add-card/menu-category-add-card.component';
import { MenuItemPageComponent } from './menu-item-page/menu-item-page.component';
import { MenuCategoryEditComponent } from './menu-category-edit/menu-category-edit.component';
import { MenuItemCardComponent } from './menu-item-card/menu-item-card.component';
import { MenuItemCardAddComponent } from './menu-item-card-add/menu-item-card-add.component';
import { MenuItemDescriptionPageComponent } from './menu-item-description-page/menu-item-description-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { MenuItemCardEditComponent } from './menu-item-card-edit/menu-item-card-edit.component';
import { MenuService } from './menu.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    LocationsComponent,
    HomeComponent,
    MenuCategoryPageComponent,
    MenuCategoryCardComponent,
    MenuCategoryAddCardComponent,
    MenuItemPageComponent,
    MenuCategoryEditComponent,
    MenuItemCardComponent,
    MenuItemCardAddComponent,
    MenuItemDescriptionPageComponent,
    MenuPageComponent,
    MenuItemCardEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, LoginService, MenuService]
})
export class AppModule { }
