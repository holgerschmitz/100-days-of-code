import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinhexComponent } from './binhex.component';

describe('BinhexComponent', () => {
  let component: BinhexComponent;
  let fixture: ComponentFixture<BinhexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinhexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinhexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
