import React from 'react';

class Root extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <h1>Welcome!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Root;
