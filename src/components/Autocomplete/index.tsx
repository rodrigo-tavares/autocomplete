import React, { KeyboardEvent, useEffect, useState } from "react";
import useAutocomplete from "../../hooks/useAutocomplete";
import { Movie } from "../../ts/interfaces/movie";
import CardInfo from "../Card";
import { Container, Input, OptionsItem, OptionsList } from "./styles";

type Props = {
  moviesList: Movie[];
};

const Autocomplete = ({ moviesList }: Props) => {
  const {
    visibleOptions,
    suggestMovies,
    searchValue,
    selectedMovie,
    handleInputSearch,
    handleSelectItem,
    setVisibleOptions,
  } = useAutocomplete(moviesList);

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
      <Input
        placeholder="Start typing to search movies: The Lord of the Rings..."
        onFocus={() => setVisibleOptions(true)}
        value={searchValue}
        onChange={handleInputSearch}
      />
      {visibleOptions && searchValue.length > 0 && (
        <OptionsList>
          {suggestMovies.map((movie: Movie) => (
            <OptionsItem
              key={movie._id}
              onClick={() => handleSelectItem(movie)}
            >
              {getHighlightedText(movie.name, searchValue)}
            </OptionsItem>
          ))}
        </OptionsList>
      )}
      {selectedMovie && <CardInfo movie={selectedMovie} />}
    </Container>
  );
};

export default Autocomplete;
