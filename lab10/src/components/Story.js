import React from 'react';

const Story = ({story}) => {
    console.log(story)
    return (
        <div className='story'>
            <img src={story.user.thumb_url} className="pic" alt={"profile pic for " + story.user.username} />
            <p>{ story.user.username }</p>
        </div>
    );     
}

export default Story;