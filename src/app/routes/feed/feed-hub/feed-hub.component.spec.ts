import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedHubComponent } from './feed-hub.component';

describe('FeedHubComponent', () => {
  let component: FeedHubComponent;
  let fixture: ComponentFixture<FeedHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
