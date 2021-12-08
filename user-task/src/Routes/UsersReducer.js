import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios';
import "antd/dist/antd.css"
import { Table, Input } from 'antd';

const initialState = {
    users: [],
    show: false,
    showAddButton: true,
    editShow: false,
    searchValue: "",
    isLoaded: true,
    company: {
        companyname: "",
        catchPhrase: "",
        bs: ""
    },
    name: "",
    username: "",
    email: "",
    website: "",
    phone: "",
    address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo:{
            lat: "",
            lng: ""
        }
    }
};

const reducer = (state, action)=>{
    switch(action.type){
        case 'getAllUsers':
            return {...state, users:action.value}
        case 'show':
            return {...state, show: !state.show}
        case 'editShow':
            return {...state, editShow: !state.editShow}
        case 'showAddButton':
            return {...state, showAddButton: !state.showAddButton}
        case 'searchValue':
            return {...state, searchValue: action.value}
        case 'isLoaded':
            return {...state, isLoaded: !state.isLoaded}
        case 'companyname':
            return {...state, company: {...state.company,companyname: action.value}}
        case 'catchPhrase':
            return {...state, company: {...state.company, catchPhrase: action.value}}
        case 'bs':
            return {...state, company: {...state.company, bs: action.value}}
        case 'phone':
            return {...state, phone: action.value}
        case 'name':
            return {...state, name: action.value}
        case 'username':
            return {...state, username: action.value}
        case 'email':
            return {...state, email: action.value}
        case 'website':
            return {...state, website: action.value}
        case 'street':
            return {...state, address: {...state.address, street: action.value}}
        case 'suite':
            return {...state, address: {...state.address, suite: action.value}}
        case 'city':
            return {...state, address: {...state.address, city: action.value}}
        case 'zipcode':
            return {...state, address: {...state.address, zipcode: action.value}}
        case 'lat':
            return {...state, address: {...state.address, geo:{...state.address.geo,lat: action.value}}}
        case 'lng':
            return {...state, address: {...state.address, geo:{...state.address.geo, lng: action.value}}}
        default:
            return state
    }
}

