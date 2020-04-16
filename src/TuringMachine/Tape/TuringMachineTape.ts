import { TuringTapeError } from './TuringTapeError';

export class TuringMachineTape {

  private tape: string;
  private index: number;

  constructor() {
    this.tape = '';
    this.index = 0;
  }

  public move(movement: string): number {
    if (movement === '<') {
      this.index--;
      if (this.index < 0) {
        throw new TuringTapeError(
          'Invalid move: You tried to go left on first cell'
        );
      }
      return this.index;
    }
    if (movement === '>') return this.index++;
    if (movement === '-') return this.index;
    throw new TuringTapeError(`Movement ${movement} was not understood`);
  }

  public getToken(): string {
    return this.tape[this.index];
  }

  public setToken(token: string): void {
    if (token.length != 1) {
      throw new TuringTapeError(
        `You are trying to set a token with length ${token.length}`
      );
    }
    this.setTokenAt(token, this.index);
  }

  private setTokenAt(token: string, index: number): void {
    if (index > this.tape.length - 1) {
      this.tape += token;
    } else {
      this.tape =
        this.tape.substr(0, index)
        + token
        + this.tape.substr(index + 1);
    }
  }

  public getDescription(): [string, string] {
    return [this.tape.substr(0, this.index), this.tape.substr(this.index)];
  }
}

module.exports = TuringMachineTape;