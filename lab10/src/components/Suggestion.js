import React from 'react';

const Suggestion = ({suggestion}) => {
    return (
        <div className='suggestion'>
            <img 
                alt={`Suggestion User ${suggestion.username}`}
                src={suggestion.thumb_url}
                className="pic"
            />
            <div>
                <p>{suggestion.username}</p>
                <p>Suggested for you</p>
            </div>
            <button>Follow</button>
        </div>
    );
}

export default Suggestion;