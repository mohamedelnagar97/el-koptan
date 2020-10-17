import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpPropertyComponent } from './imp-property.component';

describe('ImpPropertyComponent', () => {
  let component: ImpPropertyComponent;
  let fixture: ComponentFixture<ImpPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
