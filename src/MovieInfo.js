import React, { Component } from "react";

class MovieInfo extends Component {
  render() {
    const {movie, usersLikedMovie, users} = this.props;
    
    return (
        <li key={movie.id}>
          <h2>{movie.name}</h2>
		  <h3>Liked By: {
            !usersLikedMovie || usersLikedMovie.length === 0 ? (
            	<p>None of the current users liked this movie.</p>
            ) : (
              <ul>
              {usersLikedMovie.map(profile => {
                  return (
                    <li key={profile.id}>
                      <p>{users[profile.userID].name}</p>
                    </li>
                  );
                })}
              </ul>
            )
          }</h3>
        </li>
	)
  }
}

export default MovieInfo