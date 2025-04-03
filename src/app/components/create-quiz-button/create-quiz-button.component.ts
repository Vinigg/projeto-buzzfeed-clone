import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-quiz-button',
  imports: [],
  templateUrl: './create-quiz-button.component.html',
  styleUrl: './create-quiz-button.component.css'
})
export class CreateQuizButtonComponent {

  constructor(private router:Router){

  }

  redirectToCreateQuiz(){
    console.log("click ativado")
    this.router.navigate(['/create']);
  }
}
