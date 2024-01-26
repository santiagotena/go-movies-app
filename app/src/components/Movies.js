import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json")

    const requestOptions = {
      method: "GET",
      headers: headers
    }

    fetch(`http://localhost:8080/movies`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      setMovies(data);
    })
    .catch(err => {
      console.log(err);
    })

  }, []);

  return (
    <div className="text-center">
      <h2>Movies</h2>
      <hr></hr>
      <table className="table table-stripped table-hover">
        <thead>
          <th>Movie</th>
          <th>Release Date</th>
          <th>Rating</th>
        </thead>
        <tbody>
          {movies.map((m) => (
            <tr key={m.id}>
              <td>
                <Link to={`/movies/${m.id}`}>{m.title}</Link>
              </td>
              <td>{m.release_date}</td>
              <td>{m.mpaa_rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Movies;
