import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Question } from 'src/app/models/question.model';
import { QuestionService } from '../../services/question.service';
import { Answer } from 'src/app/models/answer.model';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public numberQuestion: number;
  public categoryID: string;
  public questions: Question[];
  public activeQuestion: Question;
  public game: Game;
  public totalQuestions: number;
  public answeredQuestions: number;
  public options: any[];

  constructor(
    private gameService: GameService,
    private questionService: QuestionService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,
  ) { 

    this.numberQuestion = 1;
    this.categoryID = '';
    this.questions = [];
    this.options = [];
    this.game = new Game();
    this.activeQuestion = new Question();
    this.totalQuestions = 1;
    this.answeredQuestions = 0;

  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.categoryID = params.categoryID;
      // this.createGame();
      this.getGameQuestions();
    });
  }

  /**
   * This method will creates the game
   */
  createGame() {
    this.gameService.createGame(this.categoryID).subscribe(game => {
      console.log(game);
      this.game = game;
    }, error => {
      console.log(error);
      this.router.navigateByUrl('/home');
    });
  }

  /**
   * Get all the game questions
   */
  getGameQuestions() {
    this.questionService.getQuestionsByCategory(this.categoryID).subscribe(resp => {
      this.questions = resp.questions;
      if (this.questions.length === 0) this.router.navigateByUrl('/home');
      this.totalQuestions = resp.total;
      
      // Begin from the fisrt question
      this.activeQuestion = this.questions[this.numberQuestion - 1];
      this.options = this.activeQuestion.options || [];

    }, error => {
      console.log(error);
      this.router.navigateByUrl('/home');
    });
  } 

  /**
   * Go to the next question
   */
  nextQuestion() {
    if (this.numberQuestion <= this.totalQuestions) {
      this.numberQuestion++;
      this.activeQuestion = this.questions[this.numberQuestion - 1];
      this.options = this.activeQuestion.options || [];
    }
  }

  /**
   * Go to the previuous question
   */
  prevQuestion() {
    if (this.numberQuestion !== 1) {
      this.numberQuestion--;
      this.activeQuestion = this.questions[this.numberQuestion - 1];
      this.options = this.activeQuestion.options || [];
    }
  }

  /**
   * Select an answer
   * @param optionSelected 
   */
  selectedOption(optionSelected: Answer) {
    let index = this.questions.indexOf(this.activeQuestion);
    this.questions[index].selectedOption = optionSelected;
    this.answeredQuestions = (this.questions.filter(question => question.selectedOption)).length;
  }

}
