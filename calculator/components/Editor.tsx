import * as React from 'react';
import '../../style.css';
import { eventEmitter, Events } from '../services/EventEmitter';
import { Content } from './Content';
interface EditorProps {
  text: string;
}
interface EditorState {
  text: string;
}
export default class Editor extends React.Component<EditorProps, EditorState> {
  _updateField(newStr) {
    newStr = newStr.split ? newStr.split(' ').reverse().join(' ') : newStr;
    return this.setState({ text: newStr });
  }

  getInitialState() {
    return { text: this.props?.text || '0' };
  }

  componentWillMount() {
    eventEmitter.subscribe(Events.NUMBER_CRUNCHER, this._updateField);
  }

  render() {
    return (
      <Content
        text={this.state?.text}
        initEdit={false}
        spellCheck={false}
        clickHandler={null}
      />
    );
  }
}
