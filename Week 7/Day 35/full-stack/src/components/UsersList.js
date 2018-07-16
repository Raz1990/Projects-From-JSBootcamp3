import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "./Button";

export const UsersList = (props) => {
    UsersList.propTypes = {
        users: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            username: PropTypes.string,
            age: PropTypes.number,
            onUserClick: PropTypes.func
        }))
    };

    this.getUserID = (button) => {
        const buttonText = button.target.innerText;
        props.onUserClick(button.target.parentElement.attributes.id.value,buttonText);
    };

    let count = 0;

    return (<ul>
        {props.users.length &&
        (props.users.map(user => (
            <li id={count++} key={user.id}>
                {user.id}:{user.username} -- {user.age}
                <Button contentSTR={"Delete"} callbackFunc={this.getUserID}/>
                <Button contentSTR={"Edit"} callbackFunc={this.getUserID}/>
            </li>
        )))}
    </ul>);
};

