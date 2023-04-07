import React, { useCallback, useEffect, useState } from "react";
import Autocomplete from "../../components/Autocomplete";
import { getMovies, getMoviesFromJson } from "../../data/lotrData";
import { Movie } from "../../ts/interfaces/movie";
import { Container, Content, Header } from "./styles";

const SearchMovies: React.FC = () => {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);

  const fetchMovies = useCallback(async () => {
    // fetch data using https://the-one-api.dev/
    const data = await getMovies().then((value) => value?.docs);

    // fetch data using local JSON
    // const data = await getMoviesFromJson().then((value) => value?.docs);
    if (data) setMoviesList(data);
  }, []);

  useEffect(() => {
    fetchMovies().catch(console.error);
    return () => {};
  }, []);

  return (
    <Container>
      <Content>
        <Header>Lord of the Rings - Movies Autocomplete</Header>
        <Autocomplete moviesList={moviesList} />
      </Content>
    </Container>
  );
};

export default SearchMovies;
