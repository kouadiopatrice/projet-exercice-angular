import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSunnyComponent } from './nav-bar-sunny.component';

describe('NavBarSunnyComponent', () => {
  let component: NavBarSunnyComponent;
  let fixture: ComponentFixture<NavBarSunnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarSunnyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarSunnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
