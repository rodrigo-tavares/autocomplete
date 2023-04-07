# The Lord of the Ring - Autocomplete

This is an autocomplete app that searches movies from the Lord of the Rings universe.

[**Live Demo →**](https://autocomplete-drab-kappa.vercel.app/)

## Installation

1- Clone the boilerplate repo

`git clone https://github.com/rodrigo-tavares/autocomplete.git`

2- `yarn` or `npm install` to install npm packages

3- start dev server using `yarn start` or `npm start`.

3- build and bundling your resources for production `yarn build`.

## Project structure

```text
dist/
src/
|- index.tsx _______________________________ # Application entry
|- App.tsx _________________________________ # Application init
|  |- components/
|    |- autocomplete/
|       |- index.jsx _______________________ # Sample component
|  |- container/
|    |- SearchMovies/
|       |- index.jsx _______________________ # Sample container the handle data
|  |- data/
|  |- hooks/ # Interfaces and global configs for typescript
|       - useAutocomplete.ts _______________ # Hook to autocomplete function
|  |- ts/ ___________________________________# Interfaces and global configs for typescript

webpack
|- webpack.config.js _______________________ # common webpack config
```

## License

This project is licensed under the MIT License.
