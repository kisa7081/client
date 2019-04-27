import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConversionComponent } from './create-conversion.component';

describe('CreateConversionComponent', () => {
  let component: CreateConversionComponent;
  let fixture: ComponentFixture<CreateConversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateConversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
