import { Component } from '@angular/core';
import { QuizComponent } from "../quiz/quiz.component";

@Component({
  selector: 'app-home',
  imports: [QuizComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
