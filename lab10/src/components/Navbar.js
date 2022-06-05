import React, {useState, useEffect} from 'react';
import { getHeaders } from '../utils';

const Navbar = ({title}) => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const url = '/api/profile/'
        fetch(url, {
            method: "GET",
            headers: getHeaders(),
        })
        .then(response => response.json())
        .then(data => setProfile(data));
    }, []);

    if (!profile) {
        return (
            <div>Loading...</div>  
        );
    }

    return (
        <nav className="main-nav">
            <h1>{title}</h1>
            <ul>
                <li>
                    {window.location.pathname === '/api' ? 
                        <a href="/">Home</a> : <a href="/api">API Docs</a>}
                    {/* <a href="/">Home/ API Docs</a> */}
                    {/* {% if request.url_rule.endpoint == 'api_docs' %}
                        
                    {% else %}
                        
                    {% endif %} */}
                </li>
                <li><span>{profile.username}</span></li>
                <li><a href="/logout">Sign out</a></li>
            </ul>
            
        </nav>
        
    );     
}

export default Navbar;