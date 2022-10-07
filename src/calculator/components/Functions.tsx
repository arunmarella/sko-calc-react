import * as React from 'react';
import '../../css/style.css';
import Button from './Button';
import {eventEmitter, Events} from '../services/EventEmitter';
import {memory} from '../services/memory.service';
export default class Functions extends React.Component{
  _clear() {
    memory.newInput = 0;
  };
  _contentClear() {
    let curInput = String(memory.curInput),
        lessOne = curInput.substring(0, (curInput.length - 1));
    return memory.newInput = lessOne === '' ? 0 : lessOne;
  };
  
  render() {
    return (
      <section className="button-set--functions">
        <Button klass="long-text" text="clear" clickHandler={this._clear} />
        <Button text="&larr;" clickHandler={this._contentClear} />
      </section>
    )
  }
}