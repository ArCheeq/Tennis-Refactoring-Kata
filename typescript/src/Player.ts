class Player {
    private name: string;
    private score: number;

    constructor(name: string) {
        this.name = name;
        this.score = 0;
    }

    public getScore(): number {
        return this.score;
    }

    public wonPoint(): void {
        this.score++;
    }

    public isCalled(name: string): boolean {
        return this.name == name;
    }

    public getName(): string {
        return this.name;
    }

    public hasWonAgainst(otherPlayer: Player): boolean {
        const advantage = this.score - otherPlayer.getScore();
        return this.score >= 4 && advantage >= 2;
    }

    public hasAdvantageOver(otherPlayer: Player): boolean {
        const advantage = this.score - otherPlayer.getScore();
        return this.score >= 4 && advantage === 1;
    }

    public isItEqualScore(otherPlayer: Player): boolean {
        return this.score === otherPlayer.getScore();
    }
}