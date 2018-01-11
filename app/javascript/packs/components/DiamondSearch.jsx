import React from 'react';

class DiamondSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount() {
    console.log(this.props);
    fetch('https://facebook.github.io/react-native/movies.json')
      .then((Response) => Response.json())
      .then((response) => {
        console.log(response.movies);
        this.setState({
          data: response.movies,
        });
      });
  }
  render() {
    return (
      <div>
        {
          this.state.data.map((movie, index) => (
            <div>
              <p id={index}>{ movie.title }</p>
            </div>
          ))
        }
      </div>
    );
  }
}

export default DiamondSearch;
