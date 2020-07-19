import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrilaPrabhupadaPageComponent } from './srila-prabhupada-page.component';

describe('SrilaPrabhupadaPageComponent', () => {
  let component: SrilaPrabhupadaPageComponent;
  let fixture: ComponentFixture<SrilaPrabhupadaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrilaPrabhupadaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrilaPrabhupadaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
