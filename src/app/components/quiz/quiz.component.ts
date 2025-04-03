import { Component, OnInit } from '@angular/core';
import quizz_questions from "../../../assets/data/quizz_questions.json"
import { NgFor, NgIf } from '@angular/common';
import { CreateQuizButtonComponent } from "../create-quiz-button/create-quiz-button.component";

@Component({
  selector: 'app-quiz',
  imports: [NgIf, NgFor, CreateQuizButtonComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit{

  title:string = ""

  questions:any
  questionSelected:any

  answers:string[] = []
  answerSelected:string= ""

  questionIndex:number = 0
  questionMaxIndex:number = 0

  finished:boolean = true
  constructor(){ }
  ngOnInit(): void {
    if(quizz_questions){
      this.finished = false;
      this.title = quizz_questions.title;

      this.questions = quizz_questions.questions
      this.questionSelected = this.questions[this.questionIndex]

      this.questionIndex = 0
      this.questionMaxIndex = this.questions.length

      console.log(this.questionIndex)
      console.log(this.questionMaxIndex)

    }
  }

  playerChoose(value:string){
    this.answers.push(value)
    this.nextStep()
    console.log(this.answers)
  }

  async nextStep(){
    this.questionIndex += 1;

    if(this.questionMaxIndex > this.questionIndex)
    {
      this.questionSelected = this.questions[this.questionIndex]
    }else{
      const finalAnswer:string = await this.checkResult(this.answers)
      this.finished = true;
      this.answerSelected = quizz_questions.results[finalAnswer as keyof typeof quizz_questions.results]
    }
  }

  async checkResult(answers:string[]){
    ['A','B','A','B','A']
    const result = answers.reduce((previous,current,i,arr)=>{
      if(
        arr.filter(item => item === previous).length >
        arr.filter(item => item === current).length
      ){
        return previous
      }else{
        return current
      }
    })

    return result
  }
}


