import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeApplicantsComponent } from './see-applicants.component';

describe('SeeApplicantsComponent', () => {
  let component: SeeApplicantsComponent;
  let fixture: ComponentFixture<SeeApplicantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeApplicantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
