import React, { useState } from 'react';
import { getHeaders } from '../utils';

const AddComment = ({postId, redraw}) => {
    const [text, setText] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (text){
            const postData = {
                "post_id": postId,
                "text": text,
            };
            
            fetch("/api/comments", {
                    method: "POST",
                    headers: getHeaders(),
                    body: JSON.stringify(postData),
                })
                .then(response => response.json())
                .then(data => {
                    redraw()
                    e.target.children[1].children[0].value = "";
                });
        }
    }

    return (
        <form onSubmit={onFormSubmit}>
            <i className="far fa-face-smile"></i>
            <div className="add-comment">
                <input 
                    id={`add-comment-${postId}`} 
                    className="input-holder" 
                    placeholder="Add a comment..." 
                    type="text"
                    onChange={(e) => setText(e.target.value)}></input>
                <button type="submit" className='link'>Post</button>
            </div>
            <label 
                for={`add-comment-${postId}`}
                hidden>
                Comment
            </label>
        </form>
    )
}

export default AddComment;