import React, { useState } from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

function AddUser(props) {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: "Invalid Input",
                message: "Please Enter A Valid Name and Age (non-Empty values)."
            });
            return;
        }
        if(+enteredAge < 1){
            setError({
                title: "Invalid Age",
                message: "Please Enter A Valid Age (Positive Value)."
            });
            return;
        }
        console.log(enteredAge, enteredUsername);
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    }
    const usernameChangeHandler = (event)=>{
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event)=>{
        setEnteredAge(event.target.value);
    }

    const errorHandler = ()=>{
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" onChange={usernameChangeHandler} value={enteredUsername}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" name="age" id="age" onChange={ageChangeHandler} value={enteredAge} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser
