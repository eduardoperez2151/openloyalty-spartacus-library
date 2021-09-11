import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenloyaltySpartacusComponent } from './openloyalty-spartacus.component';

describe('OpenloyaltySpartacusComponent', () => {
  let component: OpenloyaltySpartacusComponent;
  let fixture: ComponentFixture<OpenloyaltySpartacusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenloyaltySpartacusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenloyaltySpartacusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
