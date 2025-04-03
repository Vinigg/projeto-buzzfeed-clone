import { Component } from '@angular/core';
import { CreateQuizComponent } from "../create-quiz/create-quiz.component";

@Component({
  selector: 'app-create',
  imports: [CreateQuizComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

}
