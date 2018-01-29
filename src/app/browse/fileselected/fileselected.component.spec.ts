import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileselectedComponent } from './fileselected.component';

describe('FileselectedComponent', () => {
  let component: FileselectedComponent;
  let fixture: ComponentFixture<FileselectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileselectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileselectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
