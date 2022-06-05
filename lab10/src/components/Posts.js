import React, {useState, useEffect} from 'react';
import { getHeaders } from '../utils';
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetch('/api/posts', {
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(data => setPosts(data))
    });

    if (!posts) {
        return (
            <div>Loading....</div>  
        );
    }
    return (
        <div>
            {posts.map(post => <Post post={post} key={'post-' + post.id} />)}   
        </div>
    );     
}

export default Posts;