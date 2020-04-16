// @flow

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

  public addInstruction(state: string, symbol: string, next_state: string, replacing_symbol: string, movement: string): void {
    // TODO
  }

  public getMatchingInstruction(state: string, symbol: string): whereTo {
    const possibilities = this.instructions[state];
    let matchingInstruction: whereTo = undefined;
    Object.entries(possibilities).forEach(([s, whereTo]) => {
      if (symbol === s && matchingInstruction === undefined) {
        matchingInstruction = whereTo;
      }
      // if (symbol === s && matchingInstruction !== undefined) // BOOM
    });
    //  if(matchingInstruction === undefined) // BOOM
    return matchingInstruction;
  }
}