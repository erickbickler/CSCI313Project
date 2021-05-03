import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemCardAddComponent } from './menu-item-card-add.component';

describe('MenuItemCardAddComponent', () => {
  let component: MenuItemCardAddComponent;
  let fixture: ComponentFixture<MenuItemCardAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemCardAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemCardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
