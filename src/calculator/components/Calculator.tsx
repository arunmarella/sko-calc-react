import * as React from 'react';
import '../../css/style.css';
import Editor from './Editor';
import {Equations} from './Equations';
import Numbers from './Numbers';
import {Presets} from './Presets';
import Functions from './Functions';

export default class Calculator extends React.Component {

    render() {
        window.addEventListener('paste', (event: ClipboardEvent) => {
            console.log('paste action initiated', event.clipboardData.getData(''))
        });
        return (
            <main className="sk-calculator">
                    <Editor/>
                    <Numbers/>
                    <Functions/>
                    <Equations/>
                    <Presets/>
            </main>
        );
    }
}
