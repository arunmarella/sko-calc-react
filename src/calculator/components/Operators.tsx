import * as React from 'react';
import '../../css/style.css';
import Button from './Button';

import {memory} from '../services/memory.service';
export class Operators extends React.Component {
  _operator(type) {
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
      const operators = "+-*/".split("").map(operator =>{
          return <Button text={operator} key={operator} clickHandler={this._operator} />;
      });
    return (
      <section className="button-set--operators">
          {operators}
        <Button text="=" clickHandler={this._equate} />
      </section>
    )  
  }
}
