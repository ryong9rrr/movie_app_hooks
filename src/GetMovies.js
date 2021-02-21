import React, { useState, useEffect } from "react";
import defaultAxios from "axios";

const GetMovies = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    movies: null,
    error: null,
  });

  useEffect(() => {
    axiosInstance(opts)
      .then((res) => {
        setState({
          ...state,
          loading: false,
          movies: res.data.data.movies,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: true,
          error,
        });
      });
  }, []);

  return { ...state };
};

export default GetMovies;
