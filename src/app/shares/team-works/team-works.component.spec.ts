import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamWorksComponent } from './team-works.component';

describe('TeamWorksComponent', () => {
  let component: TeamWorksComponent;
  let fixture: ComponentFixture<TeamWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
