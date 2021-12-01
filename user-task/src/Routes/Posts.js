import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [postEdit, setPostEdit] = useState([]);
    const [editShow, setEditShow] = useState(false);
    const [addShow, setAddShow] = useState(false);
    const [buttonAddShow, setButtonAddShow] = useState(true);
    const [userId, setUserId] = useState();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    useEffect(()=>{
        axios.get('http://localhost:3005/posts').then((result)=>{
            // console.log(result.data)
            setPosts(result.data);
        })
    }, [])

    function editHandler(post){
        setEditShow(true);
        setPostEdit([post]);
    }

    function editAgainHandler(e){
        e.preventDefault();
        axios.put(`http://localhost:3005/posts/${postEdit[0].id}`, {...postEdit[0]}).then(()=>{
            axios.get('http://localhost:3005/posts')
            // .then((result)=>{
                // console.log(result.data)
                // setPosts(result.data);
            // })
        })
        setEditShow(false);
    }

    function deleteHandler(post){
        axios.delete(`http://localhost:3005/posts/${post.id}`).then(()=>{
            axios.get('http://localhost:3005/posts').then((result)=>{
                // console.log(result.data)
                setPosts(result.data);
            })
        })
    }

    function addData(e){
        e.preventDefault();
        if(userId && title && body){
        axios.post('http://localhost:3005/posts', {userId, title, body}).then(()=>{
            axios.get('http://localhost:3005/posts').then((result)=>{
                // console.log(result.data)
                setPosts(result.data);
            })      
        })
        setAddShow(false);
        setButtonAddShow(true);
        setBody("");
        setUserId();
        setTitle("");
    }
    else{
        alert("Data Daalo");
        // setAddShow(false);
    }
    }
    return (
        <>

        {addShow?
        <form onSubmit={addData}>
            UserID: <input type="number" onChange={(e)=> setUserId(e.target.value)} value={userId} /> <br /> <br />
            Title: <input type="text" onChange={(e)=> setTitle(e.target.value)} value={title} /> <br /> <br />
            Body: <input type="text" onChange={(e)=> setBody(e.target.value)} value={body}/> <br /> <br />
            <button type="submit">Add</button>
            <button onClick={()=>{setAddShow(false); setButtonAddShow(true)}}>Cancel</button> <hr />
        </form>
        :null}
        {editShow?
        <form onSubmit={editAgainHandler}>
            Title: <input type="text" onChange={(e)=> {
                var postNew = [...postEdit];
                postNew[0].title = e.target.value;
                setPostEdit(postNew);
            }} value={postEdit[0].title} style={{width: "500px"}}/> <br/> <br />


            Body: <input type="text"  onChange={(e)=> {
                var postNew = [...postEdit];
                postNew[0].body = e.target.value;
                setPostEdit(postNew);
            }} value={postEdit[0].body} style={{width: "500px"}} /> <br/>


            <button type="submit"> Edit Done</button>
            <button onClick={()=>setEditShow(false)}> Cancel</button>
            <hr/>
        </form>:null}
        <div>
        {buttonAddShow? <button onClick={()=>{setAddShow(true); setButtonAddShow(false);}}>Add New Data</button> : null}
            {posts.map((post)=>{
                return(
                    <ul key={post.id} style={{listStyle: "none"}}>
                        Title: <li>{post.title}</li> <br />
                        Body: <li>{post.body}</li>
                        <button onClick={()=>editHandler(post)}>Edit</button>
                        <button onClick={()=>deleteHandler(post)}>Delete</button>
                        <hr />
                    </ul>
                )
            })}
        </div>
        </>
    )
}

export default Posts
