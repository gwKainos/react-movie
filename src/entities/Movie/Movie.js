import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, title, year, summary, coverImage, genres}) {
  return (
      <div className={styles.movie}>
        <img src={coverImage} alt={title} className={styles.movie__img}/>
        <div>
          <h2 className={styles.movie__title}>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <h3 className={styles.movie__year}>{year}</h3>
          <p>{summary.length > 235 ? `${summary.slice(0, 235)}...`
              : summary}</p>
          <ul className={styles.movie__genres}>
            {genres.map((g) => (
                <li key={g} className={styles.genre}>{g}</li>
            ))}
          </ul>
        </div>
      </div>
  )
}

export default Movie;

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
