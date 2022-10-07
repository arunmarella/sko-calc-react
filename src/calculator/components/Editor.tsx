import * as React from 'react';
import '../../css/style.css';
import { eventEmitter, Events } from '../services/EventEmitter';
import { Content } from './Content';
interface EditorProps {
  text?: string;
}
interface EditorState {
  text?: string;
}
export default class Editor extends React.Component<EditorProps, EditorState> {
  constructor(props) {
    super(props);
    this.state = { text: props.text || '0' };
  }
  _updateField = (newStr) => {
    //newStr = newStr.split ? newStr.split(' ').reverse().join(' ') : newStr;
    return this.setState({ text: newStr });
  };

  componentDidMount = () => {
    eventEmitter.subscribe(Events.NUMBER_CRUNCHER, this._updateField);
  };

  render() {
    return (
      <Content
        text={this.state.text}
        initEdit={false}
        spellCheck={false}
        clickHandler={null}
      />
    );
  }
}
