import { useState } from "react";
import { Movie } from "../ts/interfaces/movie";

const useAutocomplete = (moviesList: Movie[]) => {
  const [visibleOptions, setVisibleOptions] = useState(false);
  const [suggestMovies, setSuggestMovies] = useState<Movie[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>();

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
    setSelectedMovie(null);

    if (value.length > 0) handleFilter(value);
    else setSuggestMovies(moviesList);
  };

  const handleSelectItem = (item: Movie) => {
    setVisibleOptions(false);
    setSelectedMovie(item);
    setSuggestMovies(moviesList);
    setSearchValue("");
  };

  return {
    visibleOptions,
    suggestMovies,
    searchValue,
    selectedMovie,
    handleInputSearch,
    handleSelectItem,
    setVisibleOptions,
  };
};

export default useAutocomplete;
