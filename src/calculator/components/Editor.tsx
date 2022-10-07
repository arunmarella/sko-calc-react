import * as React from 'react';
import '../../css/style.css';
import { eventEmitter, Events } from '../services/EventEmitter';
import { Content } from './Content';
import {memory} from "../services/memory.service";
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
  _handlePastedData = (event)=>{
    let pastedData = event.clipboardData.getData('text');
    console.log(pastedData);
    const newNumber = isNaN(+pastedData) ? '' : +pastedData;
    if(newNumber){
      if (!memory.curInput) {
        return (memory.newInput = +pastedData);
      }
      memory.newInput = `${memory.curInput}${pastedData}`;
    }
    event.stopPropagation();
  }
  _updateField = (newStr) => {
    return this.setState({ text: newStr });
  };

  componentDidMount = () => {
    eventEmitter.subscribe(Events.NUMBER_CRUNCHER, this._updateField);
  };

  render() {
    return (
        <div className="content" onPaste={this._handlePastedData}>
          {this.state.text}
        </div>
    );
  }
}
