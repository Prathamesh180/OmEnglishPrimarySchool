import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsNoticesComponent } from './events-notices.component';

describe('EventsNoticesComponent', () => {
  let component: EventsNoticesComponent;
  let fixture: ComponentFixture<EventsNoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsNoticesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
