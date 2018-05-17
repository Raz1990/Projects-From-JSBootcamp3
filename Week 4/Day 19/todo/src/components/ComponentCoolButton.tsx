import * as React from 'react';

interface ICoolButton {
    text: string
    printCallback: any
}

const style = {
    color: 'red',
    width: 50
};

const thatProps = this.props;

const handleClick = () => {
    alert('inside button click');
    thatProps.printCallback(this.target.innerText);
};

const BTN = (props: ICoolButton) => {
    return (<button style={style} onClick={handleClick}>{props.text}</button>);
};

export default BTN;