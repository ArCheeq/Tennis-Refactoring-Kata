import { TennisGame } from './TennisGame';
import Player from './Player';

enum equalScore {
  love = "Love-All",
  fifteen = "Fifteen-All",
  thirty = "Thirty-All",
  deuce = "Deuce"
}

enum advantage {
  firstPlayer = "Advantage player1",
  secondPlayer = "Advantage player2"
}

enum win {
  firstPlayer = "Win for player1",
  secondPlayer = "Win for player2"
}

enum gameSituations {
  love = "Love",
  fifteen = "Fifteen",
  thirty = "Thirty",
  forty = "Forty"
}



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
        score = equalScore.love;
        break;
      case 1:
        score = equalScore.fifteen;
        break;
      case 2:
        score = equalScore.thirty;
        break;
      default:
        score = equalScore.deuce;
        break;
    }
    return score
  }

  defineWinOrAdvantage(): string {
    let score: string;
    if (this.player1.hasAdvantageOver(this.player2)) {
      score = advantage.firstPlayer;
    } else if (this.player2.hasAdvantageOver(this.player1)) {
      score = advantage.secondPlayer;
    } else if (this.player1.hasWonAgainst(this.player2)) {
      score = win.firstPlayer;
    } else {
      score = win.secondPlayer;
    }
    return score;
  }

  defineGameSituation(): string {
    let score: string = '';
    let tempScore: number = this.player1.getScore();
    for (let i = 1; i < 3; i++) {
      if (i !== 1) {
        score += '-';
        tempScore = this.player2.getScore();
      }

      switch (tempScore) {
        case 0:
          score += gameSituations.love;
          break;
        case 1:
          score += gameSituations.fifteen;
          break;
        case 2:
          score += gameSituations.thirty;
          break;
        case 3:
          score += gameSituations.forty;
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
      score = this.defineGameSituation();
    }
    return score;
  }
}
