import { Injectable } from '@angular/core';
import { MenuCategory } from './Model/menu-category';
import { MenuItem } from './Model/menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuCategories:MenuCategory[] = []
  activeCategory:MenuCategory = new MenuCategory('','','');

  indexOfCategory:number = 0;

  menuItems:MenuItem[]=[];
  activeMenuItem:MenuItem = new MenuItem('','','');
  IndexOfMenuItem:number = 0;

  constructor() { }
}
