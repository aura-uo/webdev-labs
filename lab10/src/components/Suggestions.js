import React, {useState, useEffect} from 'react';
import { getHeaders } from '../utils';
import Suggestion from './Suggestion';

const Suggestions = () => {
    const [suggestions, setSuggestions] = useState(null);

    useEffect(() => {
        fetch("/api/suggestions/", {
            method: "GET",
            headers: getHeaders(),
        })
        .then(response => response.json())
        .then(data => setSuggestions(data))
    }, []);
    
    if (!suggestions) {
        return (
            <div>Loading...</div>  
        );
    }
    return (
        <div>
            {suggestions.map(suggestion => <Suggestion key={`suggestion-${suggestion.id}`}  suggestion={suggestion}/>)}
        </div>
    );     
}

export default Suggestions;