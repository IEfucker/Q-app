/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QSlideComponent } from './q-slide.component';

describe('QSlideComponent', () => {
  let component: QSlideComponent;
  let fixture: ComponentFixture<QSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
