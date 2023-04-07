import React, { useEffect, useState } from "react";
import { Movie } from "../../ts/interfaces/movie";
import { Container, Input, OptionsItem, OptionsList } from "./styles";

type Props = {
  moviesList: Movie[];
};

const Autocomplete = ({ moviesList }: Props) => {
  const [visibleOptions, setVisibleOptions] = useState(false);
  const [suggestMovies, setSuggestMovies] = useState<Movie[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");

  useEffect(() => {
    setSuggestMovies(moviesList);
  }, [moviesList]);

  const handleFilter = (value: string) => {
    const arrayNames = moviesList.filter((movie) =>
      movie.name.toLowerCase().includes(value.toLowerCase())
    );

    if (arrayNames.length === 0) setSuggestMovies(moviesList);

    setSuggestMovies(arrayNames);
  };

  const handleInputSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearchValue(value);

    if (value.length > 0) handleFilter(value);
    else setSuggestMovies(moviesList);
  };

  const handleSelectItem = (item: string) => {
    setVisibleOptions(false);
    setSelectedMovie(item);
    setSuggestMovies(moviesList);
    setSearchValue("");
  };

  const getHighlightedText = (text: string, higlight: string) => {
    // Split text on higlight term, include term itself into parts, ignore case
    var parts = text.split(new RegExp(`(${higlight})`, "gi"));
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part.toLowerCase() === higlight.toLowerCase() ? (
          <b style={{ backgroundColor: "#e8bb49" }}>{part}</b>
        ) : (
          part
        )}
      </React.Fragment>
    ));
  };

  return (
    <Container>
      <h3>Selected Movie: {selectedMovie}</h3>
      <Input
        placeholder="Start typing to search movies..."
        onFocus={() => setVisibleOptions(true)}
        value={searchValue}
        onChange={handleInputSearch}
      />
      {visibleOptions && searchValue.length > 0 && (
        <OptionsList>
          {suggestMovies.map((movie: Movie) => (
            <OptionsItem
              key={movie._id}
              onClick={() => handleSelectItem(movie.name)}
            >
              {getHighlightedText(movie.name, searchValue)}
            </OptionsItem>
          ))}
        </OptionsList>
      )}
    </Container>
  );
};

export default Autocomplete;
