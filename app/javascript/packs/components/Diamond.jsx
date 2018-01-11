import React from 'react';

class Diamond extends React.Component {
  render() {
    const diamonds = [
      { id: 1, shape: 'RD', weight: 0.90, color: 'F', clarity: 'VS1', length: 6.06, width: 6.06, lab: 'GIA', price: 100, polish: 'VG' },
      { id: 2, shape: 'RD', weight: 0.80, color: 'R', clarity: 'VS2', length: 5.06, width: 6.06, lab: 'GIA', price: 80, polish: 'VG' },
      { id: 3, shape: 'RD', weight: 0.70, color: 'G', clarity: 'VS3', length: 6.06, width: 6.06, lab: 'GIA', price: 90, polish: 'VG' },
      { id: 4, shape: 'RD', weight: 0.60, color: 'B', clarity: 'VS1', length: 6.06, width: 6.06, lab: 'GIA', price: 300, polish: 'VG' },
      { id: 5, shape: 'AS', weight: 0.90, color: 'F', clarity: 'VS2', length: 6.06, width: 6.06, lab: 'GIA', price: 90, polish: 'VG' },
      { id: 6, shape: 'AS', weight: 0.80, color: 'G', clarity: 'VS3', length: 6.06, width: 6.06, lab: 'GIA', price: 50, polish: 'VG' },
      { id: 7, shape: 'AS', weight: 0.70, color: 'B', clarity: 'VS1', length: 6.06, width: 6.06, lab: 'GIA', price: 500, polish: 'VG' },
      { id: 8, shape: 'PR', weight: 0.90, color: 'F', clarity: 'VS2', length: 6.06, width: 6.06, lab: 'GIA', price: 40, polish: 'VG' },
      { id: 9, shape: 'PR', weight: 0.80, color: 'R', clarity: 'VS3', length: 6.06, width: 6.06, lab: 'GIA', price: 95, polish: 'VG' },
      { id: 10, shape: 'PR', weight: 0.70, color: 'G', clarity: 'VS1', length: 6.06, width: 6.06, lab: 'GIA', price: 90, polish: 'VG' },
      { id: 11, shape: 'CU', weight: 0.90, color: 'R', clarity: 'VS2', length: 6.06, width: 6.06, lab: 'GIA', price: 45, polish: 'VG' },
      { id: 12, shape: 'CU', weight: 0.80, color: 'G', clarity: 'VS3', length: 6.06, width: 6.06, lab: 'GIA', price: 70, polish: 'VG' },
      { id: 13, shape: 'CU', weight: 0.70, color: 'B', clarity: 'VS1', length: 6.06, width: 6.06, lab: 'GIA', price: 75, polish: 'VG' },
      { id: 14, shape: 'OV', weight: 0.90, color: 'F', clarity: 'VS2', length: 6.06, width: 6.06, lab: 'GIA', price: 80, polish: 'VG' },
      { id: 15, shape: 'OV', weight: 0.80, color: 'R', clarity: 'VS3', length: 6.06, width: 6.06, lab: 'GIA', price: 85, polish: 'VG' },
      { id: 16, shape: 'OV', weight: 0.70, color: 'G', clarity: 'VS1', length: 6.06, width: 6.06, lab: 'GIA', price: 200, polish: 'VG' },
      { id: 17, shape: 'ER', weight: 0.90, color: 'F', clarity: 'VS1', length: 6.06, width: 6.06, lab: 'GIA', price: 500, polish: 'VG' },
    ];

    const filters = [
      {shape: 'RD', color: 'F', clarity: 'VS1', lab: 'GIA', polish: 'VG' },
      {weight: 0.90, length: 6.06, width: 6.06, price: 100 },
    ];

    const rows = diamonds.map(diamond => (
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
          <a href={`/diamonds/${filters[0].shape}/${filters[0].color}/${filters[0].clarity}/${filters[0].lab}/${filters[0].polish}`}>
            Shape, color, clarity, lab and polish
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a href={`/diamonds/${filters[1].weight}/${filters[1].length}/${filters[1].width}/${filters[1].price}`}>
            Weight, Length, Width and Price
          </a>
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
