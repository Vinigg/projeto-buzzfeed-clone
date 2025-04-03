// create-quiz.component.ts
import { NgFor, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  imports:[ReactiveFormsModule, NgIf, NgFor,NgForOf],
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent {
  quizForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.quizForm = this.fb.group({
      title: ['', Validators.required],
      resultA: ['', Validators.required],
      resultB: ['', Validators.required],
      questions: this.fb.array([this.createQuestion()])
    });
  }

  createQuestion(): FormGroup {
    return this.fb.group({
      questionText: ['', Validators.required],
      options: this.fb.array([this.createOption(), this.createOption()])
    });
  }

  createOption(): FormGroup {
    return this.fb.group({
      optionText: ['', Validators.required],
      alias: ['', Validators.required]
    });
  }

  get questions(): FormArray {
    return this.quizForm.get('questions') as FormArray;
  }

  getOptions(questionIndex: number): FormArray {
    return this.questions.at(questionIndex).get('options') as FormArray;
  }

  addQuestion(): void {
    this.questions.push(this.createQuestion());
  }

  removeQuestion(index: number): void {
    this.questions.removeAt(index);
  }

  addOption(questionIndex: number): void {
    this.getOptions(questionIndex).push(this.createOption());
  }

  removeOption(questionIndex: number, optionIndex: number): void {
    this.getOptions(questionIndex).removeAt(optionIndex);
  }

  generateJson(): any {
    const formValue = this.quizForm.value;

    const quizJson = {
      title: formValue.title,
      questions: formValue.questions.map((q: any, qIndex: number) => ({
        id: qIndex + 1,
        question: q.questionText,
        options: q.options.map((o: any, oIndex: number) => ({
          id: oIndex + 1,
          name: o.optionText,
          alias: o.alias
        }))
      })), // <-- Faltava este parêntese para fechar o array de questions
      results: {
        A: formValue.resultA,
        B: formValue.resultB
      }
    };

    return quizJson;
  }

  downloadJson(): void {
    const quizJson = this.generateJson();
    const dataStr = JSON.stringify(quizJson, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    const exportFileDefaultName = 'quiz.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }

  onSubmit(): void {
    if (this.quizForm.valid) {
      this.downloadJson();
    } else {
      // Marcar todos os campos como tocados para mostrar erros
      this.markFormGroupTouched(this.quizForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup | FormArray) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup || control instanceof FormArray) {
        this.markFormGroupTouched(control);
      }
    });
  }

  goBack(){
    this.router.navigate(['/home'])
  }
}
