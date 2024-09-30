import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubServiceDeatailsComponent } from './sub-service-deatails.component';

describe('SubServiceDeatailsComponent', () => {
  let component: SubServiceDeatailsComponent;
  let fixture: ComponentFixture<SubServiceDeatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubServiceDeatailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubServiceDeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
