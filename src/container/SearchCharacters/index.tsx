import React, { useCallback, useEffect, useState } from "react";
import { getMovies } from "../../data/lotrData";
import { Movie, RequestMovie } from "../../ts/interfaces/movie";
import { Container, Header } from "./styles";

const SearchCharacters: React.FC = () => {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);

  const fetchMovies = useCallback(async () => {
    const data = await getMovies().then((value) => value?.docs);
    if (data) setMoviesList(data);
  }, []);

  useEffect(() => {
    fetchMovies().catch(console.error);
    return () => {};
  }, []);

  return (
    <Container>
      <>
        <Header>Lord of the Rings Characters Autocomplete</Header>
        {moviesList.map((movie: Movie) => (
          <p>{movie.name}</p>
        ))}
      </>
    </Container>
  );
};

export default SearchCharacters;
