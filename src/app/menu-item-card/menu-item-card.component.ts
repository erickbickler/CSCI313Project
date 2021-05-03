import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http-service.service';
import { MenuService } from '../menu.service';
import { MenuCategory } from '../Model/menu-category';
import { MenuItem } from '../Model/menu-item';

@Component({
  selector: 'app-menu-item-card',
  templateUrl: './menu-item-card.component.html',
  styleUrls: ['./menu-item-card.component.css']
})
export class MenuItemCardComponent implements OnInit {

  constructor(private menuservice: MenuService, private dbservice:HttpService,private router:Router) { }
  @Input() index:number = 0;
  menuItem:MenuItem = new MenuItem('','','')
  ngOnInit(): void {
    this.menuItem = this.menuservice.menuItems[this.index];
  }

  OnClick(){
    this.menuservice.activeMenuItem = this.menuItem;
    this.menuservice.IndexOfMenuItem = this.index;
    this.router.navigate(['/menu-item-description-page']);
  }

  remove(){
    this.dbservice.httpDelete("menuCategory/" +  this.menuservice.activeCatigory.id + "/" +'menu-items', this.menuItem).subscribe();
    this.menuservice.menuItems.splice(this.index,1);
  }

}
