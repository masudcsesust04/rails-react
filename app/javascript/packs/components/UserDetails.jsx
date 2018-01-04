import React from "react";

export class UserDetails extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.match.params);
    }

    render() {
        return (
            <div>
                <h1>User details</h1>
                <p> User id# {this.props.match.params.id}</p>
                <p> User name# {this.props.match.params.name}</p>
            </div>
        );
    }
}
