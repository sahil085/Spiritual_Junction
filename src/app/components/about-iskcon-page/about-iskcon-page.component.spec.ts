import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIskconPageComponent } from './about-iskcon-page.component';

describe('AboutIskconPageComponent', () => {
  let component: AboutIskconPageComponent;
  let fixture: ComponentFixture<AboutIskconPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutIskconPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutIskconPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
