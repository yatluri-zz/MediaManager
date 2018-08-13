import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgSliderComponent } from '@admin/components/img-slider/img-slider.component';

describe('ImgSliderComponent', () => {
  let component: ImgSliderComponent;
  let fixture: ComponentFixture<ImgSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImgSliderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
