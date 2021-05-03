import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemDescriptionPageComponent } from './menu-item-description-page.component';

describe('MenuItemDescriptionPageComponent', () => {
  let component: MenuItemDescriptionPageComponent;
  let fixture: ComponentFixture<MenuItemDescriptionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemDescriptionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemDescriptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
