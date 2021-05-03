import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemCardEditComponent } from './menu-item-card-edit.component';

describe('MenuItemCardEditComponent', () => {
  let component: MenuItemCardEditComponent;
  let fixture: ComponentFixture<MenuItemCardEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemCardEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemCardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
