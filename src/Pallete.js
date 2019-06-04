import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
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
                <Slider
                    defaultValue={this.state.level}
                    min={100}
                    max={900}
                    step={100}
                    onAfterChange={this.changeLevel}
                />
                <div className="Pallete-colors">{colorBoxes}</div>
            </div>
        );
    }
}

export default Pallete;
