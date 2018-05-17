import * as React from 'react';
import '../App.css';

// import logo from './logo.svg';

import CoolButton from '.././components/ComponentCoolButton';

interface IAppState {
    name: string
}

function alertStuff(textToAlert:string) {
    alert(textToAlert);
}

class App extends React.Component<{}, IAppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            name: 'raz'
        }
    }

    public render() {
        return (
            <div>
                <CoolButton text={'My Cool Button'} printCallback={alertStuff}/>
                <CoolButton text={'My UI Button'} printCallback={alertStuff}/>
            </div>
        );
    }
}

export default App;
