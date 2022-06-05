import React from 'react';
import {getHeaders} from '../utils';

const postBookmark = (postId, redraw) => {
    fetch("/api/bookmarks/", {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({"post_id": postId})
    })
    .then(response => response.json())
    .then(data => redraw());
}

const removeBookmark = (bookmarkId, redraw) => {
    fetch(`/api/bookmarks/${bookmarkId}`, {
        method: "DELETE",
        headers: getHeaders()
    })
    .then(response => response.json())
    .then(data => redraw());
}

const BookmarkButton = ({bookmarkId, postId, redraw}) => {   
    const toggleBookmark = () => bookmarkId ? removeBookmark(bookmarkId, redraw) : postBookmark(postId, redraw);
    
    return(
        <button role="switch"
                className="bookmark" 
                aria-label="Bookmark Button" 
                aria-checked={bookmarkId ? true : false}
                onClick={toggleBookmark}
        >
            <i className={bookmarkId ? 'fas fa-bookmark' : 'far fa-bookmark'}></i>                        
        </button>
    )
};

export default BookmarkButton;