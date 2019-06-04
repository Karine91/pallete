import React from 'react';
import Pallete from './Pallete';
import seedColors from './seedColors';
import generatePalette from './colorHelpers';

function App() {
    return (
        <div className="App">
            <Pallete pallete={generatePalette(seedColors[4])} />
        </div>
    );
}

export default App;
