import {eventEmitter, Events } from './EventEmitter';
export const memory = {
  input: 0,
  memory: [],
  get curInput() {
    return this.input;
  },
  
  get curMemories() {
    return this.memory.filter((m) => m !== undefined);
  },
  
  set commitMemory(input) {
    this.memory.push(input);
  },
  
  set newInput(str) {    
    let curInput = str,
      oldInput = this.curInput;
    
    if (this.curMemories.indexOf(oldInput) === -1) {
      this.commitMemory = oldInput;
    }
    
    this.input = curInput;
    eventEmitter.dispatch(Events.NUMBER_CRUNCHER, [this.curInput]);
  }
};