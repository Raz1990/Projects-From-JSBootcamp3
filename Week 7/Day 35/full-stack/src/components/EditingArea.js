import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "./Button";

export const EditingArea = (props) => {
    EditingArea.propTypes = {
        onUserClick: PropTypes.func
    };

    let inputText = React.createRef();

    this.getNewUserName = (button) => {
        const newName = inputText.current.value;
        props.onUserClick(newName);
    };

    let count = 0;

    return (<div>
                <input ref={inputText}/>
                <Button contentSTR={"Save"} callbackFunc={this.getNewUserName}/>
            </div>);
};

