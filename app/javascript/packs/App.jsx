import React, { Component } from 'react';

class App extends Component {

  state = {
    counter: 0    
  }

  increment = () => {
    let { counter } = this.state;
    counter = counter + 1;
    this.setState({
      counter
    });
  }

  render() {
    let { counter } = this.state;
    return (
      <div>        
          <h1> Tesing component </h1>   
          <h1> Counter: {counter} </h1>   
          <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default App;