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
                <Navbar title="Photo App"/>
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