import React, {useState, useEffect} from 'react';
import { getHeaders } from '../utils';

const Profile = () => {
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
        <div class="sug-user">
            <img src={profile.thumb_url} alt="profile pic" />
            <h1>{profile.username}</h1>
        </div>
    );     
}

export default Profile;