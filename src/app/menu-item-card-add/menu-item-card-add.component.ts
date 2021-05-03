import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http-service.service';
import { MenuService } from '../menu.service';
import { MenuItem } from '../Model/menu-item';

@Component({
  selector: 'app-menu-item-card-add',
  templateUrl: './menu-item-card-add.component.html',
  styleUrls: ['./menu-item-card-add.component.css']
})
export class MenuItemCardAddComponent implements OnInit {

  constructor(private dbservice:HttpService, private menuservice:MenuService) { }
  //varibles for admin
    name:string = "";
    description:string="";
    picture:string="";

  ngOnInit(): void {

  }
  add(){
    this.dbservice.httpPut( "menuCategory/" +  this.menuservice.activeCatigory.id + "/" +'menu-items', new MenuItem(this.name, this.description, this.picture)).subscribe();
    this.menuservice.menuItems.push();
  }
}
