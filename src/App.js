import React, {Component} from 'react';
import SelectField from './components/SelectField'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="jumbotron">
                        <h1>Lottery</h1>
                        <SelectField/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
