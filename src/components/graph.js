import React from 'react';

const capitalize = x => `${x}`.replace(/^\w/, c => c.toUpperCase());

export default class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.componentWillReceiveProps(props);
    }

    componentWillReceiveProps(props) {
        if (props.api && props.api !== this.state.api) {
            props.api().then(response => {
                this.setState({
                    api: props.api,
                    labels: response.data.map(el => typeof props.groupSize === 'number' && props.groupSize !== 1 ? `${el.key} - ${el.key + props.groupSize}` : el.key).map(capitalize),
                    data: response.data.map(el => el.freq),
                });
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.data !== this.state.data;
    }

    render() {
        const data = {
            labels: this.state.labels,
            datasets: [{
                data: this.state.data,
                label: this.props.label,
                backgroundColor: this.props.backgroundColor,
            }]
        };
        const Graph = this.props.graph;
        return <>
            {this.state.data && <Graph data={data}/>}
        </>;
    }
}