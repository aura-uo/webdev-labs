import React from 'react';
import {getHeaders} from '../utils';

const postLike = (postId, redraw) => {
    fetch("/api/posts/likes/", {
                method: "POST",
                headers: getHeaders(),
                body: JSON.stringify({"post_id": postId})
            })
            .then(response => response.json())
            .then(data => redraw());
}

const removeLike = (likeId, redraw) => {
    fetch(`/api/posts/likes/${likeId}`, {
        method: "DELETE",
        headers: getHeaders()
    })
    .then(response => response.json())
    .then(data => redraw());
}

const LikeButton = ({likeId, postId, redraw}) => {   
    const toggleLike = () => likeId ? removeLike(likeId, redraw) : postLike(postId, redraw);
    
    return(
        <button role="switch"
                className="like" 
                aria-label="Like Button" 
                aria-checked={likeId ? true : false}
                onClick={toggleLike}
        >
            <i className={likeId ? 'fas fa-heart' : 'far fa-heart'}></i>                        
        </button>
    )
};

export default LikeButton;