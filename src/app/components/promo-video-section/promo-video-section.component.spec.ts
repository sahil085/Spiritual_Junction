import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoVideoSectionComponent } from './promo-video-section.component';

describe('PromoVideoSectionComponent', () => {
  let component: PromoVideoSectionComponent;
  let fixture: ComponentFixture<PromoVideoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoVideoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoVideoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
