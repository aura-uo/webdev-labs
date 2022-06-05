import React from 'react';

const Comment = ({username, text}) => {
    if (text.length > 250){
        return(
            <div>
                <p><strong>{username}</strong> {text.substring(0, 250)+"..."}</p>
                <a href="/" className='link' inactive="true">more</a>
            </div>
        )
    } else {
        return(
            <p><strong>{username}</strong> {text}</p>
        )
    }
}

const Comments = ({comments}) => {
    const len = comments.length;
    if (len > 2) {
        return (
            <div>
                <Comment 
                    key={comments[0].id} 
                    username={comments[0].username}
                    text={comments[0].text}
                />
                <a href="/" className="link" inactive="true">{`View all ${len} comments`}</a>
                <Comment 
                    key={comments[len-1].id} 
                    username={comments[len-1].username}
                    text={comments[len-1].text}
                />
            </div>
        );
    } else {
        return (
            comments.map(comment => {
                return (
                    <Comment 
                        key={comment.id} 
                        username={comment.username}
                        text={comment.text}
                    />
                )
            })
        )
    }
};

export default Comments;