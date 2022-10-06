import * as React from 'react';
import '../../css/style.css';
import Button from './Button';
import { memory } from '../services/memory.service';
export class Presets extends React.Component {
  PRESETS = { ETH: 0, WEI: 9, G: 18 };
  getPreset = (input) => {
    return Object.keys(this.PRESETS).find((key) => input.indexOf(key) > -1);
  };
  _applyPreset = (type) => {
    let str = memory.curInput.toString();
    str = str.trim();
    if (str.indexOf(type) > 0) {
      return;
    }
    const preset = this.getPreset(str);
    if (preset && preset !== type) {
      console.log(str);
      str = str.replace(preset, '');
      let result = eval(str);
      const fromFactor = this.PRESETS[preset];
      const toFactor = this.PRESETS[type];
      console.log(str, toFactor, fromFactor);
      if (toFactor < fromFactor) {
        result = result / Math.pow(10, fromFactor);
      } else {
        result = result * Math.pow(10, toFactor);
      }
      memory.newInput = `${result} ${type} `;
    } else {
      memory.newInput = `${memory.curInput} ${type} `;
    }
  };

  render() {
    return (
      <section className="button-set--functions">
        <Button klass="long-text" text="ETH" clickHandler={this._applyPreset} />
        <Button klass="long-text" text="WEI" clickHandler={this._applyPreset} />
        <Button
          klass="long-text"
          text="G"
          clickHandler={this._applyPreset}
        />
      </section>
    );
  }
}
