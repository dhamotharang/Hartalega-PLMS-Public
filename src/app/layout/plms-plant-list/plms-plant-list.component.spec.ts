import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PLMSPlantListComponent } from './plms-plant-list.component';

describe('PLMSPlantListComponent', () => {
  let component: PLMSPlantListComponent;
  let fixture: ComponentFixture<PLMSPlantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PLMSPlantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PLMSPlantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
