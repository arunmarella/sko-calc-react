import * as React from 'react';
import '../../css/style.css';
import Button from './Button';

import {memory} from '../services/memory.service';
export class Equations extends React.Component {
  _eq(type) {
    let str = memory.curInput.toString();
    str = str.trim();
    if(str[str.length-1] === type){
      return;
    }
    memory.newInput = `${memory.curInput} ${type} `;
  };
  
  _equate() {
    memory.newInput = eval(memory.curInput);
  };
  
  render() {
    return (
      <section className="button-set--equations">
        <Button text="+" clickHandler={this._eq} />
        <Button text="-" clickHandler={this._eq} />
        <Button text="*" clickHandler={this._eq} />
        <Button text="/" clickHandler={this._eq} />
        <Button text="=" clickHandler={this._equate} />
      </section>
    )  
  }
}
