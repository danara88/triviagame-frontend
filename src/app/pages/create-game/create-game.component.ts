import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { CreateNewCategory } from '../../interfaces/category';
import { CategoryService } from '../../services/category.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CreateNewQuestion } from '../../interfaces/question';
import { QuestionService } from '../../services/question.service';
import { Question } from 'src/app/models/question.model';
import { AnswerService } from '../../services/answer.service';
import { CreateAnswer } from '../../interfaces/answer';
import { Answer } from 'src/app/models/answer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {

  public formCustom: FormGroup;
  public status: string;
  public alertMessage: string;
  public category: Category;
  public questionsIDs: string[];

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private questionService: QuestionService,
    private answerService: AnswerService,
    private router: Router,
    private spinner: NgxSpinnerService,
  ) { 

    this.formCustom = new FormGroup({});
    this.createForm();
    this.status = '';
    this.alertMessage = '';
    this.category = new Category();
    this.questionsIDs = [];
  }

  ngOnInit() {
  }

  /**
   * Creates the form to create new game
   */
  createForm() {
    this.formCustom = this.fb.group({
      categoryName:         ['',  [Validators.required]],
      categoryDescription:  ['',  [Validators.required]],

      question1:  ['',  [Validators.required]],
      question2:  ['',  [Validators.required]],
      question3:  ['',  [Validators.required]],
      question4:  ['',  [Validators.required]],
      question5:  ['',  [Validators.required]],

      question1Answers: this.fb.group({
        answer1: ['', [Validators.required]],
        answer2: ['', [Validators.required]],
        answer3: ['', [Validators.required]],
        answer4: ['', [Validators.required]],
      }),
      question2Answers: this.fb.group({
        answer1: ['', [Validators.required]],
        answer2: ['', [Validators.required]],
        answer3: ['', [Validators.required]],
        answer4: ['', [Validators.required]],
      }),
      question3Answers: this.fb.group({
        answer1: ['', [Validators.required]],
        answer2: ['', [Validators.required]],
        answer3: ['', [Validators.required]],
        answer4: ['', [Validators.required]],
      }),
      question4Answers: this.fb.group({
        answer1: ['', [Validators.required]],
        answer2: ['', [Validators.required]],
        answer3: ['', [Validators.required]],
        answer4: ['', [Validators.required]],
      }),
      question5Answers: this.fb.group({
        answer1: ['', [Validators.required]],
        answer2: ['', [Validators.required]],
        answer3: ['', [Validators.required]],
        answer4: ['', [Validators.required]],
      }),

    });
  }

  /**
   * This method will publish and save the complete category
   */
  async onSubmit() {
    if(this.formCustom.invalid) return;

    this.spinner.show();

    // -- CREATES CATEGORY
    const category: CreateNewCategory = {
      name: this.formCustom.controls.categoryName.value,
      description: this.formCustom.controls.categoryDescription.value
    }

    try {
      this.category = await this.createCategory(category);
    
    } catch(error) {
      this.spinner.hide();
      this.status = 'error';
      this.alertMessage = 'Error, something went wrong';
      console.log(error);
      return;
    }

    // -- CREATE QUESTIONS AND ANSWERS
    let questionsContent: string[] = [
      this.formCustom.controls.question1.value,
      this.formCustom.controls.question2.value,
      this.formCustom.controls.question3.value,
      this.formCustom.controls.question4.value,
      this.formCustom.controls.question5.value,
    ];

    let question1AnswersValues: string[] = Object.values(this.formCustom.controls.question1Answers.value);
    let question2AnswersValues: string[] = Object.values(this.formCustom.controls.question2Answers.value);
    let question3AnswersValues: string[] = Object.values(this.formCustom.controls.question3Answers.value);
    let question4AnswersValues: string[] = Object.values(this.formCustom.controls.question4Answers.value);
    let question5AnswersValues: string[] = Object.values(this.formCustom.controls.question5Answers.value);

    questionsContent.forEach(async (question, i: Number) => {
      try {
        let createQuestion: Question = await this.createQuestion(question, this.category._id!, 10);

        switch(i) {
          case 0:
            this.saveAnswers(question1AnswersValues, createQuestion);      
          break;
        
          case 1:
            this.saveAnswers(question2AnswersValues, createQuestion);
          break;

          case 2:
            this.saveAnswers(question3AnswersValues, createQuestion);
          break;

          case 3:
            this.saveAnswers(question4AnswersValues, createQuestion);        
          break;

          case 4:
            this.saveAnswers(question5AnswersValues, createQuestion);
          break;
        }
      

      } catch (error) {
        console.log(error);
        this.spinner.hide();
        return;
      }
    });
  
    this.spinner.hide();
    this.formCustom.reset();
    this.router.navigateByUrl('/home');
  
  }

  /**
   * This methos will upload the answers
   * @param answerValues 
   * @param questionNumber 
   */
  saveAnswers(answerValues: string[], question: Question) {
    answerValues.forEach(async (answerContent) => {
      try {
        await this.createAnswer(answerContent, question._id!);
      } catch(error) {
        this.spinner.hide();
        console.log(error);
      }
    });
  }

  /**
   * This method will create the new category in the backend
   * @param category 
   * @returns 
   */
  private async createCategory(category: CreateNewCategory): Promise<Category> {
    return new Promise((resolve, reject) => {
      this.categoryService.createCategory(category).subscribe(category => {
        resolve(category);
      }, error => {
        reject(error);
      });
    });
  }

  /**
   * This method will create a question
   * @param questionContent 
   * @param categoryId 
   * @param score 
   * @returns 
   */
  private async createQuestion(questionContent: string, categoryId: string, score: number): Promise<Question> {
    let question: CreateNewQuestion = {
      sentence: questionContent,
      category: categoryId,
      score
    };

    return new Promise((resolve, reject) => {
      this.questionService.createQuestion(question).subscribe(question => {
        resolve(question);
      }, error => {
        reject(error);
      });
    });
  }

  /**
   * This method will create an answer
   * @param content 
   * @param questionId 
   * @returns 
   */
  private async createAnswer(content: string, questionId: string): Promise<Answer> {
    let answer: CreateAnswer = {
      content,
      question: questionId
    };

    return new Promise((resolve, reject) => {
      this.answerService.createAnswer(answer).subscribe(answer => {
        resolve(answer);
      }, error => {
        reject(error);
      });
    });
  }

}
