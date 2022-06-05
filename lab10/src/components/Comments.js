import React from 'react';

const Comment = ({username, text, timestamp}) => {
    if (text.length > 250){
        return(
            <div>
                <p><strong>{username}</strong> {text.substring(0, 250)+"..."}</p>
                <a href="/" className='link' inactive="true">more</a>
                <p className='timestamp'>{timestamp}</p>
            </div>
        )
    } else {
        return(
            <div>
                <p><strong>{username}</strong> {text}</p>
                <p className='timestamp'>{timestamp}</p>
            </div>
        )
    }
}

const Comments = ({comments}) => {
    const len = comments.length;
    if (len >= 2) {
        return (
            <div>
                <a href="/" className="link" inactive="true">{`View all ${len} comments`}</a>
                <Comment 
                    key={comments[len-1].id} 
                    username={comments[len-1].user.username}
                    text={comments[len-1].text}
                    timestamp={comments[len-1].display_time}
                />
            </div>
        );
    } else {
        return (
            comments.map(comment => {
                return (
                    <Comment 
                        key={comment.id} 
                        username={comment.user.username}
                        text={comment.text}
                        timestamp={comment.display_time}
                    />
                )
            })
        )
    }
};

export default Comments;