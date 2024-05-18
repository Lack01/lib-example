import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLibmodalComponent } from './ngx-libmodal.component';

describe('NgxLibmodalComponent', () => {
  let component: NgxLibmodalComponent;
  let fixture: ComponentFixture<NgxLibmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxLibmodalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxLibmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
