import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsSectionComponent } from './experts-section.component';

describe('ExpertsSectionComponent', () => {
  let component: ExpertsSectionComponent;
  let fixture: ComponentFixture<ExpertsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
