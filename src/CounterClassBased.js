import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initCount || 0
    };
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({
          count: this.state.count + 1
        })}>
          Click me
        </button>
      </div>
    );
  }
}
