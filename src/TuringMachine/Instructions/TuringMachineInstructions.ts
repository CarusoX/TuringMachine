type whereTo = {
  next_state: string,
  replacing_symbol: string,
  movement: string
};

export class TuringMachineInstructions {

  private instructions: {
    [state: string]: {
      [symbol: string]: whereTo
    }
  };

  public addInstruction(
    state: string,
    symbol: string,
    next_state: string,
    replacing_symbol: string,
    movement: string
  ): void {
    this.instructions[state][symbol] = {
      next_state, replacing_symbol, movement
    };
  }

  public getMatchingInstruction(
    state: string, symbol: string): whereTo | undefined {
    return this.instructions[state][symbol];
  }
}