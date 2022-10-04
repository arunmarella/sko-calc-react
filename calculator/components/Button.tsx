import * as React from 'react';
import '../../style.css';

export interface ButtonProps {
  text: string;
  clickHandler?: Function;
  klass?: string;
}
export default class Button extends React.Component<ButtonProps> {
  constructor(props) {
    super(props);
  }
  _handleClick() {
    console.log(this?.props);
    let text = this?.props.text,
      cb = this?.props.clickHandler;

    if (cb) {
      cb.call(null, text);
    }
  }

  render() {
    return (
      <button className={this.props.klass} onClick={this._handleClick}>
        <span className="title">{this.props.text}</span>
      </button>
    );
  }
}
