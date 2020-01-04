import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoyYOComponent } from './soy-yo.component';

describe('SoyYOComponent', () => {
  let component: SoyYOComponent;
  let fixture: ComponentFixture<SoyYOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoyYOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoyYOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
