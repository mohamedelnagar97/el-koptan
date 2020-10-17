import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorePropertyComponent } from './more-property.component';

describe('MorePropertyComponent', () => {
  let component: MorePropertyComponent;
  let fixture: ComponentFixture<MorePropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorePropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
