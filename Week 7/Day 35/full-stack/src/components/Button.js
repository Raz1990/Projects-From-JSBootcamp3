import React from 'react';
import PropTypes from 'prop-types';

export const Button = (props) => {
    Button.propTypes = {
        contentSTR: PropTypes.string,
        callbackFunc: PropTypes.func
    };

    return (<button onClick={props.callbackFunc}>{props.contentSTR}</button>);
};

