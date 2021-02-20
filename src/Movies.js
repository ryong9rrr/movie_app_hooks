import React, { useState, useEffect } from "react";
import axios from "axios";

const URL =
  "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating";

const Movies = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const response = await axios.get(URL);
    setData(response.data.data.movies);
  }, []);

  return data.map((movie, index) => <li key={index}>{movie.title}</li>);
};

export default Movies;
