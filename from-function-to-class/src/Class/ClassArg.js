import React, { Component } from 'react'

class ClassArg extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: localStorage.getItem('name') || ""
        }
        this.handleName = this.handleName.bind(this);
    }
    handleName(e){
        this.setState({name: e.target.value})
    }
    componentDidUpdate(){
        localStorage.setItem('name', this.state.name);
    }
    render() {
        return (
            <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" value={this.state.name} onChange={this.handleName}/>
            </form>
            {this.state.name? <strong>Hello {this.state.name}</strong> : "Please Write Your Name"}
        </div>
        )
    }
}

export default ClassArg
