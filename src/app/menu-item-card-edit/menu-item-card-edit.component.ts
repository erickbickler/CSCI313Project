import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http-service.service';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-item-card-edit',
  templateUrl: './menu-item-card-edit.component.html',
  styleUrls: ['./menu-item-card-edit.component.css']
})
export class MenuItemCardEditComponent implements OnInit {

  constructor(private dbservice: HttpService, private menuservice : MenuService, private router:Router) { }


  name:string = "";
  description:string="";
  picture:string="";

  ngOnInit(): void {
    this.name = this.menuservice.activeMenuItem.name
    this.description =  this.menuservice.activeMenuItem.description
    this.picture = this.menuservice.activeMenuItem.image
  }

  edit(){
    this.menuservice.activeMenuItem.name = this.name;
    this.menuservice.activeMenuItem.description =  this.description;
    this.menuservice.activeMenuItem.image = this.picture;
    this.dbservice.httpPut( "menuCategory/" +  this.menuservice.activeCategory.id + "/" +'menu-items', this.menuservice.activeMenuItem).subscribe();
    this.menuservice.menuItems[this.menuservice.IndexOfMenuItem] = this.menuservice.activeMenuItem;
    
    this.name = "";
    this.description="";
    this.picture="";

    this.router.navigate(['/menu-item-page'])
    
  }

}
