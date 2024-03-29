import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http-service.service';
import { MenuService } from '../menu.service';
import { MenuCategory } from '../Model/menu-category';

@Component({
  selector: 'app-menu-category-add-card',
  templateUrl: './menu-category-add-card.component.html',
  styleUrls: ['./menu-category-add-card.component.css']
})
export class MenuCategoryAddCardComponent implements OnInit {

  constructor(private menuservice:MenuService, private dbservice:HttpService) { }

  @Output() refreshData:EventEmitter<boolean> = new EventEmitter();


  //varibles for admin
  name:string = "";
  description:string="";
  picture:string="";
  ngOnInit(): void {
  }
  add(){
    let catigory: MenuCategory = new MenuCategory(this.name, this.description, this.picture)
    this.dbservice.httpPut('menuCategory', catigory).subscribe();
    this.menuservice.menuCategories.push(catigory);
    
    this.name = "";
    this.description="";
    this.picture="";
    
    this.refreshData.emit(true);
  }

}
