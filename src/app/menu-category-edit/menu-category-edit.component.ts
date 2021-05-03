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
  }
    //varibles for admin
    name:string = "";
    description:string="";
    picture:string="";

    edit(){
      this.menuservice.activeCatigory.setName(this.name);
      this.menuservice.activeCatigory.setDescription( this.description)
      this.menuservice.activeCatigory.setImage(this.picture)
      this.dbservice.httpPut('menuCategory', this.menuservice.activeCatigory).subscribe();
      this.menuservice.menuCatigories[this.menuservice.indexOfCatigory] = this.menuservice.activeCatigory;
  }

}
