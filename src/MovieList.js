import React, {Component} from 'react';
import MovieInfo from './MovieInfo';

class MovieList extends Component {
  render() {
    const { movies, profiles, users } = this.props;
    
    return (
      <ol>
      {Object.keys(movies).map(id => {
      	const usersLikedMovie = profiles.filter(profile => profile.favoriteMovieID === id);
              
        return (
        <MovieInfo movie={movies[id]} usersLikedMovie={usersLikedMovie} users={users} />
        )
      })}
      </ol>
    ) 
  }
}

export default MovieList