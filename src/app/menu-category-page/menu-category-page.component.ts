import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http-service.service';
import { MenuService } from '../menu.service';
import { MenuCategory } from '../Model/menu-category';
import { LoginStatus } from '../LoginStatus';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-menu-category-page',
  templateUrl: './menu-category-page.component.html',
  styleUrls: ['./menu-category-page.component.css']
})
export class MenuCategoryPageComponent implements OnInit {

  constructor(
    private dbservice: HttpService, 
    private menuservice:MenuService,
    private titleService: Title,
  ) { }

  admin:boolean = LoginStatus.loggedIn;
  menuCategories:MenuCategory[] = []

  ngOnInit(): void {
    this.admin = this.dbservice.admin;
    this.setData();
    this.menuCategories = this.menuservice.menuCategories;
    this.admin = LoginStatus.loggedIn;
    this.titleService.setTitle("Menu");
  }
  setData(){
    this.menuservice.menuCategories = [];
    this.dbservice.httpGet('menuCategory').subscribe( data => data.forEach(element => {
      this.menuservice.menuCategories.push(element as MenuCategory);
    })); 
    this.menuCategories = this.menuservice.menuCategories;
  }

  refreshData(){
    this.menuCategories = this.menuservice.menuCategories;
  }

}
