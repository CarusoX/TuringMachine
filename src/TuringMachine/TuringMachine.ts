// @flow

import { TuringMachineTape } from "./Tape/TuringMachineTape";
import { TuringMachineInstructions } from "./Instructions/TuringMachineInstructions";

export class TuringMachine {

  private tape: TuringMachineTape;
  private instructions: TuringMachineInstructions;

  private state: string;

  constructor(
    private name: string,
    private q0: string,
    private qAccepted: Array<string>
  ) {
    this.tape = new TuringMachineTape();
    this.instructions = new TuringMachineInstructions();
  }

  public step(): void {
    const token = this.tape.getToken();
    const instruction = this.instructions.getMatchingInstruction(this.state, token);
    this.tape.setToken(instruction.replacing_symbol);
    this.tape.move(instruction.movement);
    this.state = instruction.next_state;
  }

  public getState(): string {
    return this.state;
  }

  public getStateDescription(): string {
    const [preffix, suffix] = this.tape.getDescription();
    return preffix + this.state + suffix;
  }

  public addInstruction(state: string, symbol: string, next_state: string, replacing_symbol: string, movement: string): this {
    this.instructions.addInstruction(state, symbol, next_state, replacing_symbol, movement);
    return this;
  }
}