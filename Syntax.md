# Syntax

## Configuration

```javascript
name: string       // The name of your turing machine (You can use some latex commands) 
initial: string    // The initial state for the turing machine
accepted: [string] // A list of states in which your input will be accepted by the machine

/* Example */

name: My awesome turing machine
initial: q0
accepted: qAccepted q10
```

## Definitions

By default, the `*` will match any symbol being read by the turing machine, but you can define more custom symbols to make your life easier.

```javascript
symbol := [string] // A symbol can represent various other symbols

/* Examples */

+ := a b

# := + c // nesting is allowed
```

## Transitions

Transitions are the way of telling the machine what to do. You can define them in the following ways:

_If machine's current state is 'state' and is reading 'symbol',
then it should go to next_state, write replacing_symbol to the tape,
and move left **(<)**, right **(>)** or keep place **(-)**_

```javascript
state symbol => next_state replacing_symbol movement

/* Examples */

q1 a => q1 b > // if in state q1 reading 'a', replace it by b, go to state q1, and move right

q2 * => q0 a < // if in state q2 reading anything, replace it by a, go to state q0, and move left

q0 _ => q1 _ - // if in state q0 reading blank, replace it by blanck, go to q1, and don't move

q9 a => q10 a - // if in state q9 reading 'a', replace it by 'a', go to q10, and don't move
```

_If symbol and replacing_symbol are equal, you can obviate writing it_

```javascript
state symbol => next_state movement

/* Examples */

q3 + => q4 > // if in state q3, reading 'a' or 'b' (see above definition), leave it, go to q4, and move right 

q4 _ => q4 - // if in state q4, reading blank, leave it, keep q4 state, and don't move
```


