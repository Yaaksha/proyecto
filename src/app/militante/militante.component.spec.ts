import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitanteComponent } from './militante.component';

describe('MilitanteComponent', () => {
  let component: MilitanteComponent;
  let fixture: ComponentFixture<MilitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilitanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
