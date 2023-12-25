import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawlComponent } from './crawl.component';

describe('CrawlComponent', () => {
  let component: CrawlComponent;
  let fixture: ComponentFixture<CrawlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrawlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrawlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
