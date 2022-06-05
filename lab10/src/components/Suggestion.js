import React, { useState } from 'react';
import { getHeaders } from '../utils';

const Suggestion = ({suggestion}) => {
    const [followId, setFollowId] = useState(null);

    const follow = () => {
        fetch("/api/following/", {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify({"user_id": suggestion.id})
        })
        .then(response => response.json())
        .then(data => setFollowId(data.id));
    }

    const unfollow = () => {
        fetch(`/api/following/${followId}`, {
            method: "DELETE",
            headers: getHeaders(),
        })
        .then(response => response.json())
        .then(data => setFollowId(null));
    }

    const toggleFollow = () => followId ? unfollow() : follow();

    return (
        <div className='suggestion'>
            <div className='suggestion-info'>
                <img 
                    alt={`Suggestion User ${suggestion.username}`}
                    src={suggestion.thumb_url}
                    className="pic"
                />
                <div>
                    <p>{suggestion.username}</p>
                    <p>Suggested for you</p>
                </div>
            </div>
            <button 
                role="switch"
                className={`link following ${followId && "active"}`} 
                aria-label="Follow Button" 
                aria-checked={followId ? true : false}
                onClick={toggleFollow}
            >
                {followId ? "unfollow" : "follow"}
            </button>
        </div>
    );
}

export default Suggestion;