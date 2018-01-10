import React from 'react';

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.match.params);
  }

  render() {
    return (
      <div>
        <h1>User details</h1>
        <p> ID: {this.props.match.params.id}</p>
        <p> Name: {this.props.match.params.name}</p>
      </div>
    );
  }
}

export default UserDetails;
