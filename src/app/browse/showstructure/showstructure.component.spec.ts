import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowstructureComponent } from './showstructure.component';

describe('ShowstructureComponent', () => {
  let component: ShowstructureComponent;
  let fixture: ComponentFixture<ShowstructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowstructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
