import { useParams } from "react-router-dom";
import { useEffect, useCallback } from "react";

function Detail() {
  const { id } = useParams();

  const getMovie = useCallback(async () => {
    const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );

    const json = await response.json();
    console.log(json);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return <h1>Detail</h1>;
}

export default Detail;