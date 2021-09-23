import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {

  public formCustom: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { 

    this.formCustom = new FormGroup({});
    this.createForm();
    this.loadDataForm();

  }

  /**
   * Get all questions from the form
   */
  get questionsForm() {
    return this.formCustom.get('questions') as FormArray;
  }





  ngOnInit(): void {
    console.log(this.questionsForm);
  }

  /**
    * Creates the form to create new game
    */
  createForm() {
    this.formCustom = this.fb.group({
      categoryName: ['',  [Validators.required]],
      categoryDescription:    ['',  [Validators.required]],
      password: ['',  [Validators.required]],
      repeatPassword: ['', [Validators.required]],
      questions: this.fb.array([]),
    });
  }

  /**
   * Load initial data with questions
   */
  loadDataForm() {
    ['question1','question2','question3'].forEach(value => this.questionsForm.push( this.fb.control(value) ));
  }

  /**
   * Add question to the form
   */
  addQuestion() {
    this.questionsForm.push(this.fb.control('',Validators.required));
  }

  /**
   * Remove question from the form
   * @param i 
   */
  removeQuestion(i: number) {
    this.questionsForm.removeAt(i);
  }





}
