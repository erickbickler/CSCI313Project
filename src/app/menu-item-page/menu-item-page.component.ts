import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http-service.service';
import { MenuService } from '../menu.service';
import { MenuCategory } from '../Model/menu-category';
import { MenuItem } from '../Model/menu-item';
import { LoginStatus } from '../LoginStatus';


@Component({
  selector: 'app-menu-item-page',
  templateUrl: './menu-item-page.component.html',
  styleUrls: ['./menu-item-page.component.css']
})
export class MenuItemPageComponent implements OnInit {

  

  menuCategory:MenuCategory= new MenuCategory('','','');
  constructor(private dbservice:HttpService, private menuservice:MenuService, private router:Router,) { }
  admin:boolean = LoginStatus.loggedIn;
  menuItems :MenuItem[] = []
  category:string = this.menuservice.activeCategory.name;
  ngOnInit(): void {
    if(this.menuservice.activeCategory.name == ''){
      this.router.navigate(['/menu-category-page']);
    }
    this.menuCategory = this.menuservice.activeCategory;
    this.setData();
    this.admin= this.dbservice.admin;
    this.admin = LoginStatus.loggedIn;

  }

  setData(){
    this.menuservice.menuItems = [];
    this.dbservice.httpGet( "menuCategory/" +  this.menuCategory.id + "/" + "menu-items" ).subscribe(data => data.forEach(element => {
      this.menuservice.menuItems.push(element as MenuItem);
    }));
    this.menuItems= this.menuservice.menuItems;
  }

  back(){
    this.router.navigate(['/menu-category-page']);
    this.menuservice.activeCategory = new MenuCategory('','','')
  }
  refreshData(){
    this.menuItems = this.menuservice.menuItems;
  }

}
