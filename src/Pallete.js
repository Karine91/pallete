import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';

import './Pallete.css';

export class Pallete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
        };
    }

    changeLevel = level => {
        this.setState({ level });
    };

    render() {
        const { colors } = this.props.pallete;
        const { level } = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox key={color.id} background={color.hex} name={color.name} />
        ));
        return (
            <div className="Pallete">
                <Navbar level={level} changeLevel={this.changeLevel} />
                <div className="Pallete-colors">{colorBoxes}</div>
            </div>
        );
    }
}

export default Pallete;
