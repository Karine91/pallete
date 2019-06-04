import React from 'react';
import Pallete from './Pallete';
import seedColors from './seedColors';

function App() {
    return (
        <div className="App">
            <Pallete {...seedColors[4]} />
        </div>
    );
}

export default App;
