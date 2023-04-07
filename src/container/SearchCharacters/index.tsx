import React, { useCallback, useEffect, useState } from "react";
import Autocomplete from "../../components/Autocomplete";
import { getMovies, getMoviesFromJson } from "../../data/lotrData";
import { Movie } from "../../ts/interfaces/movie";
import { Container, Content, Header } from "./styles";

const SearchCharacters: React.FC = () => {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);

  const fetchMovies = useCallback(async () => {
    // const data = await getMovies().then((value) => value?.docs);
    const data = await getMoviesFromJson().then((value) => value?.docs);
    if (data) setMoviesList(data);
  }, []);

  useEffect(() => {
    fetchMovies().catch(console.error);
    return () => {};
  }, []);

  return (
    <Container>
      <Content>
        <Header>Lord of the Rings Movies Autocomplete</Header>
        <Autocomplete moviesList={moviesList} />
      </Content>
    </Container>
  );
};

export default SearchCharacters;
