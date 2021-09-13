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
  public totalScore: number;
  public score: number;
  public submittedGame: boolean;
  public grade: number;

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
    this.totalScore = 0;
    this.score = 0;
    this.submittedGame = false;
    this.grade = 0;

  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.categoryID = params.categoryID;
      this.createGame();
      this.getGameQuestions();
    });
  }

  /**
   * Get total score
   * @param questions
   * @returns 
   */
  private getTotalScore(questions: Question[]): number {
    let sum = 0;
    questions.forEach(question => sum = sum + question.score!);

    return sum;
  }

  /**
   * This method will creates the game
   */
  createGame() {
    this.spinner.show();

    this.gameService.createGame(this.categoryID).subscribe(game => {
      this.game = game;
      this.spinner.hide();

    }, error => {
      console.log(error);
      this.spinner.hide();
      this.router.navigateByUrl('/home');
    });
  }

  /**
   * Get all the game questions
   */
  getGameQuestions() {
    this.questionService.getQuestionsByCategory(this.categoryID).subscribe(resp => {
      this.questions = resp.questions;
      this.totalScore = this.getTotalScore(this.questions);

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

  /**
   * This method will submit the game
   */
  finishGame() {
    this.questions.forEach(question => {
      if (question.correctAnswer === question.selectedOption?._id && !this.submittedGame) {
        this.score = this.score + question.score!;
      }
    });
    this.grade = (this.score / this.totalScore) * 100;
    this.submittedGame = true;

    this.endGame();
  }

  /**
   * Finish game
   */
  endGame() {
    this.spinner.show();
    this.gameService.endGame(this.game._id!, this.score).subscribe(game => {
      this.spinner.hide();
      this.game = game;
      
    }, error => {
      this.spinner.hide();
      console.log(error);

    });
  }

}
