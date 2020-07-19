import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampsPageComponent } from './camps-page.component';

describe('CampsPageComponent', () => {
  let component: CampsPageComponent;
  let fixture: ComponentFixture<CampsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
