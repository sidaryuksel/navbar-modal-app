import React from 'react';
import Header from './Header';
import Register from './Register'; 

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <Header />
                <Register />
            </div>
        );
    };
};

export default App;