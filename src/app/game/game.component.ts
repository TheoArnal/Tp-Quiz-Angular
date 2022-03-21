import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IGameQuestion } from './game.interface';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: [],
})
export class GameComponent implements OnInit {
  questions: IGameQuestion[] = [];
  questionIdx: number = 0;
  correctCounter: number = 0;
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

  get isFinished(): boolean {
    return this.questionIdx === this.questions.length;
  }

  onAnswer(answer: string): void {
    if (!this.answered) {
      const answerIdx =
        this.questions[this.questionIdx].answers.indexOf(answer);
      this.answeredQuestions.push(answerIdx);
      if (answerIdx === this.currentQuestion.correctAnswer) {
        this.correctCounter++;
      }
    }
  }

  get successMessage() {
    const coeffecient = Math.round(
      (this.correctCounter / this.questions.length) * 100
    );
    if (coeffecient === 100) {
      return 'Perfect!';
    }
    if (coeffecient >= 80) {
      return 'Bravo!';
    }
    if (coeffecient >= 60) {
      return 'Pas mal!';
    }
    if (coeffecient >= 40) {
      return 'Bof!';
    }
    if (coeffecient >= 20) {
      return 'Dommage!';
    }
    return 'Reesayez!';
  }

  onNextQuestion(): void {
    if (this.answered) {
      this.questionIdx++;
    }
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
