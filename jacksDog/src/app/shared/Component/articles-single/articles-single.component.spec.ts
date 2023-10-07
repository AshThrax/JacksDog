import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesSingleComponent } from './articles-single.component';

describe('ArticlesSingleComponent', () => {
  let component: ArticlesSingleComponent;
  let fixture: ComponentFixture<ArticlesSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlesSingleComponent]
    });
    fixture = TestBed.createComponent(ArticlesSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
