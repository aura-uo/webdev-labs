import React, {useState, useEffect} from 'react';

const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        // Your code here
      }, [profile]);

    if (!profile) {
        return (
            <div>Before Profile fetched from server</div>  
        );
    }
    return (
        <div>
            <div>List of Profile goes here...</div>
            {/*
            this.state.Profile.map(post => {
                return <Post post={post} key={'post-' + post.id} />
            }
            */}
        </div>
    );     
}

export default Profile;