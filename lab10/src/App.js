import React from 'react';
import Profile from './components/Profile';
import Stories from './components/Stories';
import Navbar from './components/Navbar';
import Suggestions from './components/Suggestions';
import Posts from './components/Posts';

class App extends React.Component {  

    render () {
        return (
            <div>
                <nav className="main-nav">
                    <h1>Photo App</h1>
                    <Navbar title="Photo App" username="test_user"/>
                </nav>

                <aside>
                    <header>
                        <Profile/>
                    </header>
                    <div className="suggestions">
                        <p className="suggestion-text">Suggestions for you</p>
                        <section>
                            <Suggestions />
                        </section>
                    </div>
                </aside>

                <main className="content">
                    <header className="stories">
                        <Stories />
                    </header>
                    <div id="posts">
                        <Posts />
                    </div>
                </main>
            </div>
        );
    }
}

export default App;