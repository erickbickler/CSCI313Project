import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http-service.service';
import { LoginStatus } from '../LoginStatus';
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
  admin:boolean = LoginStatus.loggedIn;
  ngOnInit(): void {
    this.menuItem = this.menuservice.menuItems[this.index];
    this.admin = LoginStatus.loggedIn;
  }
  onClick(){
    if(this.admin){
      this.router.navigate(['/edit-item-card'])
    }
  }

  remove(){
    this.dbservice.httpDelete("menuCategory/" +  this.menuservice.activeCategory.id + "/" +'menu-items', this.menuItem).subscribe();
    this.menuservice.menuItems.splice(this.index,1);
  }

}
