import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({title, summary, coverImage, genres}) {
  return (
      <div>
        <img src={coverImage} alt={title} />
        <h2>
          <Link to="/moive">{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
          {
            genres.map((g) => (
                <li key={g}>{g}</li>
            ))
          }
        </ul>
      </div>
  )
}
export default Movie;

Movie.propTypes = {
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  coverImage : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}