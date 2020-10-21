import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSideBarComponent } from './details-side-bar.component';

describe('DetailsSideBarComponent', () => {
  let component: DetailsSideBarComponent;
  let fixture: ComponentFixture<DetailsSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
