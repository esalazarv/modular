import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideViewWrapperComponent } from './slide-view-wrapper.component';

describe('SlideViewWrapperComponent', () => {
  let component: SlideViewWrapperComponent;
  let fixture: ComponentFixture<SlideViewWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideViewWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideViewWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
