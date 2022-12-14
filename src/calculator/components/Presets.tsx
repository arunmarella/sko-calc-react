import * as React from 'react';
import '../../css/style.css';
import Button from './Button';
import { memory } from '../services/memory.service';
export class Presets extends React.Component {
  PRESETS = { ETH: 0, WEI: 9, GWEI: 18 };
  getPreset = (input) => {
    console.log(input);
    return Object.keys(this.PRESETS).find((key) => input.split(" ")[1] === key);
  };
  _applyPreset = (type) => {
    let str = memory.curInput.toString();
    str = str.trim();
    const preset = this.getPreset(memory.curInput.toString().trim());
    if (preset && preset !== type) {
      str = str.replace(preset, '');
      let result = eval(str);
      const fromFactor = this.PRESETS[preset];
      const toFactor = this.PRESETS[type];
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
      <section className="button-set--presets">
        <Button klass="long-text" text="ETH" clickHandler={this._applyPreset} />
        <Button klass="long-text" text="WEI" clickHandler={this._applyPreset} />
        <Button
          klass="long-text"
          text="GWEI"
          clickHandler={this._applyPreset}
        />
      </section>
    );
  }
}
