import * as React from 'react';
import '../../css/style.css';
import Editor from './Editor';
import {Operators} from './Operators';
import Numbers from './Numbers';
import {Presets} from './Presets';
import Functions from './Functions';
import {memory} from "../services/memory.service";
//import {eventEmitter, Events} from '../services/EventEmitter';

export default class Calculator extends React.Component {
    render() {
        return (
            <main className="sk-calculator">
                    <Editor/>
                    <Numbers/>
                    <Functions/>
                    <Operators/>
                    <Presets/>
            </main>
        );
    }
}
