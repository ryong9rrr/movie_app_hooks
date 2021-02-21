import { useState, useEffect } from "react";
import defaultAxios from "axios";

const Movies = (opts, axiosInstance = defaultAxios) => {
  const [num, setNum] = useState(0);

  const [state, setState] = useState({
    loading: true,
    movies: null,
    error: null,
  });

  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setNum(Math.random());
  };

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
  }, [num]);

  const renderingSummary = (summary) => {
    let summaryLength = summary.length;
    if (summaryLength > 180) {
      summary = `${summary.slice(0, 180)}...`;
    } else {
      summary = summary;
    }
    return summary;
  };

  return { ...state, refetch, renderingSummary };
};

export default Movies;
