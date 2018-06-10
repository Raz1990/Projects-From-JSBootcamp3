import React from 'react';
import PropTypes from 'prop-types';

export const UsersList = (props) => {
    UsersList.propTypes = {
        users: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            username: PropTypes.string,
            age: PropTypes.number,
            onUserClick: PropTypes.func
        }))
    };

    this.getUserID = (li) => {
        props.onUserClick(li.target.attributes.id.value);
    };

    let count = 0;

    return (<ul>
        {props.users.length &&
        (props.users.map(user => (
            <li onClick={this.getUserID} id={count++} key={user.id}>{user.id}:{user.username} -- {user.age}</li>
        )))}
    </ul>);
};

