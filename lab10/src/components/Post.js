import React, { useState } from "react";
import LikeButton from "./LikeButton";
import BookmarkButton from "./BookmarkButton";
import Comments from "./Comments";
import AddComment from "./AddComment";
import { getHeaders } from "../utils";

const Post = ({post}) => {
    const [newPost, setNewPost] = useState(post);
    
    const redraw = () => {
        const url = "/api/posts/"+post.id;
        fetch(url, {
            method: "GET",
            headers: getHeaders(),
        })
        .then(response => response.json())
        .then(data => setNewPost(data));
    }

    if (post) {
        return (
            <div className="card">
                <div className="header">
                    <h3>{ newPost.user.username }</h3>
                    <i className="fa fa-dots"></i>
                </div>
                <img 
                    alt={'Image posted by ' +  newPost.user.username } 
                    src={newPost.image_url}
                />
                <div className="info">
                        <div className="buttons">
                            <div>
                                <LikeButton 
                                    likeId={newPost.current_user_like_id}
                                    postId={newPost.id}
                                    redraw={redraw}
                                />
                                <button aria-label="Comment" className="comment-bubble">
                                    <i className="far fa-comment"></i>
                                </button>
                                <button aria-label="Share" className="share-bubble">
                                    <i className="far fa-paper-plane"></i>
                                </button>
                            </div>
                            <BookmarkButton
                                bookmarkId={newPost.current_user_bookmark_id}
                                postId={newPost.id}
                                redraw={redraw}
                            />    
                        </div>
                        <p className="likes">
                            <strong>
                                {newPost.likes.length === 1 ? `1 like`: `${newPost.likes.length} likes`}
                            </strong>
                        </p>
                        <div>
                            <p><strong>{newPost.user.username}</strong> { newPost.caption }</p>
                            <p className="timestamp">{ newPost.display_time }</p>
                        </div>
                        <div className="comments">
                            <Comments comments={ newPost.comments }/>
                        </div>
                        <AddComment postId={newPost.id} redraw={redraw}/>
                    </div>
            </div>
        )
    } else {
        return <div>Loading...</div>;
    }
}

export default Post;