import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMeButtonComponent } from './contact-me-button.component';

describe('ContactMeButtonComponent', () => {
  let component: ContactMeButtonComponent;
  let fixture: ComponentFixture<ContactMeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactMeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactMeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
