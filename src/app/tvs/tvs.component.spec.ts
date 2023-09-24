import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvsComponent } from './tvs.component';

describe('TvsComponent', () => {
  let component: TvsComponent;
  let fixture: ComponentFixture<TvsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvsComponent]
    });
    fixture = TestBed.createComponent(TvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
