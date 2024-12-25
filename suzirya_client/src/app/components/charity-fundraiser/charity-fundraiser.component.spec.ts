import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityFundraiserComponent } from './charity-fundraiser.component';

describe('CharityFundraiserComponent', () => {
  let component: CharityFundraiserComponent;
  let fixture: ComponentFixture<CharityFundraiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharityFundraiserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharityFundraiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
