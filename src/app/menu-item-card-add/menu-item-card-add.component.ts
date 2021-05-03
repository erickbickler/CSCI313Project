import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http-service.service';
import { MenuService } from '../menu.service';
import { MenuItem } from '../Model/menu-item';

@Component({
  selector: 'app-menu-item-card-add',
  templateUrl: './menu-item-card-add.component.html',
  styleUrls: ['./menu-item-card-add.component.css']
})
export class MenuItemCardAddComponent implements OnInit {

  @Output() refreshData:EventEmitter<boolean> = new EventEmitter();

  constructor(private dbservice:HttpService, private menuservice:MenuService) { }
  //varibles for admin
    name:string = "";
    description:string="";
    picture:string="";

  ngOnInit(): void {

  }
  add(){
    let menu:MenuItem = new MenuItem(this.name, this.description, this.picture)
    this.dbservice.httpPut( "menuCategory/" +  this.menuservice.activeCategory.id + "/" +'menu-items', menu).subscribe();
    this.menuservice.menuItems.push(menu);

    this.name = "";
    this.description="";
    this.picture="";

    this.refreshData.emit(true);
  }
}
