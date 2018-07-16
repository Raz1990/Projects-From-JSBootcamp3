import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Api} from './api';
import {UsersList} from "./components/UsersList";
import {Loader} from "./components/Loader";
import {CreateUser} from "./components/CreateUser";
import {EditingArea} from "./components/EditingArea";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            isLoading: 0,
            isEditing: false
        }
    }

    componentDidMount() {
        this.startLoading();
        Api.getUsers()
            .then((users) => {
                this.setState((prevState) => ({
                    users: users
                }));

                this.stopLoading();
            });
    }

    stopLoading() {
        this.setState((prevState) => ({
            isLoading: --prevState.isLoading
        }));
    }

    startLoading() {
        this.setState((prevState) => ({
            isLoading: ++prevState.isLoading
        }));
    }

    onUserCreateHandler =(user)=>{
        this.startLoading();

        Api.createUser(user)
            .then((newUser) => {
                this.setState((prevState) => ({
                    users: [...prevState.users, newUser]
                }));
                this.stopLoading();
            });
    };

    userDelete = (user,currentUsers) => {
        Api.deleteUser(user)
            .then((byeUser) => {
                this.setState((prevState) => ({
                    users: currentUsers
                }));
                this.stopLoading();
            });
    };

    userUpdate = (user, newName) => {
        Api.updateUser(user, newName)
            .then((newUsers) => {
                this.setState((prevState) => ({
                    users: newUsers
                }));
                this.stopLoading();
            });
    };

    currentUsers; foundUser;

    onUserButtonClick = (id, action, newName) => {
        this.startLoading();

        this.currentUsers = this.state.users.slice(0);
        this.foundUser = this.currentUsers.splice(id,1);

        if (action === "Delete") {
            this.userDelete(this.foundUser,this.currentUsers);
        }
        else if (action === "Edit"){
            this.setState((prevState) => ({
                isEditing: true
            }));
        }
        this.stopLoading();
    };

    onUpdate = (newName) => {
        this.startLoading();
        this.userUpdate(this.foundUser, newName);
    };

    render = () => {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                {this.state.isLoading ? (<Loader/>) :
                    (<section className='app'>
                        <CreateUser onUserCreate={this.onUserCreateHandler}/>
                        <UsersList users={this.state.users} onUserClick = {this.onUserButtonClick}/>
                    </section>)}
                {this.state.isEditing ?
                    <EditingArea onUserClick = {this.onUpdate} /> :
                    <div/>}
            </div>
        );
    }
}

export default App;