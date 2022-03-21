import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IGameQuestion } from './game.interface';
// import questions from '../../assets/questions.json';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: [],
})
export class GameComponent implements OnInit {
  questions: IGameQuestion[] = [];
  questionIdx: number = 0;
  answeredQuestions: number[] = []; // we stock this, but won't use it. It will be useful in case we add some kind of tracking, that allows us to see what questions have been answered correctly the most, etc...

  get answered() {
    return this.answeredQuestions.length - 1 === this.questionIdx;
  }

  get currentQuestion(): IGameQuestion {
    return this.questions[this.questionIdx];
  }

  get correctAnswer() {
    return this.currentQuestion.answers[this.currentQuestion.correctAnswer];
  }

  get isLastQuestion(): boolean {
    return this.questionIdx === this.questions.length - 1;
  }

  onAnswer(answer: string): void {
    if (!this.answered) {
      const answerIdx =
        this.questions[this.questionIdx].answers.indexOf(answer);
      this.answeredQuestions.push(answerIdx);
    }
  }

  onNextQuestion(): void {
    this.questionIdx++;
  }

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<IGameQuestion[]>('assets/questions.json')
      .subscribe((data) => {
        this.questions = data;
      });
  }
  ngOnInit(): void {}
}
