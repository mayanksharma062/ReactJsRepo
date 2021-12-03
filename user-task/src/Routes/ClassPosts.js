import React, { Component } from 'react'

export class Posts extends Component {
    constructor(){
        super();
        this.state={posts:[]}
    }

    componentDidMount(){
        fetch('http://localhost:3005/posts').then(res => res.json()).then((result)=>{
            this.setState({posts: result})
            console.log(this.state.posts);
            console.log(result);
        })
    }


    render() {
        const {posts} = this.state;
        return (
            <div>
                <h1>Posts</h1>
                {posts.map(post=> <li style={{listStyle: "none"}} key={post.id}> Title: {post.title}</li>)}
            </div>
        )
    }
}

export default Posts
