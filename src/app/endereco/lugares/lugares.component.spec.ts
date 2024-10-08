import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugaresComponent } from './lugares.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

describe('LugaresComponent', () => {
  let component: LugaresComponent;
  let fixture: ComponentFixture<LugaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LugaresComponent ],
      imports: [HttpClientTestingModule,  RouterModule.forRoot([]), ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LugaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
