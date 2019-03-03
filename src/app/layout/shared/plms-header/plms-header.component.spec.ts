import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PLMSHeaderComponent } from './plms-header.component';

describe('PLMSHeaderComponent', () => {
  let component: PLMSHeaderComponent;
  let fixture: ComponentFixture<PLMSHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PLMSHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PLMSHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
