import { Injectable } from '@angular/core';
import { Score } from './models/score';
import { Sign } from './models/sign';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor() {
    this.scoreBoard = [];
  }

  private scoreBoard: Score[];

  newScore(name: string) {
    let newScore = new Score();
    newScore.playerName = name;
    newScore.playerScore = 0;
    newScore.opponentScore = 0;
    this.scoreBoard.push(newScore);
  }
  latestScore(): Score {
    if (this.scoreBoard.length > 0) {
      return this.scoreBoard[this.scoreBoard.length - 1];
    }
  }

  /**
   * Wo is the winner 
   * 
   * @param selectedSign the sign selected by the player
   * @param opponentSign the sign selected by the computer
   */
  whoWins(selectedSign: Sign, opponentSign: Sign): number {
    if (selectedSign.id == opponentSign.id) {
      return 0;
    }
    if ((selectedSign.id - (opponentSign.id) % 3) === 1) {
      this.latestScore().playerScore++;
      return 1;
    }
    this.latestScore().opponentScore++;
    return -1;
  }
}
