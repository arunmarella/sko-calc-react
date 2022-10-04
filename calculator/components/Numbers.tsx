import * as React from 'react';
import '../../style.css';
import Button from './Button';

export default class Numbers extends React.Component {
  render() {
    return (
      <div>
        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <Button text="0" />
      </div>
    );
  }
}
