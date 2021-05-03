import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http-service.service';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-item-card-edit',
  templateUrl: './menu-item-card-edit.component.html',
  styleUrls: ['./menu-item-card-edit.component.css']
})
export class MenuItemCardEditComponent implements OnInit {

  constructor(private dbservice: HttpService, private menuservice : MenuService) { }


  name:string = "";
  description:string="";
  picture:string="";

  ngOnInit(): void {
  }

  edit(){
    this.menuservice.activeMenuItem.setName(this.name);
    this.menuservice.activeMenuItem.setDescription( this.description)
    this.menuservice.activeMenuItem.setImage(this.picture)
    this.dbservice.httpPut( "menuCategory/" +  this.menuservice.activeCatigory.id + "/" +'menu-items', this.menuservice.activeMenuItem).subscribe();
    this.menuservice.menuItems[this.menuservice.IndexOfMenuItem] = this.menuservice.activeMenuItem;
  }

}
