import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamworksComponent } from './teamworks.component';

describe('TeamworksComponent', () => {
  let component: TeamworksComponent;
  let fixture: ComponentFixture<TeamworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
