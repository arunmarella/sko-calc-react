import * as React from 'react';
import '../../css/style.css';
export interface ContentProps {
  text: string;
  clickHandler: Function;
  initEdit: boolean;
  spellCheck: boolean;
}
export class Content extends React.Component<ContentProps> {
  _handleClick=()=> {
    const cb = this.props.clickHandler;
    if (cb) {
      cb.call(this);
    }
  }
  render() {
    return (
      <div
        className="content"
        onClick={this._handleClick}
      >
        {this.props.text}
      </div>
    );
  }
}
