import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import axios from 'axios'
import "antd/dist/antd.css"
import { Table, Input } from 'antd';

export class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: [], totalCuratedUsers: [], searchValue: "", show: false, error: null, isLoaded: false, showAddButton: true, username: "", name:"", email:"",
            address: { street: "", suite: "", city: "", zipcode: "", geo: { lat: "", long: "" } }, phone: "", website: "", company: { companyname: "", catchphrase: "", bs: "" }, editShow: false, updatedList: []
        }
    }

    columns = [
        {
            title: "ID",
            key: 'id',
            dataIndex: 'id'
        },
        {
            title: "Name",
            key: 'id',
            dataIndex: 'name'
        },
        {
            title: "userName",
            key: 'id',
            dataIndex: 'username'
        },
        {
            title: "Email",
            key: 'id',
            dataIndex: 'email'
        },
        {
            title: "Street",
            key: 'id',
            dataIndex: ['address', 'street']
        },
        {
            title: "Suite",
            key: 'id',
            dataIndex: ['address', 'suite']
        },
        {
            title: "City",
            key: 'id',
            dataIndex: ['address', 'city']
        },
        {
            title: "Zipcode",
            key: 'id',
            dataIndex: ['address', 'zipcode']
        },
        {
            title: "Lattitude",
            key: 'id',
            dataIndex: ['address', 'geo', 'lat']
        },
        {
            title: "Longitude",
            key: 'id',
            dataIndex: ['address', 'geo', 'lng']
        },
        {
            title: "Phone",
            key: 'id',
            dataIndex: 'phone'
        },
        {
            title: "Website",
            key: 'id',
            dataIndex: 'website'
        },
        {
            title: "Company Name",
            key: 'id',
            dataIndex: ['company', 'name']
        },
        {
            title: "Catchphrase",
            key: 'id',
            dataIndex: ['company', 'catchPhrase']
        },
        {
            title: "Bs",
            key: 'id',
            dataIndex: ['company', 'bs']
        },
        {
            title: "Buttons",
            key: 'id',
            render: (users)=>{return ( <button onClick={()=>this.deleteHandler(users)}>Edit</button>)}
        },
        {
            title: "Buttons",
            key: 'id',
            render: (users)=>{return ( <button onClick={()=>this.deleteHandler(users)}>Delete</button>)}
        },
    ]

    
    handleDatasource = (users)=>{
        let totalCuratedUsers = users.filter((val)=> val.name.toLowerCase().includes(this.state.searchValue));
        console.log("TCU", totalCuratedUsers);
        if(totalCuratedUsers.length !== 0){
            console.log(users)
            // return this.setState({users: totalCuratedUsers})
            
        }
        else if(this.state.searchValue === "" || totalCuratedUsers.length === 0){
            console.log("Not Found");
            fetch('http://localhost:3005/users').then(res => {
                // console.log(res);
                return res.json()
            }).then((result) => {
                this.setState({ isLoaded: true, users: result })
                // console.log(this.state.users);
                // console.log(result);
            }, (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }) 
        }
    }
    

    searchHandler = (e)=>{
        let totalCuratedUsers = this.state.users.filter((val)=> val.name.toLowerCase().includes(e.target.value.trim().toLowerCase()));
        console.log("TCU", totalCuratedUsers);
        if(totalCuratedUsers.length !== 0){
            console.log(this.state.users)
            return this.setState({users: totalCuratedUsers})
            // this.setState({dikhau: false});
            // return (<Table columns={this.columns} pagination={{pageSize: '5', showSizeChanger: true}} dataSource={totalCuratedUsers}/>)
        }
        else if(this.state.users === totalCuratedUsers || totalCuratedUsers.length === 0){
            
            console.log("Not Found");
            fetch('http://localhost:3005/users').then(res => {
                // console.log(res);
                return res.json()
            }).then((result) => {
                this.setState({ isLoaded: true, users: result })
                // console.log(this.state.users);
                // console.log(result);
            }, (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }) 
        }
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
    componentDidMount() {
        fetch('http://localhost:3005/users').then(res => {
            // console.log(res);
            return res.json()
        }).then((result) => {
            this.setState({ isLoaded: true, users: result })
            // console.log(this.state.users);
            // console.log(result);
        }, (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        })
    }

    editHandler = (user) => {
        // console.log(id);
        // localStorage.setItem('id', user.id);
        // localStorage.setItem('name', user.name);
        // localStorage.setItem('email', user.email);
        localStorage.setItem('usersInfo', JSON.stringify(user));
        // console.log(this.state.users[0].id)
        this.setState({ editShow: true });
        this.editHandlerMaterial();

    }

    getdata = () => {
        fetch('http://localhost:3005/users').then(res => {
            // console.log(res);
            return res.json()
        }).then((result) => {
            this.setState({ users: result })
        })
    }

    AddDataFunc = (e) => {
        e.preventDefault();
        this.setState({ show: true, showAddButton: false });
        // console.log(this.state.address.setState({street: }))
    }

    addDataToApi = (e) => {
        e.preventDefault();
        console.log("Updated!")
        if(this.state.name && this.state.email && this.state.username && this.state.address.street && this.state.address.suite && this.state.address.city && this.state.address.zipcode && this.state.address.geo.lat && this.state.address.geo.long && this.state.company.companyname && this.state.company.catchphrase && this.state.company.bs && this.state.website && this.state.phone ){
        axios.post('http://localhost:3005/users', { name: this.state.name, email: this.state.email, username: this.state.username, address: { street: this.state.address.street, suite: this.state.address.suite, city: this.state.address.city, zipcode: this.state.address.zipcode, geo: { lat: this.state.address.geo.lat, long: this.state.address.geo.long } }, phone: this.state.phone, website: this.state.website, company: { companyname: this.state.company.companyname, catchphrase: this.state.company.catchphrase, bs: this.state.company.bs } }).then(() => {
            this.getdata();
        });
        this.setState({ name: "", email: "", show: false, showAddButton: true })
    }
        else{
            alert("Galat Bhai")
        }
    }

    deleteHandler = (user) => {
        axios.delete(`http://localhost:3005/users/${user.id}`).then(() => {
            this.getdata();
        })
    }

    editHandlerMaterial = () => {
        // this.setState({ name: localStorage.getItem('name'), email: localStorage.getItem('email'), id: localStorage.getItem('id') });
        var www = JSON.parse(localStorage.getItem('usersInfo'));
        console.log(www.id)
        this.setState({ updatedList: [www] });
        // this.setState({id: www[0].id})
    }
    // this.setKardiState();
    editAgainHandler = (e) => {
        e.preventDefault();
        // console.log("wow")
        // console.log("Updated!")
        console.log(this.state.updatedList)
        axios.put(`http://localhost:3005/users/${this.state.updatedList[0].id}`, { ...this.state.updatedList[0] }).then(() => {
            this.getdata();
        });
        this.setState({ name: "", email: "", show: false })
        this.setState({ editShow: false });
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
                    {this.state.show ? <form>
                        Name: <input type="text" onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} /> 


                        Username: <input type="text" onChange={(e) => this.setState({ username: e.target.value })} value={this.state.username} /> <br/>


                        Email: <input type="text" onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} /> 


                        Address: 


                        Street: <input type="text" onChange={(e) => {
                            var address = { ...this.state.address }
                            address.street = e.target.value;
                            this.setState({ address })
                        }} value={this.state.address.street} /> <br/>



                        Suite: <input type="text" onChange={(e) => {
                            var address = { ...this.state.address }
                            address.suite = e.target.value;
                            this.setState({ address })
                        }} value={this.state.address.suite} />


                        City: <input type="text" onChange={(e) => {
                            var address = { ...this.state.address }
                            address.city = e.target.value;
                            this.setState({ address })
                        }} value={this.state.address.city} /> <br/>


                        Zipcode: <input type="text" onChange={(e) => {
                            var address = { ...this.state.address }
                            address.zipcode = e.target.value;
                            this.setState({ address })
                        }} value={this.state.address.zipcode} /> <br/>

                        GEO: <br />

                        Lat: <input type="text" onChange={(e) => {
                            var address = { ...this.state.address }
                            address.geo.lat = e.target.value;
                            this.setState({ address })
                        }} value={this.state.address.geo.lat} />

                        Long: <input type="text" onChange={(e) => {
                            var address = { ...this.state.address }
                            address.geo.long = e.target.value;

                            this.setState({ address })
                        }} value={this.state.address.geo.long} /> <br/>

                        Phone: <input type="text" onChange={(e) => this.setState({ phone: e.target.value })} value={this.state.phone} /> 

                        website: <input type="text" onChange={(e) => this.setState({ website: e.target.value })} value={this.state.website} /> <br/>


                        Company: <br />


                        company-name: <input type="text" onChange={(e) => {
                            var company = { ...this.state.company }
                            company.companyname = e.target.value;
                            this.setState({ company })
                        }} value={this.state.company.companyname} />


                        catch-phrase: <input type="text" onChange={(e) => {
                            var company = { ...this.state.company }
                            company.catchphrase = e.target.value;
                            this.setState({ company })
                        }} value={this.state.company.catchphrase} />


                        bs: <input type="text" onChange={(e) => {
                            var company = { ...this.state.company }
                            company.bs = e.target.value;
                            this.setState({ company })
                        }} value={this.state.company.bs} /> <br/>


                        <button type="submit" onClick={this.addDataToApi}>Add Data</button>
                        <button type="button" onClick={(e) => { e.preventDefault(); return this.setState({ show: false, showAddButton: true }) }}>Cancel</button>
                    </form> : null}
                    {this.state.showAddButton ? <button type="submit" onClick={this.AddDataFunc}>Add Data</button> : null}

                    {this.state.editShow ?
                        <form onSubmit={this.editAgainHandler}>


                            Name: <input type="text" onChange={(e) => {
                                var updatedList = { ...this.state.updatedList }
                                updatedList[0].name = e.target.value;
                                this.setState({ updatedList })
                            }} value={this.state.updatedList[0].name} />


                            Email: <input type="text" onChange={(e) => {
                                var updatedList = { ...this.state.updatedList }
                                updatedList[0].email = e.target.value;
                                this.setState({ updatedList })
                            }} value={this.state.updatedList[0].email} />



                            <button type="submit">Update Done</button>
                            <button type="button" onClick={() => this.setState({ editShow: false })}>Cancel</button>
                        </form> : null}
                        <Input.Search placeholder="Enter What You Want To Search Here" onChange={(e)=>this.searchHandler(e)} enterbutton />
                        <Table columns={this.columns} pagination={{pageSize: '5', showSizeChanger: true}} dataSource={users}/>
                        </div>
                        
            )
        }
    }
}

export default Users


                    // {users.map(user => {
                    //     return (
                    //         <li key={user.id} style={{ display: "flex" }} className="my-3">
                    //             <ul style={{ padding: "none", margin: "none" }}> Name Of The User: </ul>  {user.name}
                    //             <ul>Email Id Of the User:</ul>{user.email}
                    //             {/* <Link to="/edituser"> */}
                    //             <button onClick={() => this.editHandler(user)} className="ms-2 me-2">Edit</button>
                    //             {/* </Link> */}
                    //             <button onClick={() => this.deleteHandler(user)}>Delete</button>
                    //         </li>

                    //     )
                    // })}