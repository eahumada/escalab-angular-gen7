import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NopagefoundComponent } from './nopagefound.component';

describe('PagenotfoundComponent', () => {
  let component: NopagefoundComponent;
  let fixture: ComponentFixture<NopagefoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NopagefoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NopagefoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
