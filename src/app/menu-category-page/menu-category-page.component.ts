import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http-service.service';
import { MenuService } from '../menu.service';
import { MenuCategory } from '../Model/menu-category';

@Component({
  selector: 'app-menu-category-page',
  templateUrl: './menu-category-page.component.html',
  styleUrls: ['./menu-category-page.component.css']
})
export class MenuCategoryPageComponent implements OnInit {

  constructor(private dbservice: HttpService, 
    private menuservice:MenuService) { }
    admin:boolean = true;
    menuCategories:MenuCategory[] = []
    ngOnInit(): void {
    this.admin = this.dbservice.admin;
    this.setData()
    this.menuCategories = this.menuservice.menuCatigories
  }
  setData(){
    this.dbservice.httpGet('menuCategory').subscribe( data => data.forEach(element => {
      this.menuservice.menuCatigories.push(element as MenuCategory);
    })); 
    console.log(this.menuservice.menuCatigories)
    this.delay(500);
    this.menuCategories = this.menuservice.menuCatigories
  }

  refreshData(){
    this.menuCategories = this.menuservice.menuCatigories
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  Mod3(num : number) : number{
    return num % 3;
  }

}
