import React from 'react';
import { Link } from 'react-router-dom';

class Diamond extends React.Component {
  constructor(props) {
    super(props);
    this.state = { diamonds: [] };
  }
  componentDidMount() {
    console.log(this.props);
    fetch('/diamonds.json')
      .then((Response) => Response.json())
      .then((response) => {
        console.log(response);
        this.setState({
            diamonds: response.data,
        });
      });
  }
  render() {
    const filters = [
      {shape: 'RD', color: 'F', clarity: 'VS1', lab: 'GIA', polish: 'VG' },
      {weight: 0.90, length: 6.06, width: 6.06, price: 100 },
    ];

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

        <p>
          <b>Filter by: </b>
          <Link to={`/diamonds/${filters[0].shape}/${filters[0].color}/${filters[0].clarity}/${filters[0].lab}/${filters[0].polish}`} href>
            Shape, color, clarity, lab and polish
          </Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link to={`/diamonds/${filters[1].weight}/${filters[1].length}/${filters[1].width}/${filters[1].price}`} href>
            Weight, Length, Width and Price
          </Link>
        </p>

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

export default Diamond;
