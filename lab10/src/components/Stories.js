import React, {useState, useEffect} from 'react';
import Story from './Story';
import { getHeaders } from '../utils';

const Stories = () => {
    const [stories, setStories] = useState(null);

    useEffect(() => {
        const url = '/api/stories/';
        fetch(url, {
            method: "GET",
            headers: getHeaders(),
        })
        .then(response => response.json())
        .then(data => setStories(data))
    }, []);

    if (!stories) {
        return (
            <div>Loading...</div>  
        );
    }
    
    return (
        <div className='stories-inner'>
            {stories.map(story => <Story key={`story-${story.id}`} story={story}/>)}  
        </div>
    ); 
}

export default Stories;