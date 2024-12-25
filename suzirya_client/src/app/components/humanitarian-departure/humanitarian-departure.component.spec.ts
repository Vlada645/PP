import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanitarianDepartureComponent } from './humanitarian-departure.component';

describe('HumanitarianDepartureComponent', () => {
  let component: HumanitarianDepartureComponent;
  let fixture: ComponentFixture<HumanitarianDepartureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HumanitarianDepartureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HumanitarianDepartureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
