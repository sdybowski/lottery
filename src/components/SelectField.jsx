import React, {Component} from 'react';

class SelectField extends Component {
    render() {
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        );
    }
}

export default SelectField;