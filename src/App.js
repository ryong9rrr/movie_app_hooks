import React from "react";
import Movies from "./Movies";
import "./App.css";

const App = () => {
  const { loading, movies, refetch, renderingSummary } = Movies({
    url:
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating",
  });

  return (
    <section className="container">
      {loading ? (
        <div className="loader">
          <span className="loader__text">Notflix</span>
        </div>
      ) : (
        <div>
          <div className="home_btn">
            <button onClick={refetch}>Notflix</button>
          </div>
          <div className="movies">
            {movies.map((movie, index) => (
              <div className="movie" key={index}>
                <img
                  src={movie.medium_cover_image}
                  alt={movie.title}
                  title={movie.title}
                />
                <div className="movie__data">
                  <div className="movie__title">{movie.title}</div>
                  <div className="movie__year">{movie.year}</div>
                  <div className="movie__genres">
                    {movie.genres.map((genre, index) => (
                      <li className="movie__genre" key={index}>
                        {genre}
                      </li>
                    ))}
                  </div>
                  <div className="movie__summary">
                    {renderingSummary(movie.summary)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default App;
