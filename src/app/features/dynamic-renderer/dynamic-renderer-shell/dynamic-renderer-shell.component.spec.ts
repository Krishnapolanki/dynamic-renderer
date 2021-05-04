import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRendererShellComponent } from './dynamic-renderer-shell.component';

describe('DynamicRendererShellComponent', () => {
  let component: DynamicRendererShellComponent;
  let fixture: ComponentFixture<DynamicRendererShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicRendererShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicRendererShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
