import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http-service.service';
import { MenuService } from '../menu.service';
import { MenuCategory } from '../Model/menu-category';
import { MenuItem } from '../Model/menu-item';

@Component({
  selector: 'app-menu-item-page',
  templateUrl: './menu-item-page.component.html',
  styleUrls: ['./menu-item-page.component.css']
})
export class MenuItemPageComponent implements OnInit {

  

  menuCategory:MenuCategory= new MenuCategory('','','');
  constructor(private dbservice:HttpService, private menuservice:MenuService, private router:Router) { }
  admin:boolean=false;
  menuItems :MenuItem[] = []
  ngOnInit(): void {
    if(this.menuservice.activeCatigory.name == ''){
      this.router.navigate(['/menu-category-page']);
    }
    this.menuCategory = this.menuservice.activeCatigory;
    this.setData();
    this.admin= this.dbservice.admin;

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
    this.menuservice.activeCatigory = new MenuCategory('','','')
  }
  refreshData(){
    this.menuItems = this.menuservice.menuItems;
  }

}
