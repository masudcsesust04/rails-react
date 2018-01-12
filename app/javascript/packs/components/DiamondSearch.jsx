import React from 'react';

class DiamondSearch extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params);
    this.state = { diamonds: [] };
  }
  componentDidMount() {
    console.log(this.props);
    const urlParams = `shape=${this.props.match.params.shape}&color=${this.props.match.params.color}&clarity=${this.props.match.params.clarity}&lab=${this.props.match.params.lab}&polish=${this.props.match.params.polish}`;

    fetch(`/diamonds/search.json?${urlParams}`, { method: 'GET' })
      .then((Response) => Response.json())
      .then((response) => {
        console.log(response);
        this.setState({
          diamonds: response.data,
        });
      });
  }
  render() {
    const rows = this.state.diamonds.map(diamond => (
      <tr key={diamond.id}>
        <td>{diamond.id}</td>
        <td>{diamond.shape}</td>
        <td>{diamond.weight}</td>
        <td>{diamond.color}</td>
        <td>{diamond.clarity}</td>
        <td>{diamond.length}</td>
        <td>{diamond.width}</td>
        <td>{diamond.lab}</td>
        <td>{diamond.price}</td>
        <td>{diamond.polish}</td>
        <td><a href={`/diamonds/${diamond.id}/`}>View</a></td>
      </tr>
    ));
    return (
      <div>
        <h3>List of diamond</h3>

        <table className="table">
          <thead>
            <tr>
              <th width="5%">#</th>
              <th width="10%">Shape</th>
              <th width="10%">Width</th>
              <th width="10%">Color</th>
              <th width="10%">Clarity</th>
              <th width="10%">Length</th>
              <th width="10%">Width</th>
              <th width="10%">Lab</th>
              <th width="10%">Price</th>
              <th width="10%">Polish</th>
              <th width="5%">Action</th>
            </tr>
          </thead>

          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DiamondSearch;
