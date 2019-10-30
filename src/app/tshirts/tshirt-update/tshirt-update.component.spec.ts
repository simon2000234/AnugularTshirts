import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TshirtUpdateComponent } from './tshirt-update.component';

describe('TshirtUpdateComponent', () => {
  let component: TshirtUpdateComponent;
  let fixture: ComponentFixture<TshirtUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TshirtUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TshirtUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
