import * as React from 'react';
import '../../style.css';
import Button from './Button';

import {memory} from '../services/memory.service';
export class Equations extends React.Component {
  _eq(type) {
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
