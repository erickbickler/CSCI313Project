import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http-service.service';
import { MenuService } from '../menu.service';
import { MenuCategory } from '../Model/menu-category';

@Component({
  selector: 'app-menu-category-edit',
  templateUrl: './menu-category-edit.component.html',
  styleUrls: ['./menu-category-edit.component.css']
})
export class MenuCategoryEditComponent implements OnInit {

  constructor(private dbservice:HttpService, private menuservice:MenuService) { }

  ngOnInit(): void {
    this.name = this.menuservice.activeCategory.name;
    this.description  =this.menuservice.activeCategory.description;
    this.picture=this.menuservice.activeCategory.image;
  }
    //variables for admin
    name:string = "";
    description:string="";
    picture:string="";

    edit(){
      this.menuservice.activeCategory.setName(this.name);
      this.menuservice.activeCategory.setDescription( this.description)
      this.menuservice.activeCategory.setImage(this.picture)
      this.dbservice.httpPut('menuCategory', this.menuservice.activeCategory).subscribe();
      this.menuservice.menuCategories[this.menuservice.indexOfCategory] = this.menuservice.activeCategory;
      
      this.name = "";
      this.description="";
      this.picture="";
  }

}
