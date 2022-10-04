import * as React from 'react';
import '../../style.css';
import Button from './Button';
export class Presets extends React.Component {
  _showEhtereum(){

  };
  _showWei(){

  }
  render() {
    
    return (
      <section className="button-set--functions">
        <Button klass="long-text" text="Eth" clickHandler={this._showEhtereum} />
        <Button klass="long-text" text="WEI" clickHandler={this._showWei} />
      </section>
    )
  }
}
