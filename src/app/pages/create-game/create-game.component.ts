import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { CreateNewCategory } from '../../interfaces/category';
import { CategoryService } from '../../services/category.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CreateNewQuestion } from '../../interfaces/question';
import { QuestionService } from '../../services/question.service';
import { Question } from 'src/app/models/question.model';

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

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private questionService: QuestionService,
    private spinner: NgxSpinnerService,
  ) { 

    this.formCustom = new FormGroup({});
    this.createForm();
    this.status = '';
    this.alertMessage = '';
    this.category = new Category();
  }

  ngOnInit() {
    this.loadData();
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

      question1Answers: this.fb.array([]),
      question2Answers: [[], [Validators.required]],
      question3Answers: [[], [Validators.required]],
      question4Answers: [[], [Validators.required]],
      question5Answers: [[], [Validators.required]],

    });
  }

  get question1Answers() {
    return this.formCustom.get('question1Answers') as FormArray;
  }

  loadData() {
    ['answer1', 'answer2', 'answer3', 'answer4'].forEach(value => this.question1Answers.push(this.fb.control(value)));
  }

  /**
   * This method will publish and save the complete category
   */
  async onSubmit() {
    if(this.formCustom.invalid) {
      console.log(this.formCustom.controls.question1Answers);
      return;
    }
    this.spinner.show();

    // Create the category
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

    // Create questions
    let questionsContent: string[] = [
      this.formCustom.controls.question1.value,
      this.formCustom.controls.question2.value,
      this.formCustom.controls.question3.value,
      this.formCustom.controls.question4.value,
      this.formCustom.controls.question5.value,
    ];

    questionsContent.forEach(async (question) => {
      try {
        let createQuestion: Question = await this.createQuestion(question, this.category._id!, 10);
        console.log(createQuestion);
      } catch (error) {
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
    }
    return new Promise((resolve, reject) => {
      this.questionService.createQuestion(question).subscribe(question => {
        resolve(question);
      }, error => {
        reject(error);
      });
    });
  }



}
