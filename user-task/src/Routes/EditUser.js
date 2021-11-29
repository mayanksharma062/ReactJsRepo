import React, { Component } from 'react'
import axios from 'axios'

export class EditUser extends Component {
    constructor(){
        super();
        this.state={ users:[], name: "", email: "", id: null, show: true }
    }
    componentDidMount(){
        this.setState({name: localStorage.getItem('name'), email: localStorage.getItem('email'), id: localStorage.getItem('id')});
    }
    addDataToApi = (e)=>{
        e.preventDefault();
        console.log("Updated!")
        axios.put(`http://localhost:3005/users/${this.state.id}`, { name: this.state.name, email: this.state.email});
        this.setState({name: "", email: "", show: false})
    }

    render() {
        return (
            <>
            <h1>Edit User</h1>
            <div>
                {this.state.show?
                <form onSubmit={this.addDataToApi}>
                Name: <input type="text" onChange={(e)=>this.setState({name: e.target.value})} value={this.state.name} />
                Email: <input type="text" onChange={(e)=>this.setState({email: e.target.value})} value={this.state.email} />
                    <button type="submit">Update Done</button>
                </form>: <h2 className="text-primary">Update Done!</h2>}
            </div>
            </>
        )
    }
}

export default EditUser
