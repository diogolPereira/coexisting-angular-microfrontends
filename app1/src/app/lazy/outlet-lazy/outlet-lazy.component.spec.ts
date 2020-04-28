/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OutletLazyComponent } from './outlet-lazy.component';

describe('OutletLazyComponent', () => {
  let component: OutletLazyComponent;
  let fixture: ComponentFixture<OutletLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
