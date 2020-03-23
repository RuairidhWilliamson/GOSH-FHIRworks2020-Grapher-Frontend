import React from 'react';
import {Dropdown, DropdownButton, Row} from 'react-bootstrap';
import Graph from './graph';
import Dimensions from '../utils/graphDimensions';

export default class GraphInterface extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dimension: this.props.dimension,
        }
    }
    render() {
        return <>
            <Graph graph={this.props.graph} backgroundColor={this.props.backgroundColor} {...Dimensions[this.state.dimension]}/>
            <DropdownButton title="Change Axis">
                {Object.keys(Dimensions).map(el => <Dropdown.Item onSelect={() => this.setState({ dimension: el })} key={el}>{Dimensions[el].label}</Dropdown.Item>)}
            </DropdownButton>
        </>;
    }
}