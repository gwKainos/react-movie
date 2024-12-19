import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function StarRating({ rating }) {
  const MAX_STARS = 5; // 별의 최대 개수
  const filledStars = Math.round(rating / 2); // 별점은 10점 만점이므로 5점 만점으로 변환
  const stars = Array(MAX_STARS)
  .fill(0)
  .map((_, index) =>
      index < filledStars ? (
          <span key={index} className={styles.starFilled}>
          ★
        </span>
      ) : (
          <span key={index} className={styles.starEmpty}>
          ☆
        </span>
      )
  );

  return <div className={styles.starRating}>{stars}</div>;
}

function Detail() {
  const { id } = useParams(); // URL에서 id 추출
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  // useCallback으로 getMovie 함수 최적화
  const getMovie = useCallback(async () => {
    try {
      const response = await fetch(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      const json = await response.json();
      setMovie(json.data.movie);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch movie details:", error);
    }
  }, [id]); // id는 의존성 배열에 포함되어야 함

  useEffect(() => {
    getMovie();
  }, [getMovie]); // getMovie가 변경되면 useEffect가 다시 실행됨

  return (
      <div className={styles.container}>
        {loading ? (
            <div className={styles.loader}>Loading...</div>
        ) : (
            <div className={styles.movie}>
              <img
                  src={movie.medium_cover_image}
                  alt={movie.title}
                  className={styles.movie__img}
              />
              <div className={styles.details}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3 className={styles.year}>{movie.year}</h3>
                <StarRating rating={movie.rating} /> {/* 별점 컴포넌트 추가 */}
                <p className={styles.description}>{movie.description_full}</p>
                <ul className={styles.genres}>
                  {movie.genres.map((genre) => (
                      <li key={genre} className={styles.genre}>
                        {genre}
                      </li>
                  ))}
                </ul>
              </div>
            </div>
        )}
      </div>
  );
}

export default Detail;