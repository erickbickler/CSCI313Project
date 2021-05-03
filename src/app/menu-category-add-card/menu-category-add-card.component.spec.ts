import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCategoryAddCardComponent } from './menu-category-add-card.component';

describe('MenuCategoryAddCardComponent', () => {
  let component: MenuCategoryAddCardComponent;
  let fixture: ComponentFixture<MenuCategoryAddCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCategoryAddCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCategoryAddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
