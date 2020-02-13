import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatCardListComponent } from './cat-card-list.component';

describe('CatCardListComponent', () => {
  let component: CatCardListComponent;
  let fixture: ComponentFixture<CatCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
