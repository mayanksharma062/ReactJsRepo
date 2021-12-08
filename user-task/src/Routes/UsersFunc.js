import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "antd/dist/antd.css"
import { Table, Input } from 'antd';

function UsersFunc() {
    const [users, setUsers] = useState([]);
    const [searchVal, setSearchVal] = useState("");
    const [show, setShow] = useState(false);
    const [showAddButton, setShowAddButton] = useState(true);
    const [isLoaded, setIsLoaded] = useState(true);
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState({
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
            lat: "",
            long: ""
        }
    })
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");
    const [company, setCompany] = useState({
        companyname: "",
        catchPhrase: "",
        bs: ""
    });
    const [editShow, setEditShow] = useState(false);
    const [updatedList, setUpdatedList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3005/users').then(res => {
            // console.log(res);
            return res.json()
        }).then((result) => {
            // this.setState({ isLoaded: true, users: result })
            setIsLoaded(true);
            setUsers(result)
            // console.log(users);
            // console.log(result);
        }, (error) => {
            setIsLoaded(true);
        })
    }, [])
    const columns = [
        {
            title: "ID",
            key: 'id',
            dataIndex: 'id'
        },
        {
            title: "Name",
            key: 'id',
            dataIndex: 'name',
            sorter: (a,b)=> a.name.length - b.name.length
        },
        {
            title: "userName",
            key: 'id',
            dataIndex: 'username',
            sorter: (a,b)=> a.username.length - b.username.length
        },
        {
            title: "Email",
            key: 'id',
            dataIndex: 'email',
            sorter: (a,b)=> a.email.length - b.email.length
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
            render: (users) => { return (<button onClick={() => deleteHandler(users)}>Edit</button>) }
        },
        {
            title: "Buttons",
            key: 'id',
            render: (users) => { return (<button onClick={() => deleteHandler(users)}>Delete</button>) }
        },
    ]

    const editHandler = (user) => {
        // console.log(id);
        // localStorage.setItem('id', user.id);
        // localStorage.setItem('name', user.name);
        // localStorage.setItem('email', user.email);
        localStorage.setItem('usersInfo', JSON.stringify(user));
        // console.log(users[0].id)
        setEditShow(true);
        editHandlerMaterial();

    }

    const getdata = () => {
        fetch('http://localhost:3005/users').then(res => {
            // console.log(res);
            return res.json()
        }).then((result) => {
            // this.setState({ users: result })
            setUsers(result);
        })
    }

    const AddDataFunc = (e) => {
        e.preventDefault();
        // this.setState({ show: true, showAddButton: false });
        setShow(true);
        setShowAddButton(false);
        // console.log(address.setState({street: }))
    }

    const addDataToApi = (e) => {
        e.preventDefault();
        console.log("Updated!")
        if (name && email && username && address.street && address.suite && address.city && address.zipcode && address.geo.lat && address.geo.long && company.companyname && company.catchphrase && company.bs && website && phone) {
            axios.post('http://localhost:3005/users', { name: name, email: email, username: username, address: { street: address.street, suite: address.suite, city: address.city, zipcode: address.zipcode, geo: { lat: address.geo.lat, long: address.geo.long } }, phone: phone, website: website, company: { companyname: company.companyname, catchphrase: company.catchphrase, bs: company.bs } }).then(() => {
                getdata();
            });
            // this.setState({ name: "", email: "", show: false, showAddButton: true })
            setName("");
            setEmail("");
            setShow(false);
            setShowAddButton(true);
        }
        else {
            alert("Galat Bhai")
        }
    }

    const deleteHandler = (user) => {
        axios.delete(`http://localhost:3005/users/${user.id}`).then(() => {
            getdata();
        })
    }

    const editHandlerMaterial = () => {
        // this.setState({ name: localStorage.getItem('name'), email: localStorage.getItem('email'), id: localStorage.getItem('id') });
        var www = JSON.parse(localStorage.getItem('usersInfo'));
        console.log(www.id)
        // this.setState({ updatedList: [www] });
        setUpdatedList([www]);
        // this.setState({id: www[0].id})
    }
    // this.setKardiState();
    const editAgainHandler = (e) => {
        e.preventDefault();
        // console.log("wow")
        // console.log("Updated!")
        console.log(updatedList)
        axios.put(`http://localhost:3005/users/${updatedList[0].id}`, { ...updatedList[0] }).then(() => {
            getdata();
        });
        // this.setState({ name: "", email: "", show: false })
        setName("");
        setEmail("");
        setShow(false);
        // this.setState({ editShow: false });
        setEditShow(false);
    }
    const searchHandler = (users) => {
        let totalCuratedUsers = users.filter((val) => val.name.toLowerCase().includes(searchVal.trim().toLowerCase()));
        // console.log("TCU", totalCuratedUsers);
        // if (totalCuratedUsers.length !== 0) {
            console.log(users)
            return totalCuratedUsers;
            // return this.setState({users: totalCuratedUsers})
            // return setUsers(totalCuratedUsers)
            // this.setState({dikhau: false});
            // return (<Table columns={this.columns} pagination={{pageSize: '5', showSizeChanger: true}} dataSource={totalCuratedUsers}/>)
        // }
        // else if (users === totalCuratedUsers || totalCuratedUsers.length === 0) {

        //     console.log("Not Found");
        //     fetch('http://localhost:3005/users').then(res => {
        //         // console.log(res);
        //         return res.json()
        //     }).then((result) => {
        //         // this.setState({ isLoaded: true, users: result })
        //         setIsLoaded(true);
        //         console.log(result)
        //         setUsers(result)
        //         // console.log(users);
        //         // console.log(result);
        //     }, (error) => {
        //         setIsLoaded(true);
        //     })
        // }
    }
    return (
        <div>
            <h1>Users</h1>
            {show ? <form>
                Name: <input type="text" onChange={(e) => setName(e.target.value)} value={name} />


                Username: <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} /> <br />


                Email: <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />


                Address:


                Street: <input type="text" onChange={(e) => {
                    var address = { ...address }
                    address.street = e.target.value;
                    // this.setState({ address })
                    setAddress(address)
                }} value={address.street} /> <br />



                Suite: <input type="text" onChange={(e) => {
                    var address = { ...address }
                    address.suite = e.target.value;
                    // this.setState({ address })
                    setAddress(address)
                }} value={address.suite} />


                City: <input type="text" onChange={(e) => {
                    var address = { ...address }
                    address.city = e.target.value;
                    // this.setState({ address })
                    setAddress(address)
                }} value={address.city} /> <br />


                Zipcode: <input type="text" onChange={(e) => {
                    var address = { ...address }
                    address.zipcode = e.target.value;
                    setAddress(address)
                    // this.setState({ address })
                }} value={address.zipcode} /> <br />

                GEO: <br />

                Lat: <input type="text" onChange={(e) => {
                    var address = { ...address }
                    address.geo.lat = e.target.value;
                    setAddress(address)
                    // this.setState({ address })
                }} value={address.geo.lat} />

                Long: <input type="text" onChange={(e) => {
                    var address = { ...address }
                    address.geo.long = e.target.value;
                    setAddress(address)
                    // this.setState({ address })
                }} value={address.geo.long} /> <br />

                Phone: <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} />

                website: <input type="text" onChange={(e) => setWebsite(e.target.value)} value={website} /> <br />


                Company: <br />


                company-name: <input type="text" onChange={(e) => {
                    var company = { ...company }
                    company.companyname = e.target.value;
                    // this.setState({ company })
                    setCompany(company)
                }} value={company.companyname} />


                catch-phrase: <input type="text" onChange={(e) => {
                    var company = { ...company }
                    company.catchphrase = e.target.value;
                    // this.setState({ company })
                    setCompany(company)
                }} value={company.catchphrase} />


                bs: <input type="text" onChange={(e) => {
                    var company = { ...company }
                    company.bs = e.target.value;
                    // this.setState({ company })
                    setCompany(company)
                }} value={company.bs} /> <br />


                <button type="submit" onClick={addDataToApi}>Add Data</button>
                <button type="button" onClick={(e) => { e.preventDefault(); setShow(false); setShowAddButton(true) }}>Cancel</button>
            </form> : null}
            {showAddButton ? <button type="submit" onClick={AddDataFunc}>Add Data</button> : null}

            {editShow ?
                <form onSubmit={editAgainHandler}>


                    Name: <input type="text" onChange={(e) => {
                        var updatedList = { ...updatedList }
                        updatedList[0].name = e.target.value;
                        this.setState({ updatedList })
                    }} value={updatedList[0].name} />


                    Email: <input type="text" onChange={(e) => {
                        var updatedList = { ...updatedList }
                        updatedList[0].email = e.target.value;
                        this.setState({ updatedList })
                    }} value={updatedList[0].email} />



                    <button type="submit">Update Done</button>
                    <button type="button" onClick={() => setEditShow(false)}>Cancel</button>
                </form> : null}
            <Input.Search placeholder="Enter What You Want To Search Here" onChange={(e) => setSearchVal(e.target.value)} enterbutton />
            <Table columns={columns} pagination={{ pageSize: '5' }} dataSource={searchHandler(users)} />
        </div>
    )
}

export default UsersFunc
