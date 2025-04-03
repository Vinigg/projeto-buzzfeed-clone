import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuizButtonComponent } from './create-quiz-button.component';

describe('CreateQuizButtonComponent', () => {
  let component: CreateQuizButtonComponent;
  let fixture: ComponentFixture<CreateQuizButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateQuizButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateQuizButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
