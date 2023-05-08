import { TennisGame } from "./TennisGame";

import Player from "./Player";
import { constants } from "./constants";

export class TennisGame3 implements TennisGame {
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

  defineEqualScore(playerScore: number): string {
    switch (playerScore) {
        case 0:
          return constants[0] + '-All';
        case 1:
          return constants[1] + '-All';
        case 2:
          return constants[2] + '-All';
        default:
          return 'Deuce';
      }
  }

  defineWinOrAdvantage(): string {
    if (this.player1.hasAdvantageOver(this.player2)) {
      return `Advantage ${this.player1.getName()}`;
    } else if (this.player2.hasAdvantageOver(this.player1)) {
      return `Advantage ${this.player2.getName()}`;
    } else if (this.player1.hasWonAgainst(this.player2)) {
      return `Win for ${this.player1.getName()}`;
    } else {
      return `Win for ${this.player2.getName()}`;
    }
  }

  defineGameSituation(): string {
    return constants[this.player1.getScore()] + "-" + constants[this.player2.getScore()]
  }

  getScore(): string {
    if (this.player1.isItEqualScore(this.player2)) {
      return this.defineEqualScore(this.player1.getScore());
    } else if (this.player1.getScore() >= 4 || this.player2.getScore() >= 4) {
      return this.defineWinOrAdvantage();
    } else {
      return this.defineGameSituation();
    }
  }
}
