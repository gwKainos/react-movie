import Movie from "../../entities/Movie/Movie";
import styles from "./Home.module.css";
import Loader from "../../shared/ui/Loader/Loader";
import useMovies from "../../shared/hooks/useMovies";

function Home() {
  const { movies, loading, error } = useMovies(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.5&sort_by=year"
  );

  if (loading) {
    return <div className={styles.loader}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  return (
      <div className={styles.container}>
        {loading ? (
            <Loader />
        ) : (
            <div>
              <div className={styles.movies}>
                {movies.map((movie) => (
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        year={movie.year}
                        summary={movie.summary}
                        coverImage={movie.medium_cover_image}
                        genres={movie.genres}
                    />
                ))}
              </div>
            </div>
        )}
      </div>
  );
}

export default Home;
