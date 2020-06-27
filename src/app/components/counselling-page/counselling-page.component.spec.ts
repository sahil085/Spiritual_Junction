import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounsellingPageComponent } from './counselling-page.component';

describe('CounsellingPageComponent', () => {
  let component: CounsellingPageComponent;
  let fixture: ComponentFixture<CounsellingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounsellingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounsellingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
