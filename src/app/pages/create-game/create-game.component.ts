import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
import { UtilsService } from '../../services/utils.service';
import { MessageService } from 'primeng/api';

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
  public selectedCorrectAnswers: any;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private questionService: QuestionService,
    private answerService: AnswerService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private utilsService: UtilsService,
    private messageService: MessageService
  ) { 

    this.formCustom = new FormGroup({});
    this.createForm();
    this.status = '';
    this.alertMessage = '';
    this.category = new Category();
    this.questionsIDs = [];
    this.selectedCorrectAnswers = {
      question1: null,
      question2: null,
      question3: null,
      question4: null,
      question5: null
    }
  }

  ngOnInit() {
  }

  /**
   * Creates the form to create new game
   */
  createForm() {
    this.formCustom = this.fb.group({
      categoryName:         ['',  [Validators.required, Validators.minLength(8)]],
      categoryDescription:  ['',  [Validators.required]],

      question1:  ['',  [Validators.required, Validators.minLength(8)]],
      question2:  ['',  [Validators.required, Validators.minLength(8)]],
      question3:  ['',  [Validators.required, Validators.minLength(8)]],
      question4:  ['',  [Validators.required, Validators.minLength(8)]],
      question5:  ['',  [Validators.required, Validators.minLength(8)]],

      question1Answers: this.fb.group({
        answer1: ['', [Validators.required, Validators.minLength(8)]],
        answer2: ['', [Validators.required, Validators.minLength(8)]],
        answer3: ['', [Validators.required, Validators.minLength(8)]],
        answer4: ['', [Validators.required, Validators.minLength(8)]],
      }),
      question2Answers: this.fb.group({
        answer1: ['', [Validators.required, Validators.minLength(8)]],
        answer2: ['', [Validators.required, Validators.minLength(8)]],
        answer3: ['', [Validators.required, Validators.minLength(8)]],
        answer4: ['', [Validators.required, Validators.minLength(8)]],
      }),
      question3Answers: this.fb.group({
        answer1: ['', [Validators.required, Validators.minLength(8)]],
        answer2: ['', [Validators.required, Validators.minLength(8)]],
        answer3: ['', [Validators.required, Validators.minLength(8)]],
        answer4: ['', [Validators.required, Validators.minLength(8)]],
      }),
      question4Answers: this.fb.group({
        answer1: ['', [Validators.required, Validators.minLength(8)]],
        answer2: ['', [Validators.required, Validators.minLength(8)]],
        answer3: ['', [Validators.required, Validators.minLength(8)]],
        answer4: ['', [Validators.required, Validators.minLength(8)]],
      }),
      question5Answers: this.fb.group({
        answer1: ['', [Validators.required, Validators.minLength(8)]],
        answer2: ['', [Validators.required, Validators.minLength(8)]],
        answer3: ['', [Validators.required, Validators.minLength(8)]],
        answer4: ['', [Validators.required, Validators.minLength(8)]],
      }),

    });
  }

  /**
   * This method will publish and save the complete category
   */
  async onSubmit() {
    // Don't submit if the form is invalid and if there is one not selected correct answer
    if(this.formCustom.invalid || Object.values(this.selectedCorrectAnswers).includes(null)) {
      this.utilsService.showToastMessage('createGameToast', 'error', 'Error create game', 'You must fill all the required inputs.', this.messageService);
      return;
    }

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
      this.utilsService.showToastMessage('createGameToast', 'error', 'Error create category', this.alertMessage, this.messageService);
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
            this.saveAnswers(question1AnswersValues, createQuestion, 1);      
          break;
        
          case 1:
            this.saveAnswers(question2AnswersValues, createQuestion, 2);
          break;

          case 2:
            this.saveAnswers(question3AnswersValues, createQuestion, 3);
          break;

          case 3:
            this.saveAnswers(question4AnswersValues, createQuestion, 4);        
          break;

          case 4:
            this.saveAnswers(question5AnswersValues, createQuestion, 5);
          break;
        }
      

      } catch (error) {
        console.log(error);
        this.utilsService.showToastMessage('createGameToast', 'error', 'Error create question', 'Something went wrong creating the question.', this.messageService);
        this.spinner.hide();
        return;
      }
    });
  
    this.spinner.hide();
    this.formCustom.reset();
    this.router.navigate(['/home'], {state: {categoryCreated: true}});
  
  }

  /**
   * This methos will upload the answers
   * @param answerValues 
   * @param questionNumber 
   */
  saveAnswers(answerValues: string[], question: Question, questionNumber: number) {
    answerValues.forEach(async (answerContent, index) => {
      try {
        let answer: Answer = await this.createAnswer(answerContent, question._id!);
        this.mappCorrectAnswer(questionNumber, index, answer, question);

      } catch(error) {
        this.spinner.hide();
        this.utilsService.showToastMessage('createGameToast', 'error', 'Error create answer', 'Something went wrong creating the answer.', this.messageService);
        console.log(error);

      }
    });
  }

  /**
   *
   * @param letter 
   */
  async mappCorrectAnswer(questionNumber: number, iteratorAnswers: number, answer: Answer, question: Question) {
    switch(questionNumber) {
      case 1:
        // For question 1
        if (iteratorAnswers === this.selectedCorrectAnswers.question1) {
          let correctAnswerId = answer._id;
          await this.assignCorrectAnswer(question._id!, correctAnswerId);
        }
      break;
      case 2:
        // For question 2
        if (iteratorAnswers === this.selectedCorrectAnswers.question2) {
          let correctAnswerId = answer._id;
          await this.assignCorrectAnswer(question._id!, correctAnswerId);
        }
      break;
      case 3:
        // For question 3
        if (iteratorAnswers === this.selectedCorrectAnswers.question3) {
          let correctAnswerId = answer._id;
          await this.assignCorrectAnswer(question._id!, correctAnswerId);
        }
      break;
      case 4:
        // For question 4
        if (iteratorAnswers === this.selectedCorrectAnswers.question4) {
          let correctAnswerId = answer._id;
          await this.assignCorrectAnswer(question._id!, correctAnswerId);
        }
      break;
      case 5:
        // For question 5
        if (iteratorAnswers === this.selectedCorrectAnswers.question5) {
          let correctAnswerId = answer._id;
          await this.assignCorrectAnswer(question._id!, correctAnswerId);
        }
      break;
    }
  }

  /**
   * This method will save the correct answer
   * @param questionNumber 
   * @param letter 
   */
  selectCorrectAnswer(questionNumber: number, answerPosition: number) {
    switch(questionNumber) {
      case 1:
        this.selectedCorrectAnswers.question1 = answerPosition;
      break;
      case 2:
        this.selectedCorrectAnswers.question2 = answerPosition;
      break;
      case 3:
        this.selectedCorrectAnswers.question3 = answerPosition;
      break;
      case 4:
        this.selectedCorrectAnswers.question4 = answerPosition;
      break;
      case 5:
        this.selectedCorrectAnswers.question5 = answerPosition;
      break;
    }
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
      this.answerService.createAnswer(answer).subscribe(resp => {
        resolve(resp.answer);
      }, error => {
        reject(error);
      });
    });
  }

  /**
   * This method will assign the correct answer to a question
   * @param questionId 
   * @param answerId 
   * @returns 
   */
  private async assignCorrectAnswer(questionId: string, answerId: string): Promise<Question> {
    return new Promise((resolve, reject) => {
      this.questionService.assignCorrectAnswer(questionId, answerId).subscribe(question => {
        resolve(question);
      }, error => {
        console.log(error);
        reject(error);
      });
    });
  }

}
