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
    return (
      <div className="button-set--numbers">
        <Button text="1" clickHandler={this._number} />
        <Button text="2" clickHandler={this._number} />
        <Button text="3" clickHandler={this._number} />
        <Button text="4" clickHandler={this._number} />
        <Button text="5" clickHandler={this._number} />
        <Button text="6" clickHandler={this._number} />
        <Button text="7" clickHandler={this._number} />
        <Button text="8" clickHandler={this._number} />
        <Button text="9" clickHandler={this._number} />
        <Button text="0" clickHandler={this._number} />
      </div>
    );
  }
}
