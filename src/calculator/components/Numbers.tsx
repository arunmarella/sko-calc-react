import * as React from 'react';
import '../../css/style.css';
import Button from './Button';
import { memory } from '../services/memory.service';

export default class Numbers extends React.Component {
  _number = (num) => {
    if (!memory.curInput) {
      return (memory.newInput = num);
    }
    return (memory.newInput = `${memory.curInput}${num}`);
  };
  render() {
      const buttons = "1234567890".split("").map(number => <Button text={number} clickHandler={this._number} key={number}/>);
    return (
      <div className="button-set--numbers">
        {buttons}
      </div>
    );
  }
}