function UsersReducer() {
    const [updatedList, setUpdatedList] = useState([]);

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        fetch('http://localhost:3005/users').then(res => {
            return res.json()
        }).then((result) => {
            dispatch({type: 'isLoaded'})
            dispatch({type:"getAllUsers", value: result})
        }, (error) => {
            dispatch({type: 'isLoaded'})
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
            render: (users) => { return (<button onClick={() => {console.log(users);editHandler(users)}}>Edit</button>) }
        },
        {
            title: "Buttons",
            key: 'id',
            render: (users) => { return (<button onClick={() => deleteHandler(users)}>Delete</button>) }
        },
    ]

    const editHandler = (user) => {
        localStorage.setItem('usersInfo', JSON.stringify(user));
        dispatch({type: "editShow"})
        console.log(state.editShow)
        editHandlerMaterial();

    }

    const getdata = () => {
        fetch('http://localhost:3005/users').then(res => {
            return res.json()
        }).then((result) => {
            dispatch({type: "getAllUsers", value: result})
        })
    }

    const AddDataFunc = (e) => {
        e.preventDefault();
        dispatch({type: "show"})
        dispatch({type: "showAddButton"})
    }

    const addDataToApi = (e) => {
        e.preventDefault();
        console.log("Updated!")
        if (state.name && state.email && state.username && state.address.street && state.address.suite && state.address.city && state.address.zipcode && state.address.geo.lat && state.address.geo.lng && state.company.companyname && state.company.catchPhrase && state.company.bs && state.website && state.phone) {
            axios.post('http://localhost:3005/users', { name: state.name, email: state.email, username: state.username, address: { street: state.address.street, suite: state.address.suite, city: state.address.city, zipcode: state.address.zipcode, geo: { lat: state.address.geo.lat, lng: state.address.geo.lng } }, phone: state.phone, website: state.website, company: { name: state.company.companyname, catchPhrase: state.company.catchPhrase, bs: state.company.bs } }).then(() => {
                getdata();
            });
            dispatch({type: 'name', value: ""})
            dispatch({type: 'email', value: ""})
            dispatch({type: "show"})
            dispatch({type: "showAddButton"})
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
        var www = JSON.parse(localStorage.getItem('usersInfo'));
        console.log(www)
        setUpdatedList([www]);
    }
    const editAgainHandler = (e) => {
        e.preventDefault();
        console.log(updatedList)
        axios.put(`http://localhost:3005/users/${updatedList[0].id}`, { ...updatedList[0] }).then(() => {
            getdata();
        });
        dispatch({type: 'name', value: ""})
        dispatch({type: 'email', value: ""})
        dispatch({type: "show"})
        dispatch({type: "editShow"})
    }
    const searchHandler = (users) => {
        let totalCuratedUsers = users.filter((val) => val.name.toLowerCase().includes(state.searchValue.trim().toLowerCase()));
        console.log(users)
        return totalCuratedUsers;
    }
    return (
        <div>
            <h1>Users</h1>
            {state.show ? <form>
                Name: <input type="text" onChange={(e) => dispatch({type: 'name', value: e.target.value})} value={state.name} />


                Username: <input type="text" onChange={(e) => dispatch({type: 'username', value: e.target.value})} value={state.username} /> <br />


                Email: <input type="text" onChange={(e) =>dispatch({type: 'email', value: e.target.value})} value={state.email} />


                Address:


                Street: <input type="text" onChange={(e) => {
                    dispatch({type: 'street', value:e.target.value})
                }} value={state.address.street} /> <br />



                Suite: <input type="text" onChange={(e) => {
                    dispatch({type: 'suite', value:e.target.value})
                }} value={state.address.suite} />


                City: <input type="text" onChange={(e) => {
                    dispatch({type: 'city', value:e.target.value})
                }} value={state.address.city} /> <br />


                Zipcode: <input type="text" onChange={(e) => {
                    dispatch({type: 'zipcode', value:e.target.value})
                }} value={state.address.zipcode} /> <br />

                GEO: <br />

                Lat: <input type="text" onChange={(e) => {
                    dispatch({type: 'lat', value:e.target.value})
                }} value={state.address.geo.lat} />

                Long: <input type="text" onChange={(e) => {
                    dispatch({type: 'lng', value:e.target.value})
                }} value={state.address.geo.lng} /> <br />

                Phone: <input type="text" onChange={(e) =>dispatch({type: 'phone', value:e.target.value})} value={state.phone} />

                website: <input type="text" onChange={(e) => dispatch({type: 'website', value:e.target.value})} value={state.website} /> <br />


                Company: <br />


                company-name: <input type="text" onChange={(e) => {
                    dispatch({type: 'companyname', value:e.target.value})

                }} value={state.company.companyname} />


                catch-phrase: <input type="text" onChange={(e) => {
                    dispatch({type: 'catchPhrase', value:e.target.value})
                }} value={state.company.catchPhrase} />


                bs: <input type="text" onChange={(e) => {
                    dispatch({type: 'bs', value:e.target.value})
                }} value={state.company.bs} /> <br />


                <button type="submit" onClick={addDataToApi}>Add Data</button>
                <button type="button" onClick={(e) => { e.preventDefault(); dispatch({type: "show"}); dispatch({type: "showAddButton"}) }}>Cancel</button>
            </form> : null}
            {state.showAddButton ? <button type="submit" onClick={AddDataFunc}>Add Data</button> : null}

            {state.editShow ?
                <form onSubmit={editAgainHandler}>


                    Name: <input type="text" onChange={(e) => {
                        var updatedList = { ...updatedList }
                        updatedList[0].name = e.target.value;
                        // this.setState({ updatedList })
                        setUpdatedList(updatedList)
                    }} value={updatedList[0].name} />


                    Email: <input type="text" onChange={(e) => {
                        var updatedList = { ...updatedList }
                        updatedList[0].email = e.target.value;
                        // this.setState({ updatedList })
                        setUpdatedList(updatedList)
                    }} value={updatedList[0].email} />



                    <button type="submit">Update Done</button>
                    <button type="button" onClick={() => dispatch({type: "editShow"})}>Cancel</button>
                </form> : null}
            <Input.Search placeholder="Enter What You Want To Search Here" onChange={(e) => dispatch({type: 'searchValue', value:e.target.value})} enterbutton />
            <Table columns={columns} pagination={{ pageSize: '5' }} dataSource={searchHandler(state.users)} />
        </div>
    )
}

export default UsersReducer;

