import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCategoryCardComponent } from './menu-category-card.component';

describe('MenuCategoryCardComponent', () => {
  let component: MenuCategoryCardComponent;
  let fixture: ComponentFixture<MenuCategoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCategoryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
