import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http-service.service';
import { MenuService } from '../menu.service';
import { MenuCategory } from '../Model/menu-category';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { LoginStatus } from '../LoginStatus';
@Component({
  selector: 'app-menu-category-card',
  templateUrl: './menu-category-card.component.html',
  styleUrls: ['./menu-category-card.component.css']
})
export class MenuCategoryCardComponent implements OnInit {

  constructor(private dbservice: HttpService,
    private menuservice : MenuService,
    private router : Router) { }
  @Input() index : number = 0;
  admin:boolean = LoginStatus.loggedIn;
  category: MenuCategory = new MenuCategory('','','');
  ngOnInit(): void {
    this.admin =  LoginStatus.loggedIn;
    this.category = this.menuservice.menuCategories[this.index];
  }

  onClick(){
    this.menuservice.activeCategory = this.category;
    this.menuservice.indexOfCategory = this.index;
    this.router.navigate(['/menu-item-page'])
  }

  remove(){
    this.dbservice.httpDelete('menuCategory', this.category).subscribe();
    this.menuservice.menuCategories.splice(this.index,1);
  }


}
