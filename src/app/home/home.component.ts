import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpService } from '../http-service.service';
import { MenuItem } from '../Model/menu-item';
import { MenuCategory } from '../Model/menu-category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dailySpecials:string[] = [];
  categories:MenuCategory[] = [];
  menuItems:MenuItem[] = [];
  index:number = 0;

  constructor(private titleService: Title,
              private dbservice: HttpService) { }

  ngOnInit(){
    this.titleService.setTitle("The Saucy Hedgehog")
    this.generateSpecials();
  }

  generateSpecials() {
    for(var i = 0; i < 7; i++) {
      this.dbservice.httpGet('menuCategory').subscribe( data => {
        this.categories = data as MenuCategory[];
        this.index = Math.floor(Math.random() * (this.categories.length));
        this.dbservice.httpGet( "menuCategory/" +  (this.categories[this.index] as MenuCategory).id + "/" + "menu-items" ).subscribe(data => data.forEach(element => {
          this.menuItems.push(element as MenuItem);
          this.index = Math.floor(Math.random() * (this.menuItems.length));
          this.dailySpecials.push(this.menuItems[this.index].name as string);
        }));
      });
    }
  }
}
