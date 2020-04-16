// @flow

import { TuringTapeException } from './TuringTapeException';

export class TuringMachineTape {

  private tape: string;
  private index: number;

  constructor() {
    this.tape = ""
    this.index = 0;
  }

  public move(movement: string): void {
    if (movement === '<') {
      this.index--;
      if (this.index < 0) {
        throw new TuringTapeException('Invalid move: You tried to go left on first cell');
      }
    }
    if (movement === '>') {
      this.index++;
    }
    if (movement === '-') {
    }
    throw new TuringTapeException(`Movement ${movement} was not understood`);
  }

  public getToken(): string {
    return this.tape[this.index];
  }

  public setToken(token: string): void {
    if (token.length != 1) {
      throw new TuringTapeException(`You are trying to set a token with length ${token.length}`);
    }
    this.setTokenAt(token, this.index);
  }

  private setTokenAt(token: string, index: number): void {
    if (index > this.tape.length - 1) {
      this.tape += token;
    } else {
      this.tape = this.tape.substr(0, index) + token + this.tape.substr(index + 1);
    }
  }

  public getDescription(): [string, string] {
    return [this.tape.substr(0, this.index), this.tape.substr(this.index)];
  }
}

module.exports = TuringMachineTape;