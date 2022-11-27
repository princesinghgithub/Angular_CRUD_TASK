import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBoardComponent } from './d-board.component';

describe('DBoardComponent', () => {
  let component: DBoardComponent;
  let fixture: ComponentFixture<DBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
