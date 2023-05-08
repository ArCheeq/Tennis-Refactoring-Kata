import { TennisGame } from './TennisGame';
import Player from './Player';

export class TennisGame1 implements TennisGame {
  private player1: Player;
  private player2: Player;

  constructor(player1Name: string, player2Name: string) {
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
  }

  wonPoint(playerName: string): void {
    if (this.player1.isCalled(playerName))
      this.player1.wonPoint();
    else
      this.player2.wonPoint();
  }

  defineScore(): string {
    let score: string;
    switch (this.player1.getScore()) {
      case 0:
        score = 'Love-All';
        break;
      case 1:
        score = 'Fifteen-All';
        break;
      case 2:
        score = 'Thirty-All';
        break;
      default:
        score = 'Deuce';
        break;
    }
    return score
  }

  defineWinOrAdvantage(): string {
    let score: string;
    if (this.player1.hasAdvantageOver(this.player2)) {
      score = 'Advantage player1';
    } else if (this.player2.hasAdvantageOver(this.player1)) {
      score = 'Advantage player2';
    } else if (this.player1.hasWonAgainst(this.player2)) {
      score = 'Win for player1';
    } else {
      score = 'Win for player2';
    }
    return score;
  }

  definGameSituation(): string {
    let score: string = '';
    let tempScore: number = this.player1.getScore();
    for (let i = 1; i < 3; i++) {
      if (i !== 1) {
        score += '-';
        tempScore = this.player2.getScore();
      }
      
      switch (tempScore) {
        case 0:
          score += 'Love';
          break;
        case 1:
          score += 'Fifteen';
          break;
        case 2:
          score += 'Thirty';
          break;
        case 3:
          score += 'Forty';
          break;
      }
    }

    return score;
  }

  getScore(): string {
    let score: string = '';

    if (this.player1.isItEqualScore(this.player2)) {
      score = this.defineScore();
    } else if (this.player1.getScore() >= 4 || this.player2.getScore() >= 4) {
      score = this.defineWinOrAdvantage();
    } else {
      score = this.definGameSituation();
    }
    return score;
  }
}
