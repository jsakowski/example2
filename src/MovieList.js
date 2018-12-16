import React, {Component} from 'react'

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    
    return (
      <ol>
      {Object.keys(movies).map(id => {
        return (
        <li key={id}>
          <h2>{movies[id].name}</h2>
        </li>
        )
      })}
      </ol>
    ) 
  }
}

export default MovieList