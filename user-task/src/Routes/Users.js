import React, { Component } from 'react'
import {Link} from "react-router-dom";
import axios from 'axios'

export class Users extends Component {
    constructor() {
        super();
        this.state = {users:[], name: "", email: "", show:false, error: null, isLoaded: false, showAddButton: true, username: "", 
        address: {street: "", suite:"", city:"", zipcode:"", geo: { lat:"", long:""}}, phone:"", website:"", company: {companyname: "", catchphrase: "", bs: ""}, id: null, editShow: false}
    }
    // componentDidUpdate() {
    //     fetch('http://localhost:3005/users').then(res => {
    //         // console.log(res);
    //         return res.json()
    //     }).then((result) => {
    //         this.setState({ users: result })
    //         // console.log(this.state.users);
    //         // console.log(result);
    //     })
    //     // var users = await axios.create({baseURL: 'http://localhost:3005/'}).get('/users');
    //     // // console.log(users.data);
    //     // this.setState({users: users.data});
    // }
    componentDidMount(){
        fetch('http://localhost:3005/users').then(res => {
            // console.log(res);
            return res.json()
        }).then((result) => {
            this.setState({ isLoaded: true, users: result })
            // console.log(this.state.users);
            // console.log(result);
        },  (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          })
    }

    editHandler = (user) => {
        // console.log(id);
        localStorage.setItem('id', user.id);
        localStorage.setItem('name', user.name);
        localStorage.setItem('email', user.email);
        this.setState({editShow: true});
        this.editHandlerMaterial();

    }

    getdata = ()=>{
        fetch('http://localhost:3005/users').then(res => {
            // console.log(res);
            return res.json()
        }).then((result) => {
            this.setState({ users: result })
    })
}

    AddDataFunc = (e) => {
        e.preventDefault();
        this.setState({show:true, showAddButton: false});
        // console.log(this.state.address.setState({street: }))
    }

    addDataToApi = (e)=>{
        e.preventDefault();
        console.log("Updated!")
        axios.post('http://localhost:3005/users', { name: this.state.name, email: this.state.email,  username: this.state.username , address: {street: this.state.address.street, suite:this.state.address.suite, city:this.state.address.city, zipcode:this.state.address.zipcode, geo: {lat:this.state.address.geo.lat, long: this.state.address.geo.long }}, phone:this.state.phone, website:this.state.website, company: {companyname: this.state.company.companyname , catchphrase: this.state.company.catchphrase, bs: this.state.company.bs}}).then(()=>{
            this.getdata();
        });
        this.setState({name: "", email: "", show: false})
    }

    deleteHandler = (user)=>{
        axios.delete(`http://localhost:3005/users/${user.id}`).then(()=>{
            this.getdata();
        })
    }
    editHandlerMaterial= () => {
        this.setState({name: localStorage.getItem('name'), email: localStorage.getItem('email'), id: localStorage.getItem('id')});
    }
    editAgainHandler = (e)=>{
        e.preventDefault();
        console.log("wow")
        console.log("Updated!")
        axios.put(`http://localhost:3005/users/${this.state.id}`, { name: this.state.name, email: this.state.email}).then(()=>{
            this.getdata();
        });
        this.setState({name: "", email: "", show: false})
        this.setState({editShow: false});
    }

    render() {
        const { users, isLoaded, error } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
        return (
            <div>
                <h1>Users</h1>
                {this.state.show?<form>
                    Name: <input type="text" onChange={(e)=>this.setState({name: e.target.value})} value={this.state.name} />


                    Username: <input type="text" onChange={(e)=>this.setState({username: e.target.value})} value={this.state.username} />


                    Email: <input type="text" onChange={(e)=>this.setState({email: e.target.value})} value={this.state.email} />


                    Address: <br/>


                    Street: <input type="text" onChange={(e)=>{
                        var address = {...this.state.address}
                        address.street = e.target.value;
                        this.setState({address})
                    }} value={this.state.address.street} />



                    Suite: <input type="text" onChange={(e)=>{
                        var address = {...this.state.address}
                        address.suite = e.target.value;
                        this.setState({address})
                    }} value={this.state.address.suite} />


                    City: <input type="text" onChange={(e)=>{
                        var address = {...this.state.address}
                        address.city = e.target.value;
                        this.setState({address})
                    }} value={this.state.address.city} />


                    Zipcode: <input type="text" onChange={(e)=>{
                        var address = {...this.state.address}
                        address.zipcode = e.target.value;
                        this.setState({address})
                    }} value={this.state.address.zipcode} />

                    GEO: <br/>

                    Lat: <input type="text" onChange={(e)=>{
                        var address = {...this.state.address}
                        address.geo.lat = e.target.value;
                        this.setState({address})
                    }} value={this.state.address.geo.lat} />

                    Long: <input type="text" onChange={(e)=>{
                        var address = {...this.state.address}
                        address.geo.long = e.target.value;

                        this.setState({address})
                    }} value={this.state.address.geo.long} />

                    Phone: <input type="text" onChange={(e)=>this.setState({phone: e.target.value})} value={this.state.phone} />

                    website: <input type="text" onChange={(e)=>this.setState({website: e.target.value})} value={this.state.website} />


                    Company: <br/>


                    company-name: <input type="text" onChange={(e)=>{
                        var company = {...this.state.company}
                        company.companyname = e.target.value;
                        this.setState({company})
                    }} value={this.state.company.companyname} />


                    catch-phrase: <input type="text" onChange={(e)=>{
                        var company = {...this.state.company}
                        company.catchphrase = e.target.value;
                        this.setState({company})
                    }} value={this.state.company.catchphrase} />


                    bs: <input type="text" onChange={(e)=>{
                        var company = {...this.state.company}
                        company.bs = e.target.value;
                        this.setState({company})
                    }} value={this.state.company.bs} />


                    <button type="submit" onClick={this.addDataToApi}>Add Data</button>
                    <button type="button" onClick={(e)=>{e.preventDefault(); return this.setState({show: false})}}>Cancel</button>
                </form>:null}
                {this.state.showAddButton?<button type="submit" onClick={this.AddDataFunc}>Add Data</button>:null}

                {this.state.editShow?                
                <form onSubmit={this.editAgainHandler}>
                Name: <input type="text" onChange={(e)=>this.setState({name: e.target.value})} value={this.state.name} />
                Email: <input type="text" onChange={(e)=>this.setState({email: e.target.value})} value={this.state.email} />
                    <button type="submit">Update Done</button>
                </form>: null}

                {users.map(user => {
                    return (
                            <div key={user.id} style={{ display: "flex" }} className="my-3">
                                <h6 > Name Of The User: </h6>
                                <p className="ms-1"> {user.name}</p>
                                <h6 className="ms-3">Email Id Of the User:</h6>
                                <p className="ms-1 me-2">{user.email}</p>
                                {/* <Link to="/edituser"> */}
                                <button onClick={() => this.editHandler(user)} className="me-2">Edit</button>
                                {/* </Link> */}
                                <button onClick={()=>this.deleteHandler(user)}>Delete</button>
                            </div>
                        
                    )
                })}
            </div>
        )
    }
}
}

export default Users
