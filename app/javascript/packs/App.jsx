import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.increment = this.increment.bind(this);
  }

  increment() {
    let { counter } = this.state;
    counter += 1;
    this.setState({ counter });
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1> Testing component </h1>
        <h1> Counter: {counter} </h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default App;
