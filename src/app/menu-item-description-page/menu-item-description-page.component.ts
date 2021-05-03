import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http-service.service';
import { MenuService } from '../menu.service';
import { MenuItem } from '../Model/menu-item';

@Component({
  selector: 'app-menu-item-description-page',
  templateUrl: './menu-item-description-page.component.html',
  styleUrls: ['./menu-item-description-page.component.css']
})
export class MenuItemDescriptionPageComponent implements OnInit {

  constructor(private menuService:MenuService, private dbservice : HttpService, private router : Router) { }
  menuItem:MenuItem = this.menuService.activeMenuItem;
  admin:boolean=false;
  ngOnInit(): void {
    this.admin = this.dbservice.admin;
  }

  back(){
    this.router.navigate(['/menu-item-page']);
  }


}
