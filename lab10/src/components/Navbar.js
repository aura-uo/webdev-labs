import React, {useState, useEffect} from 'react';

const Navbar = ({title, username}) => {
    const [navbar, setNavbar] = useState(null);

    useEffect(() => {
        // Your code here
    }, [navbar]);

    if (!navbar) {
        return (
            <div>Before Navbar fetched from server</div>  
        );
    }
    return (
        <div>
            <div>List of Navbar goes here...</div>
            {/*
            this.state.Navbar.map(post => {
                return <Post post={post} key={'post-' + post.id} />
            }
            */}
        </div>
    );     
}

export default Navbar;