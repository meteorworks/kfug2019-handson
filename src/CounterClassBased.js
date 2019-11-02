import React from 'react';

class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState(this.state.count + 1)}>
          Click me
        </button>
      </div>
    );
  }
}
