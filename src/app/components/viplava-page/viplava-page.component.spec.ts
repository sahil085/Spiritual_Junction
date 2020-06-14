import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViplavaPageComponent } from './viplava-page.component';

describe('ViplavaPageComponent', () => {
  let component: ViplavaPageComponent;
  let fixture: ComponentFixture<ViplavaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViplavaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViplavaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
