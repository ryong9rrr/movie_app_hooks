import React, { useState, useEffect } from "react";
import GetMovies from "./GetMovies";

const App = () => {
  const { loading, movies } = GetMovies({
    url:
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating",
  });
  return (
    <div>
      <h1>Movie-app</h1>
      <ul>{loading ? "Loading..." : movies}</ul>
    </div>
  );
};

export default App;
