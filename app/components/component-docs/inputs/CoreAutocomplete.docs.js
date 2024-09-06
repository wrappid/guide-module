/* eslint-disable etc/no-commented-out-code */
/* eslint-disable react/jsx-newline */
import React from "react";

import {
  CoreH4,
  CoreTypographyBody1,
  CoreAutocomplete,
  CoreClasses,
  CoreTextField,
  CoreStack,
  CoreBox,
  CoreCircularProgress,
  CoreChip,
  CoreIcon,
  CoreCheckbox,
  CoreList,
  CoreListItem
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

//https://github.com/mui/material-ui/blob/master/packages/mui-material/src/useAutocomplete/useAutocomplete.js
function stripDiacritics(string) {
  return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
export function createFilterOptions(config = {}) {
  const {
    ignoreAccents = true,
    ignoreCase = true,
    limit,
    matchFrom = "any",
    stringify,
    trim = false,
  } = config;

  return (options, { inputValue, getOptionLabel }) => {
    let input = trim ? inputValue.trim() : inputValue;

    if (ignoreCase) {
      input = input.toLowerCase();
    }
    if (ignoreAccents) {
      input = stripDiacritics(input);
    }

    const filteredOptions = !input
      ? options
      : options.filter((option) => {
        let candidate = (stringify || getOptionLabel)(option);

        if (ignoreCase) {
          candidate = candidate.toLowerCase();
        }
        if (ignoreAccents) {
          candidate = stripDiacritics(candidate);
        }

        return matchFrom === "start"
          ? candidate.indexOf(input) === 0
          : candidate.indexOf(input) > -1;
      });

    return typeof limit === "number" ? filteredOptions.slice(0, limit) : filteredOptions;
  };
}

const filter = createFilterOptions();

// One time slot every 30 minutes.
const timeSlots = Array.from(new Array(24 * 2)).map(
  // eslint-disable-next-line id-length
  (_, index) =>
    `${index < 20 ? "0" : ""}${Math.floor(index / 2)}:${
      index % 2 === 0 ? "00" : "30"
    }`
);

function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export default function CoreAutocompleteDocs() {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
      label: "The Lord of the Rings: The Return of the King",
      year : 2003,
    },
    { label: "The Good, the Bad and the Ugly", year: 1966 },
    { label: "Fight Club", year: 1999 },
    {
      label: "The Lord of the Rings: The Fellowship of the Ring",
      year : 2001,
    },
    {
      label: "Star Wars: Episode V - The Empire Strikes Back",
      year : 1980,
    },
    { label: "Forrest Gump", year: 1994 },
    { label: "Inception", year: 2010 },
    {
      label: "The Lord of the Rings: The Two Towers",
      year : 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: "Goodfellas", year: 1990 },
    { label: "The Matrix", year: 1999 },
    { label: "Seven Samurai", year: 1954 },
    {
      label: "Star Wars: Episode IV - A New Hope",
      year : 1977,
    },
    { label: "City of God", year: 2002 },
    { label: "Se7en", year: 1995 },
    { label: "The Silence of the Lambs", year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: "Life Is Beautiful", year: 1997 },
    { label: "The Usual Suspects", year: 1995 },
    { label: "Léon: The Professional", year: 1994 },
    { label: "Spirited Away", year: 2001 },
    { label: "Saving Private Ryan", year: 1998 },
    { label: "Once Upon a Time in the West", year: 1968 },
    { label: "American History X", year: 1998 },
    { label: "Interstellar", year: 2014 },
    { label: "Casablanca", year: 1942 },
    { label: "City Lights", year: 1931 },
    { label: "Psycho", year: 1960 },
    { label: "The Green Mile", year: 1999 },
    { label: "The Intouchables", year: 2011 },
    { label: "Modern Times", year: 1936 },
    { label: "Raiders of the Lost Ark", year: 1981 },
    { label: "Rear Window", year: 1954 },
    { label: "The Pianist", year: 2002 },
    { label: "The Departed", year: 2006 },
    { label: "Terminator 2: Judgment Day", year: 1991 },
    { label: "Back to the Future", year: 1985 },
    { label: "Whiplash", year: 2014 },
    { label: "Gladiator", year: 2000 },
    { label: "Memento", year: 2000 },
    { label: "The Prestige", year: 2006 },
    { label: "The Lion King", year: 1994 },
    { label: "Apocalypse Now", year: 1979 },
    { label: "Alien", year: 1979 },
    { label: "Sunset Boulevard", year: 1950 },
    {
      label:
        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      year: 1964,
    },
    { label: "The Great Dictator", year: 1940 },
    { label: "Cinema Paradiso", year: 1988 },
    { label: "The Lives of Others", year: 2006 },
    { label: "Grave of the Fireflies", year: 1988 },
    { label: "Paths of Glory", year: 1957 },
    { label: "Django Unchained", year: 2012 },
    { label: "The Shining", year: 1980 },
    { label: "WALL·E", year: 2008 },
    { label: "American Beauty", year: 1999 },
    { label: "The Dark Knight Rises", year: 2012 },
    { label: "Princess Mononoke", year: 1997 },
    { label: "Aliens", year: 1986 },
    { label: "Oldboy", year: 2003 },
    { label: "Once Upon a Time in America", year: 1984 },
    { label: "Witness for the Prosecution", year: 1957 },
    { label: "Das Boot", year: 1981 },
    { label: "Citizen Kane", year: 1941 },
    { label: "North by Northwest", year: 1959 },
    { label: "Vertigo", year: 1958 },
    {
      label: "Star Wars: Episode VI - Return of the Jedi",
      year : 1983,
    },
    { label: "Reservoir Dogs", year: 1992 },
    { label: "Braveheart", year: 1995 },
    { label: "M", year: 1931 },
    { label: "Requiem for a Dream", year: 2000 },
    { label: "Amélie", year: 2001 },
    { label: "A Clockwork Orange", year: 1971 },
    { label: "Like Stars on Earth", year: 2007 },
    { label: "Taxi Driver", year: 1976 },
    { label: "Lawrence of Arabia", year: 1962 },
    { label: "Double Indemnity", year: 1944 },
    {
      label: "Eternal Sunshine of the Spotless Mind",
      year : 2004,
    },
    { label: "Amadeus", year: 1984 },
    { label: "To Kill a Mockingbird", year: 1962 },
    { label: "Toy Story 3", year: 2010 },
    { label: "Logan", year: 2017 },
    { label: "Full Metal Jacket", year: 1987 },
    { label: "Dangal", year: 2016 },
    { label: "The Sting", year: 1973 },
    { label: "2001: A Space Odyssey", year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: "Toy Story", year: 1995 },
    { label: "Bicycle Thieves", year: 1948 },
    { label: "The Kid", year: 1921 },
    { label: "Inglourious Basterds", year: 2009 },
    { label: "Snatch", year: 2000 },
    { label: "3 Idiots", year: 2009 },
    { label: "Monty Python and the Holy Grail", year: 1975 },
  ];

  const text = `// ⚠️ BAD
return <Autocomplete multiple value={allValues.filter((v) => v.selected)} />;

// 👍 GOOD
const selectedValues = React.useMemo(
  () => allValues.filter((v) => v.selected),
  [allValues],
);
return <Autocomplete multiple value={selectedValues} />;`;
  const stringTop100Films = `const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year : 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year : 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year : 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year : 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year : 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Boulevard", year: 1950 },
  {
    label:
        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "The Lives of Others", year: 2006 },
  { label: "Grave of the Fireflies", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "The Shining", year: 1980 },
  { label: "WALL·E", year: 2008 },
  { label: "American Beauty", year: 1999 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Princess Mononoke", year: 1997 },
  { label: "Aliens", year: 1986 },
  { label: "Oldboy", year: 2003 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "Witness for the Prosecution", year: 1957 },
  { label: "Das Boot", year: 1981 },
  { label: "Citizen Kane", year: 1941 },
  { label: "North by Northwest", year: 1959 },
  { label: "Vertigo", year: 1958 },
  {
    label: "Star Wars: Episode VI - Return of the Jedi",
    year : 1983,
  },
  { label: "Reservoir Dogs", year: 1992 },
  { label: "Braveheart", year: 1995 },
  { label: "M", year: 1931 },
  { label: "Requiem for a Dream", year: 2000 },
  { label: "Amélie", year: 2001 },
  { label: "A Clockwork Orange", year: 1971 },
  { label: "Like Stars on Earth", year: 2007 },
  { label: "Taxi Driver", year: 1976 },
  { label: "Lawrence of Arabia", year: 1962 },
  { label: "Double Indemnity", year: 1944 },
  {
    label: "Eternal Sunshine of the Spotless Mind",
    year : 2004,
  },
  { label: "Amadeus", year: 1984 },
  { label: "To Kill a Mockingbird", year: 1962 },
  { label: "Toy Story 3", year: 2010 },
  { label: "Logan", year: 2017 },
  { label: "Full Metal Jacket", year: 1987 },
  { label: "Dangal", year: 2016 },
  { label: "The Sting", year: 1973 },
  { label: "2001: A Space Odyssey", year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: "Toy Story", year: 1995 },
  { label: "Bicycle Thieves", year: 1948 },
  { label: "The Kid", year: 1921 },
  { label: "Inglourious Basterds", year: 2009 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];`;
  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
  const top100Movies = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    {
      title: "The Lord of the Rings: The Return of the King",
      year : 2003,
    },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year : 2001,
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      year : 1980,
    },
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
    {
      title: "The Lord of the Rings: The Two Towers",
      year : 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: "Goodfellas", year: 1990 },
    { title: "The Matrix", year: 1999 },
    { title: "Seven Samurai", year: 1954 },
    {
      title: "Star Wars: Episode IV - A New Hope",
      year : 1977,
    },
    { title: "City of God", year: 2002 },
    { title: "Se7en", year: 1995 },
    { title: "The Silence of the Lambs", year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: "Life Is Beautiful", year: 1997 },
    { title: "The Usual Suspects", year: 1995 },
    { title: "Léon: The Professional", year: 1994 },
    { title: "Spirited Away", year: 2001 },
    { title: "Saving Private Ryan", year: 1998 },
    { title: "Once Upon a Time in the West", year: 1968 },
    { title: "American History X", year: 1998 },
    { title: "Interstellar", year: 2014 },
    { title: "Casablanca", year: 1942 },
    { title: "City Lights", year: 1931 },
    { title: "Psycho", year: 1960 },
    { title: "The Green Mile", year: 1999 },
    { title: "The Intouchables", year: 2011 },
    { title: "Modern Times", year: 1936 },
    { title: "Raiders of the Lost Ark", year: 1981 },
    { title: "Rear Window", year: 1954 },
    { title: "The Pianist", year: 2002 },
    { title: "The Departed", year: 2006 },
    { title: "Terminator 2: Judgment Day", year: 1991 },
    { title: "Back to the Future", year: 1985 },
    { title: "Whiplash", year: 2014 },
    { title: "Gladiator", year: 2000 },
    { title: "Memento", year: 2000 },
    { title: "The Prestige", year: 2006 },
    { title: "The Lion King", year: 1994 },
    { title: "Apocalypse Now", year: 1979 },
    { title: "Alien", year: 1979 },
    { title: "Sunset Boulevard", year: 1950 },
    {
      title: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      year : 1964,
    },
    { title: "The Great Dictator", year: 1940 },
    { title: "Cinema Paradiso", year: 1988 },
    { title: "The Lives of Others", year: 2006 },
    { title: "Grave of the Fireflies", year: 1988 },
    { title: "Paths of Glory", year: 1957 },
    { title: "Django Unchained", year: 2012 },
    { title: "The Shining", year: 1980 },
    { title: "WALL·E", year: 2008 },
    { title: "American Beauty", year: 1999 },
    { title: "The Dark Knight Rises", year: 2012 },
    { title: "Princess Mononoke", year: 1997 },
    { title: "Aliens", year: 1986 },
    { title: "Oldboy", year: 2003 },
    { title: "Once Upon a Time in America", year: 1984 },
    { title: "Witness for the Prosecution", year: 1957 },
    { title: "Das Boot", year: 1981 },
    { title: "Citizen Kane", year: 1941 },
    { title: "North by Northwest", year: 1959 },
    { title: "Vertigo", year: 1958 },
    {
      title: "Star Wars: Episode VI - Return of the Jedi",
      year : 1983,
    },
    { title: "Reservoir Dogs", year: 1992 },
    { title: "Braveheart", year: 1995 },
    { title: "M", year: 1931 },
    { title: "Requiem for a Dream", year: 2000 },
    { title: "Amélie", year: 2001 },
    { title: "A Clockwork Orange", year: 1971 },
    { title: "Like Stars on Earth", year: 2007 },
    { title: "Taxi Driver", year: 1976 },
    { title: "Lawrence of Arabia", year: 1962 },
    { title: "Double Indemnity", year: 1944 },
    {
      title: "Eternal Sunshine of the Spotless Mind",
      year : 2004,
    },
    { title: "Amadeus", year: 1984 },
    { title: "To Kill a Mockingbird", year: 1962 },
    { title: "Toy Story 3", year: 2010 },
    { title: "Logan", year: 2017 },
    { title: "Full Metal Jacket", year: 1987 },
    { title: "Dangal", year: 2016 },
    { title: "The Sting", year: 1973 },
    { title: "2001: A Space Odyssey", year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: "Toy Story", year: 1995 },
    { title: "Bicycle Thieves", year: 1948 },
    { title: "The Kid", year: 1921 },
    { title: "Inglourious Basterds", year: 2009 },
    { title: "Snatch", year: 2000 },
    { title: "3 Idiots", year: 2009 },
    { title: "Monty Python and the Holy Grail", year: 1975 },
  ];
  const stringTop100Movies = `const top100Movies = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year : 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year : 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year : 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year : 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year : 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year : 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year : 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year : 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];`;
  const fixedOptions = [top100Movies[6]];
  const [data, setData] = React.useState([...fixedOptions, top100Movies[13]]);

  const options = top100Movies.map((option) => {
    const firstLetter = option.title[0].toUpperCase();

    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });
  // From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/be4cdd0b1f9566847c274d0d05b9549881e0ae4a/packages/core/select/src/data/countries.ts
  const countries = [
    { code: "AD", label: "Andorra", phone: "376" },
    {
      code : "AE",
      label: "United Arab Emirates",
      phone: "971",
    },
    { code: "AF", label: "Afghanistan", phone: "93" },
    {
      code : "AG",
      label: "Antigua and Barbuda",
      phone: "1-268",
    },
    { code: "AI", label: "Anguilla", phone: "1-264" },
    { code: "AL", label: "Albania", phone: "355" },
    { code: "AM", label: "Armenia", phone: "374" },
    { code: "AO", label: "Angola", phone: "244" },
    { code: "AQ", label: "Antarctica", phone: "672" },
    { code: "AR", label: "Argentina", phone: "54" },
    { code: "AS", label: "American Samoa", phone: "1-684" },
    { code: "AT", label: "Austria", phone: "43" },
    {
      code     : "AU",
      label    : "Australia",
      phone    : "61",
      suggested: true,
    },
    { code: "AW", label: "Aruba", phone: "297" },
    { code: "AX", label: "Alland Islands", phone: "358" },
    { code: "AZ", label: "Azerbaijan", phone: "994" },
    {
      code : "BA",
      label: "Bosnia and Herzegovina",
      phone: "387",
    },
    { code: "BB", label: "Barbados", phone: "1-246" },
    { code: "BD", label: "Bangladesh", phone: "880" },
    { code: "BE", label: "Belgium", phone: "32" },
    { code: "BF", label: "Burkina Faso", phone: "226" },
    { code: "BG", label: "Bulgaria", phone: "359" },
    { code: "BH", label: "Bahrain", phone: "973" },
    { code: "BI", label: "Burundi", phone: "257" },
    { code: "BJ", label: "Benin", phone: "229" },
    { code: "BL", label: "Saint Barthelemy", phone: "590" },
    { code: "BM", label: "Bermuda", phone: "1-441" },
    { code: "BN", label: "Brunei Darussalam", phone: "673" },
    { code: "BO", label: "Bolivia", phone: "591" },
    { code: "BR", label: "Brazil", phone: "55" },
    { code: "BS", label: "Bahamas", phone: "1-242" },
    { code: "BT", label: "Bhutan", phone: "975" },
    { code: "BV", label: "Bouvet Island", phone: "47" },
    { code: "BW", label: "Botswana", phone: "267" },
    { code: "BY", label: "Belarus", phone: "375" },
    { code: "BZ", label: "Belize", phone: "501" },
    {
      code     : "CA",
      label    : "Canada",
      phone    : "1",
      suggested: true,
    },
    {
      code : "CC",
      label: "Cocos (Keeling) Islands",
      phone: "61",
    },
    {
      code : "CD",
      label: "Congo, Democratic Republic of the",
      phone: "243",
    },
    {
      code : "CF",
      label: "Central African Republic",
      phone: "236",
    },
    {
      code : "CG",
      label: "Congo, Republic of the",
      phone: "242",
    },
    { code: "CH", label: "Switzerland", phone: "41" },
    { code: "CI", label: "Cote d'Ivoire", phone: "225" },
    { code: "CK", label: "Cook Islands", phone: "682" },
    { code: "CL", label: "Chile", phone: "56" },
    { code: "CM", label: "Cameroon", phone: "237" },
    { code: "CN", label: "China", phone: "86" },
    { code: "CO", label: "Colombia", phone: "57" },
    { code: "CR", label: "Costa Rica", phone: "506" },
    { code: "CU", label: "Cuba", phone: "53" },
    { code: "CV", label: "Cape Verde", phone: "238" },
    { code: "CW", label: "Curacao", phone: "599" },
    { code: "CX", label: "Christmas Island", phone: "61" },
    { code: "CY", label: "Cyprus", phone: "357" },
    { code: "CZ", label: "Czech Republic", phone: "420" },
    {
      code     : "DE",
      label    : "Germany",
      phone    : "49",
      suggested: true,
    },
    { code: "DJ", label: "Djibouti", phone: "253" },
    { code: "DK", label: "Denmark", phone: "45" },
    { code: "DM", label: "Dominica", phone: "1-767" },
    {
      code : "DO",
      label: "Dominican Republic",
      phone: "1-809",
    },
    { code: "DZ", label: "Algeria", phone: "213" },
    { code: "EC", label: "Ecuador", phone: "593" },
    { code: "EE", label: "Estonia", phone: "372" },
    { code: "EG", label: "Egypt", phone: "20" },
    { code: "EH", label: "Western Sahara", phone: "212" },
    { code: "ER", label: "Eritrea", phone: "291" },
    { code: "ES", label: "Spain", phone: "34" },
    { code: "ET", label: "Ethiopia", phone: "251" },
    { code: "FI", label: "Finland", phone: "358" },
    { code: "FJ", label: "Fiji", phone: "679" },
    {
      code : "FK",
      label: "Falkland Islands (Malvinas)",
      phone: "500",
    },
    {
      code : "FM",
      label: "Micronesia, Federated States of",
      phone: "691",
    },
    { code: "FO", label: "Faroe Islands", phone: "298" },
    {
      code     : "FR",
      label    : "France",
      phone    : "33",
      suggested: true,
    },
    { code: "GA", label: "Gabon", phone: "241" },
    { code: "GB", label: "United Kingdom", phone: "44" },
    { code: "GD", label: "Grenada", phone: "1-473" },
    { code: "GE", label: "Georgia", phone: "995" },
    { code: "GF", label: "French Guiana", phone: "594" },
    { code: "GG", label: "Guernsey", phone: "44" },
    { code: "GH", label: "Ghana", phone: "233" },
    { code: "GI", label: "Gibraltar", phone: "350" },
    { code: "GL", label: "Greenland", phone: "299" },
    { code: "GM", label: "Gambia", phone: "220" },
    { code: "GN", label: "Guinea", phone: "224" },
    { code: "GP", label: "Guadeloupe", phone: "590" },
    { code: "GQ", label: "Equatorial Guinea", phone: "240" },
    { code: "GR", label: "Greece", phone: "30" },
    {
      code : "GS",
      label: "South Georgia and the South Sandwich Islands",
      phone: "500",
    },
    { code: "GT", label: "Guatemala", phone: "502" },
    { code: "GU", label: "Guam", phone: "1-671" },
    { code: "GW", label: "Guinea-Bissau", phone: "245" },
    { code: "GY", label: "Guyana", phone: "592" },
    { code: "HK", label: "Hong Kong", phone: "852" },
    {
      code : "HM",
      label: "Heard Island and McDonald Islands",
      phone: "672",
    },
    { code: "HN", label: "Honduras", phone: "504" },
    { code: "HR", label: "Croatia", phone: "385" },
    { code: "HT", label: "Haiti", phone: "509" },
    { code: "HU", label: "Hungary", phone: "36" },
    { code: "ID", label: "Indonesia", phone: "62" },
    { code: "IE", label: "Ireland", phone: "353" },
    { code: "IL", label: "Israel", phone: "972" },
    { code: "IM", label: "Isle of Man", phone: "44" },
    { code: "IN", label: "India", phone: "91" },
    {
      code : "IO",
      label: "British Indian Ocean Territory",
      phone: "246",
    },
    { code: "IQ", label: "Iraq", phone: "964" },
    {
      code : "IR",
      label: "Iran, Islamic Republic of",
      phone: "98",
    },
    { code: "IS", label: "Iceland", phone: "354" },
    { code: "IT", label: "Italy", phone: "39" },
    { code: "JE", label: "Jersey", phone: "44" },
    { code: "JM", label: "Jamaica", phone: "1-876" },
    { code: "JO", label: "Jordan", phone: "962" },
    {
      code     : "JP",
      label    : "Japan",
      phone    : "81",
      suggested: true,
    },
    { code: "KE", label: "Kenya", phone: "254" },
    { code: "KG", label: "Kyrgyzstan", phone: "996" },
    { code: "KH", label: "Cambodia", phone: "855" },
    { code: "KI", label: "Kiribati", phone: "686" },
    { code: "KM", label: "Comoros", phone: "269" },
    {
      code : "KN",
      label: "Saint Kitts and Nevis",
      phone: "1-869",
    },
    {
      code : "KP",
      label: "Korea, Democratic People's Republic of",
      phone: "850",
    },
    { code: "KR", label: "Korea, Republic of", phone: "82" },
    { code: "KW", label: "Kuwait", phone: "965" },
    { code: "KY", label: "Cayman Islands", phone: "1-345" },
    { code: "KZ", label: "Kazakhstan", phone: "7" },
    {
      code : "LA",
      label: "Lao People's Democratic Republic",
      phone: "856",
    },
    { code: "LB", label: "Lebanon", phone: "961" },
    { code: "LC", label: "Saint Lucia", phone: "1-758" },
    { code: "LI", label: "Liechtenstein", phone: "423" },
    { code: "LK", label: "Sri Lanka", phone: "94" },
    { code: "LR", label: "Liberia", phone: "231" },
    { code: "LS", label: "Lesotho", phone: "266" },
    { code: "LT", label: "Lithuania", phone: "370" },
    { code: "LU", label: "Luxembourg", phone: "352" },
    { code: "LV", label: "Latvia", phone: "371" },
    { code: "LY", label: "Libya", phone: "218" },
    { code: "MA", label: "Morocco", phone: "212" },
    { code: "MC", label: "Monaco", phone: "377" },
    {
      code : "MD",
      label: "Moldova, Republic of",
      phone: "373",
    },
    { code: "ME", label: "Montenegro", phone: "382" },
    {
      code : "MF",
      label: "Saint Martin (French part)",
      phone: "590",
    },
    { code: "MG", label: "Madagascar", phone: "261" },
    { code: "MH", label: "Marshall Islands", phone: "692" },
    {
      code : "MK",
      label: "Macedonia, the Former Yugoslav Republic of",
      phone: "389",
    },
    { code: "ML", label: "Mali", phone: "223" },
    { code: "MM", label: "Myanmar", phone: "95" },
    { code: "MN", label: "Mongolia", phone: "976" },
    { code: "MO", label: "Macao", phone: "853" },
    {
      code : "MP",
      label: "Northern Mariana Islands",
      phone: "1-670",
    },
    { code: "MQ", label: "Martinique", phone: "596" },
    { code: "MR", label: "Mauritania", phone: "222" },
    { code: "MS", label: "Montserrat", phone: "1-664" },
    { code: "MT", label: "Malta", phone: "356" },
    { code: "MU", label: "Mauritius", phone: "230" },
    { code: "MV", label: "Maldives", phone: "960" },
    { code: "MW", label: "Malawi", phone: "265" },
    { code: "MX", label: "Mexico", phone: "52" },
    { code: "MY", label: "Malaysia", phone: "60" },
    { code: "MZ", label: "Mozambique", phone: "258" },
    { code: "NA", label: "Namibia", phone: "264" },
    { code: "NC", label: "New Caledonia", phone: "687" },
    { code: "NE", label: "Niger", phone: "227" },
    { code: "NF", label: "Norfolk Island", phone: "672" },
    { code: "NG", label: "Nigeria", phone: "234" },
    { code: "NI", label: "Nicaragua", phone: "505" },
    { code: "NL", label: "Netherlands", phone: "31" },
    { code: "NO", label: "Norway", phone: "47" },
    { code: "NP", label: "Nepal", phone: "977" },
    { code: "NR", label: "Nauru", phone: "674" },
    { code: "NU", label: "Niue", phone: "683" },
    { code: "NZ", label: "New Zealand", phone: "64" },
    { code: "OM", label: "Oman", phone: "968" },
    { code: "PA", label: "Panama", phone: "507" },
    { code: "PE", label: "Peru", phone: "51" },
    { code: "PF", label: "French Polynesia", phone: "689" },
    { code: "PG", label: "Papua New Guinea", phone: "675" },
    { code: "PH", label: "Philippines", phone: "63" },
    { code: "PK", label: "Pakistan", phone: "92" },
    { code: "PL", label: "Poland", phone: "48" },
    {
      code : "PM",
      label: "Saint Pierre and Miquelon",
      phone: "508",
    },
    { code: "PN", label: "Pitcairn", phone: "870" },
    { code: "PR", label: "Puerto Rico", phone: "1" },
    {
      code : "PS",
      label: "Palestine, State of",
      phone: "970",
    },
    { code: "PT", label: "Portugal", phone: "351" },
    { code: "PW", label: "Palau", phone: "680" },
    { code: "PY", label: "Paraguay", phone: "595" },
    { code: "QA", label: "Qatar", phone: "974" },
    { code: "RE", label: "Reunion", phone: "262" },
    { code: "RO", label: "Romania", phone: "40" },
    { code: "RS", label: "Serbia", phone: "381" },
    { code: "RU", label: "Russian Federation", phone: "7" },
    { code: "RW", label: "Rwanda", phone: "250" },
    { code: "SA", label: "Saudi Arabia", phone: "966" },
    { code: "SB", label: "Solomon Islands", phone: "677" },
    { code: "SC", label: "Seychelles", phone: "248" },
    { code: "SD", label: "Sudan", phone: "249" },
    { code: "SE", label: "Sweden", phone: "46" },
    { code: "SG", label: "Singapore", phone: "65" },
    { code: "SH", label: "Saint Helena", phone: "290" },
    { code: "SI", label: "Slovenia", phone: "386" },
    {
      code : "SJ",
      label: "Svalbard and Jan Mayen",
      phone: "47",
    },
    { code: "SK", label: "Slovakia", phone: "421" },
    { code: "SL", label: "Sierra Leone", phone: "232" },
    { code: "SM", label: "San Marino", phone: "378" },
    { code: "SN", label: "Senegal", phone: "221" },
    { code: "SO", label: "Somalia", phone: "252" },
    { code: "SR", label: "Suriname", phone: "597" },
    { code: "SS", label: "South Sudan", phone: "211" },
    {
      code : "ST",
      label: "Sao Tome and Principe",
      phone: "239",
    },
    { code: "SV", label: "El Salvador", phone: "503" },
    {
      code : "SX",
      label: "Sint Maarten (Dutch part)",
      phone: "1-721",
    },
    {
      code : "SY",
      label: "Syrian Arab Republic",
      phone: "963",
    },
    { code: "SZ", label: "Swaziland", phone: "268" },
    {
      code : "TC",
      label: "Turks and Caicos Islands",
      phone: "1-649",
    },
    { code: "TD", label: "Chad", phone: "235" },
    {
      code : "TF",
      label: "French Southern Territories",
      phone: "262",
    },
    { code: "TG", label: "Togo", phone: "228" },
    { code: "TH", label: "Thailand", phone: "66" },
    { code: "TJ", label: "Tajikistan", phone: "992" },
    { code: "TK", label: "Tokelau", phone: "690" },
    { code: "TL", label: "Timor-Leste", phone: "670" },
    { code: "TM", label: "Turkmenistan", phone: "993" },
    { code: "TN", label: "Tunisia", phone: "216" },
    { code: "TO", label: "Tonga", phone: "676" },
    { code: "TR", label: "Turkey", phone: "90" },
    {
      code : "TT",
      label: "Trinidad and Tobago",
      phone: "1-868",
    },
    { code: "TV", label: "Tuvalu", phone: "688" },
    {
      code : "TW",
      label: "Taiwan",
      phone: "886",
    },
    {
      code : "TZ",
      label: "United Republic of Tanzania",
      phone: "255",
    },
    { code: "UA", label: "Ukraine", phone: "380" },
    { code: "UG", label: "Uganda", phone: "256" },
    {
      code     : "US",
      label    : "United States",
      phone    : "1",
      suggested: true,
    },
    { code: "UY", label: "Uruguay", phone: "598" },
    { code: "UZ", label: "Uzbekistan", phone: "998" },
    {
      code : "VA",
      label: "Holy See (Vatican City State)",
      phone: "379",
    },
    {
      code : "VC",
      label: "Saint Vincent and the Grenadines",
      phone: "1-784",
    },
    { code: "VE", label: "Venezuela", phone: "58" },
    {
      code : "VG",
      label: "British Virgin Islands",
      phone: "1-284",
    },
    {
      code : "VI",
      label: "US Virgin Islands",
      phone: "1-340",
    },
    { code: "VN", label: "Vietnam", phone: "84" },
    { code: "VU", label: "Vanuatu", phone: "678" },
    { code: "WF", label: "Wallis and Futuna", phone: "681" },
    { code: "WS", label: "Samoa", phone: "685" },
    { code: "XK", label: "Kosovo", phone: "383" },
    { code: "YE", label: "Yemen", phone: "967" },
    { code: "YT", label: "Mayotte", phone: "262" },
    { code: "ZA", label: "South Africa", phone: "27" },
    { code: "ZM", label: "Zambia", phone: "260" },
    { code: "ZW", label: "Zimbabwe", phone: "263" },
  ];
  const stringCountries = `const countries = [
  { code: "AD", label: "Andorra", phone: "376" },
  {
    code : "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
  { code: "AF", label: "Afghanistan", phone: "93" },
  {
    code : "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  { code: "AI", label: "Anguilla", phone: "1-264" },
  { code: "AL", label: "Albania", phone: "355" },
  { code: "AM", label: "Armenia", phone: "374" },
  { code: "AO", label: "Angola", phone: "244" },
  { code: "AQ", label: "Antarctica", phone: "672" },
  { code: "AR", label: "Argentina", phone: "54" },
  { code: "AS", label: "American Samoa", phone: "1-684" },
  { code: "AT", label: "Austria", phone: "43" },
  {
    code     : "AU",
    label    : "Australia",
    phone    : "61",
    suggested: true,
  },
  { code: "AW", label: "Aruba", phone: "297" },
  { code: "AX", label: "Alland Islands", phone: "358" },
  { code: "AZ", label: "Azerbaijan", phone: "994" },
  {
    code : "BA",
    label: "Bosnia and Herzegovina",
    phone: "387",
  },
  { code: "BB", label: "Barbados", phone: "1-246" },
  { code: "BD", label: "Bangladesh", phone: "880" },
  { code: "BE", label: "Belgium", phone: "32" },
  { code: "BF", label: "Burkina Faso", phone: "226" },
  { code: "BG", label: "Bulgaria", phone: "359" },
  { code: "BH", label: "Bahrain", phone: "973" },
  { code: "BI", label: "Burundi", phone: "257" },
  { code: "BJ", label: "Benin", phone: "229" },
  { code: "BL", label: "Saint Barthelemy", phone: "590" },
  { code: "BM", label: "Bermuda", phone: "1-441" },
  { code: "BN", label: "Brunei Darussalam", phone: "673" },
  { code: "BO", label: "Bolivia", phone: "591" },
  { code: "BR", label: "Brazil", phone: "55" },
  { code: "BS", label: "Bahamas", phone: "1-242" },
  { code: "BT", label: "Bhutan", phone: "975" },
  { code: "BV", label: "Bouvet Island", phone: "47" },
  { code: "BW", label: "Botswana", phone: "267" },
  { code: "BY", label: "Belarus", phone: "375" },
  { code: "BZ", label: "Belize", phone: "501" },
  {
    code     : "CA",
    label    : "Canada",
    phone    : "1",
    suggested: true,
  },
  {
    code : "CC",
    label: "Cocos (Keeling) Islands",
    phone: "61",
  },
  {
    code : "CD",
    label: "Congo, Democratic Republic of the",
    phone: "243",
  },
  {
    code : "CF",
    label: "Central African Republic",
    phone: "236",
  },
  {
    code : "CG",
    label: "Congo, Republic of the",
    phone: "242",
  },
  { code: "CH", label: "Switzerland", phone: "41" },
  { code: "CI", label: "Cote d'Ivoire", phone: "225" },
  { code: "CK", label: "Cook Islands", phone: "682" },
  { code: "CL", label: "Chile", phone: "56" },
  { code: "CM", label: "Cameroon", phone: "237" },
  { code: "CN", label: "China", phone: "86" },
  { code: "CO", label: "Colombia", phone: "57" },
  { code: "CR", label: "Costa Rica", phone: "506" },
  { code: "CU", label: "Cuba", phone: "53" },
  { code: "CV", label: "Cape Verde", phone: "238" },
  { code: "CW", label: "Curacao", phone: "599" },
  { code: "CX", label: "Christmas Island", phone: "61" },
  { code: "CY", label: "Cyprus", phone: "357" },
  { code: "CZ", label: "Czech Republic", phone: "420" },
  {
    code     : "DE",
    label    : "Germany",
    phone    : "49",
    suggested: true,
  },
  { code: "DJ", label: "Djibouti", phone: "253" },
  { code: "DK", label: "Denmark", phone: "45" },
  { code: "DM", label: "Dominica", phone: "1-767" },
  {
    code : "DO",
    label: "Dominican Republic",
    phone: "1-809",
  },
  { code: "DZ", label: "Algeria", phone: "213" },
  { code: "EC", label: "Ecuador", phone: "593" },
  { code: "EE", label: "Estonia", phone: "372" },
  { code: "EG", label: "Egypt", phone: "20" },
  { code: "EH", label: "Western Sahara", phone: "212" },
  { code: "ER", label: "Eritrea", phone: "291" },
  { code: "ES", label: "Spain", phone: "34" },
  { code: "ET", label: "Ethiopia", phone: "251" },
  { code: "FI", label: "Finland", phone: "358" },
  { code: "FJ", label: "Fiji", phone: "679" },
  {
    code : "FK",
    label: "Falkland Islands (Malvinas)",
    phone: "500",
  },
  {
    code : "FM",
    label: "Micronesia, Federated States of",
    phone: "691",
  },
  { code: "FO", label: "Faroe Islands", phone: "298" },
  {
    code     : "FR",
    label    : "France",
    phone    : "33",
    suggested: true,
  },
  { code: "GA", label: "Gabon", phone: "241" },
  { code: "GB", label: "United Kingdom", phone: "44" },
  { code: "GD", label: "Grenada", phone: "1-473" },
  { code: "GE", label: "Georgia", phone: "995" },
  { code: "GF", label: "French Guiana", phone: "594" },
  { code: "GG", label: "Guernsey", phone: "44" },
  { code: "GH", label: "Ghana", phone: "233" },
  { code: "GI", label: "Gibraltar", phone: "350" },
  { code: "GL", label: "Greenland", phone: "299" },
  { code: "GM", label: "Gambia", phone: "220" },
  { code: "GN", label: "Guinea", phone: "224" },
  { code: "GP", label: "Guadeloupe", phone: "590" },
  { code: "GQ", label: "Equatorial Guinea", phone: "240" },
  { code: "GR", label: "Greece", phone: "30" },
  {
    code : "GS",
    label: "South Georgia and the South Sandwich Islands",
    phone: "500",
  },
  { code: "GT", label: "Guatemala", phone: "502" },
  { code: "GU", label: "Guam", phone: "1-671" },
  { code: "GW", label: "Guinea-Bissau", phone: "245" },
  { code: "GY", label: "Guyana", phone: "592" },
  { code: "HK", label: "Hong Kong", phone: "852" },
  {
    code : "HM",
    label: "Heard Island and McDonald Islands",
    phone: "672",
  },
  { code: "HN", label: "Honduras", phone: "504" },
  { code: "HR", label: "Croatia", phone: "385" },
  { code: "HT", label: "Haiti", phone: "509" },
  { code: "HU", label: "Hungary", phone: "36" },
  { code: "ID", label: "Indonesia", phone: "62" },
  { code: "IE", label: "Ireland", phone: "353" },
  { code: "IL", label: "Israel", phone: "972" },
  { code: "IM", label: "Isle of Man", phone: "44" },
  { code: "IN", label: "India", phone: "91" },
  {
    code : "IO",
    label: "British Indian Ocean Territory",
    phone: "246",
  },
  { code: "IQ", label: "Iraq", phone: "964" },
  {
    code : "IR",
    label: "Iran, Islamic Republic of",
    phone: "98",
  },
  { code: "IS", label: "Iceland", phone: "354" },
  { code: "IT", label: "Italy", phone: "39" },
  { code: "JE", label: "Jersey", phone: "44" },
  { code: "JM", label: "Jamaica", phone: "1-876" },
  { code: "JO", label: "Jordan", phone: "962" },
  {
    code     : "JP",
    label    : "Japan",
    phone    : "81",
    suggested: true,
  },
  { code: "KE", label: "Kenya", phone: "254" },
  { code: "KG", label: "Kyrgyzstan", phone: "996" },
  { code: "KH", label: "Cambodia", phone: "855" },
  { code: "KI", label: "Kiribati", phone: "686" },
  { code: "KM", label: "Comoros", phone: "269" },
  {
    code : "KN",
    label: "Saint Kitts and Nevis",
    phone: "1-869",
  },
  {
    code : "KP",
    label: "Korea, Democratic People's Republic of",
    phone: "850",
  },
  { code: "KR", label: "Korea, Republic of", phone: "82" },
  { code: "KW", label: "Kuwait", phone: "965" },
  { code: "KY", label: "Cayman Islands", phone: "1-345" },
  { code: "KZ", label: "Kazakhstan", phone: "7" },
  {
    code : "LA",
    label: "Lao People's Democratic Republic",
    phone: "856",
  },
  { code: "LB", label: "Lebanon", phone: "961" },
  { code: "LC", label: "Saint Lucia", phone: "1-758" },
  { code: "LI", label: "Liechtenstein", phone: "423" },
  { code: "LK", label: "Sri Lanka", phone: "94" },
  { code: "LR", label: "Liberia", phone: "231" },
  { code: "LS", label: "Lesotho", phone: "266" },
  { code: "LT", label: "Lithuania", phone: "370" },
  { code: "LU", label: "Luxembourg", phone: "352" },
  { code: "LV", label: "Latvia", phone: "371" },
  { code: "LY", label: "Libya", phone: "218" },
  { code: "MA", label: "Morocco", phone: "212" },
  { code: "MC", label: "Monaco", phone: "377" },
  {
    code : "MD",
    label: "Moldova, Republic of",
    phone: "373",
  },
  { code: "ME", label: "Montenegro", phone: "382" },
  {
    code : "MF",
    label: "Saint Martin (French part)",
    phone: "590",
  },
  { code: "MG", label: "Madagascar", phone: "261" },
  { code: "MH", label: "Marshall Islands", phone: "692" },
  {
    code : "MK",
    label: "Macedonia, the Former Yugoslav Republic of",
    phone: "389",
  },
  { code: "ML", label: "Mali", phone: "223" },
  { code: "MM", label: "Myanmar", phone: "95" },
  { code: "MN", label: "Mongolia", phone: "976" },
  { code: "MO", label: "Macao", phone: "853" },
  {
    code : "MP",
    label: "Northern Mariana Islands",
    phone: "1-670",
  },
  { code: "MQ", label: "Martinique", phone: "596" },
  { code: "MR", label: "Mauritania", phone: "222" },
  { code: "MS", label: "Montserrat", phone: "1-664" },
  { code: "MT", label: "Malta", phone: "356" },
  { code: "MU", label: "Mauritius", phone: "230" },
  { code: "MV", label: "Maldives", phone: "960" },
  { code: "MW", label: "Malawi", phone: "265" },
  { code: "MX", label: "Mexico", phone: "52" },
  { code: "MY", label: "Malaysia", phone: "60" },
  { code: "MZ", label: "Mozambique", phone: "258" },
  { code: "NA", label: "Namibia", phone: "264" },
  { code: "NC", label: "New Caledonia", phone: "687" },
  { code: "NE", label: "Niger", phone: "227" },
  { code: "NF", label: "Norfolk Island", phone: "672" },
  { code: "NG", label: "Nigeria", phone: "234" },
  { code: "NI", label: "Nicaragua", phone: "505" },
  { code: "NL", label: "Netherlands", phone: "31" },
  { code: "NO", label: "Norway", phone: "47" },
  { code: "NP", label: "Nepal", phone: "977" },
  { code: "NR", label: "Nauru", phone: "674" },
  { code: "NU", label: "Niue", phone: "683" },
  { code: "NZ", label: "New Zealand", phone: "64" },
  { code: "OM", label: "Oman", phone: "968" },
  { code: "PA", label: "Panama", phone: "507" },
  { code: "PE", label: "Peru", phone: "51" },
  { code: "PF", label: "French Polynesia", phone: "689" },
  { code: "PG", label: "Papua New Guinea", phone: "675" },
  { code: "PH", label: "Philippines", phone: "63" },
  { code: "PK", label: "Pakistan", phone: "92" },
  { code: "PL", label: "Poland", phone: "48" },
  {
    code : "PM",
    label: "Saint Pierre and Miquelon",
    phone: "508",
  },
  { code: "PN", label: "Pitcairn", phone: "870" },
  { code: "PR", label: "Puerto Rico", phone: "1" },
  {
    code : "PS",
    label: "Palestine, State of",
    phone: "970",
  },
  { code: "PT", label: "Portugal", phone: "351" },
  { code: "PW", label: "Palau", phone: "680" },
  { code: "PY", label: "Paraguay", phone: "595" },
  { code: "QA", label: "Qatar", phone: "974" },
  { code: "RE", label: "Reunion", phone: "262" },
  { code: "RO", label: "Romania", phone: "40" },
  { code: "RS", label: "Serbia", phone: "381" },
  { code: "RU", label: "Russian Federation", phone: "7" },
  { code: "RW", label: "Rwanda", phone: "250" },
  { code: "SA", label: "Saudi Arabia", phone: "966" },
  { code: "SB", label: "Solomon Islands", phone: "677" },
  { code: "SC", label: "Seychelles", phone: "248" },
  { code: "SD", label: "Sudan", phone: "249" },
  { code: "SE", label: "Sweden", phone: "46" },
  { code: "SG", label: "Singapore", phone: "65" },
  { code: "SH", label: "Saint Helena", phone: "290" },
  { code: "SI", label: "Slovenia", phone: "386" },
  {
    code : "SJ",
    label: "Svalbard and Jan Mayen",
    phone: "47",
  },
  { code: "SK", label: "Slovakia", phone: "421" },
  { code: "SL", label: "Sierra Leone", phone: "232" },
  { code: "SM", label: "San Marino", phone: "378" },
  { code: "SN", label: "Senegal", phone: "221" },
  { code: "SO", label: "Somalia", phone: "252" },
  { code: "SR", label: "Suriname", phone: "597" },
  { code: "SS", label: "South Sudan", phone: "211" },
  {
    code : "ST",
    label: "Sao Tome and Principe",
    phone: "239",
  },
  { code: "SV", label: "El Salvador", phone: "503" },
  {
    code : "SX",
    label: "Sint Maarten (Dutch part)",
    phone: "1-721",
  },
  {
    code : "SY",
    label: "Syrian Arab Republic",
    phone: "963",
  },
  { code: "SZ", label: "Swaziland", phone: "268" },
  {
    code : "TC",
    label: "Turks and Caicos Islands",
    phone: "1-649",
  },
  { code: "TD", label: "Chad", phone: "235" },
  {
    code : "TF",
    label: "French Southern Territories",
    phone: "262",
  },
  { code: "TG", label: "Togo", phone: "228" },
  { code: "TH", label: "Thailand", phone: "66" },
  { code: "TJ", label: "Tajikistan", phone: "992" },
  { code: "TK", label: "Tokelau", phone: "690" },
  { code: "TL", label: "Timor-Leste", phone: "670" },
  { code: "TM", label: "Turkmenistan", phone: "993" },
  { code: "TN", label: "Tunisia", phone: "216" },
  { code: "TO", label: "Tonga", phone: "676" },
  { code: "TR", label: "Turkey", phone: "90" },
  {
    code : "TT",
    label: "Trinidad and Tobago",
    phone: "1-868",
  },
  { code: "TV", label: "Tuvalu", phone: "688" },
  {
    code : "TW",
    label: "Taiwan",
    phone: "886",
  },
  {
    code : "TZ",
    label: "United Republic of Tanzania",
    phone: "255",
  },
  { code: "UA", label: "Ukraine", phone: "380" },
  { code: "UG", label: "Uganda", phone: "256" },
  {
    code     : "US",
    label    : "United States",
    phone    : "1",
    suggested: true,
  },
  { code: "UY", label: "Uruguay", phone: "598" },
  { code: "UZ", label: "Uzbekistan", phone: "998" },
  {
    code : "VA",
    label: "Holy See (Vatican City State)",
    phone: "379",
  },
  {
    code : "VC",
    label: "Saint Vincent and the Grenadines",
    phone: "1-784",
  },
  { code: "VE", label: "Venezuela", phone: "58" },
  {
    code : "VG",
    label: "British Virgin Islands",
    phone: "1-284",
  },
  {
    code : "VI",
    label: "US Virgin Islands",
    phone: "1-340",
  },
  { code: "VN", label: "Vietnam", phone: "84" },
  { code: "VU", label: "Vanuatu", phone: "678" },
  { code: "WF", label: "Wallis and Futuna", phone: "681" },
  { code: "WS", label: "Samoa", phone: "685" },
  { code: "XK", label: "Kosovo", phone: "383" },
  { code: "YE", label: "Yemen", phone: "967" },
  { code: "YT", label: "Mayotte", phone: "262" },
  { code: "ZA", label: "South Africa", phone: "27" },
  { code: "ZM", label: "Zambia", phone: "260" },
  { code: "ZW", label: "Zimbabwe", phone: "263" },
];`;

  const [inputValue, setInputValue] = React.useState("");
  const defaultProps = {
    getOptionLabel: (option) => option.label,
    options       : top100Films,
  };
  const flatProps = { options: top100Films.map((option) => option.label) };
  const [value, setValue] = React.useState(null);
  const OPTIONS = ["Option 1", "Option 2"];
 
  const [open, setOpen] = React.useState(false);
  const [optionss, setOptionss] = React.useState([]);
  const loading = open && optionss.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptionss([...top100Movies]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptionss([]);
    }
  }, [open]);
  return (
    <>
      <ComponentDocs
        component={CoreAutocomplete}
        description={
          <>
            <CoreTypographyBody1>
        The autocomplete is a normal text input enhanced by a panel of suggested
        options.
            </CoreTypographyBody1>

            <CoreTypographyBody1>
        This component is useful for setting the value of a single-line textbox
        in one of two types of scenarios:
            </CoreTypographyBody1>

            <CoreTypographyBody1>
        1. The value for the textbox must be chosen from a predefined set of
        allowed values, e.g., a location field must contain a valid location
        name: combo box.
            </CoreTypographyBody1>

            <CoreTypographyBody1>
        2. The textbox may contain any arbitrary value, but it is advantageous
        to suggest possible values to the user, e.g., a search field may suggest
        similar or previous searches to save the user time: free solo.
            </CoreTypographyBody1>

          </>
        }
        samples={
          <>
            <CodeSample
              title={"Combo box"}
              description={"The value must be chosen from a predefined set of allowed values."}
              code={`<CoreAutocomplete
  styleClasses={[CoreClasses.WIDTH.W_50]}
  disablePortal
  options={top100Films}
  renderInput={(params) => (
    <CoreTextField {...params} variant="outlined" label="Movie" />
  )}
/>`}
              expandedCode={`import { CoreAutocomplete, CoreClasses, CoreTextField } from "@wrappid/core";
  
export default function ComboBox() {
  return (
    <CoreAutocomplete
      styleClasses={[CoreClasses.WIDTH.W_50]}
      disablePortal
      options={top100Films}
      renderInput={(params) => (
        <CoreTextField {...params} variant="outlined" label="Movie" />
      )}
    />
  );`}
              renderElement={
                <>
                  <CoreAutocomplete
                    styleClasses={[CoreClasses.WIDTH.W_50]}
                    disablePortal
                    options={top100Films}
                    renderInput={(params) => (
                      <CoreTextField {...params} variant="outlined" label="Movie" />
                    )}
                  />
                </>
              }
            />

            <CodeSample
              title={"Playground"}
              description={"Each of the following examples demonstrates one feature of the Autocomplete component."}
              code={`<CoreAutocomplete
  {...defaultProps}
  id="disable-close-on-select"
  disableCloseOnSelect
  renderInput={(params) => (
    <CoreTextField
      {...params}
      label="disableCloseOnSelect"
      variant="standard"
    />
  )}
/>
<CoreAutocomplete
  {...defaultProps}
  id="clear-on-escape"
  clearOnEscape
  renderInput={(params) => (
    <CoreTextField
      {...params}
      label="clearOnEscape"
      variant="standard"
    />
  )}
/>
<CoreAutocomplete
  {...defaultProps}
  id="disable-clearable"
  disableClearable
  renderInput={(params) => (
    <CoreTextField
      {...params}
      label="disableClearable"
      variant="standard"
    />
  )}
/>
<CoreAutocomplete
  {...defaultProps}
  id="include-input-in-list"
  includeInputInList
  renderInput={(params) => (
    <CoreTextField
      {...params}
      label="includeInputInList"
      variant="standard"
    />
  )}
/>
<CoreAutocomplete
  {...flatProps}
  id="flat-demo"
  renderInput={(params) => (
    <CoreTextField {...params} label="flat" variant="standard" />
  )}
/>
<CoreAutocomplete
  {...defaultProps}
  id="controlled-demo"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
  renderInput={(params) => (
    <CoreTextField
      {...params}
      label="controlled"
      variant="standard"
    />
  )}
/>
<CoreAutocomplete
  {...defaultProps}
  id="auto-complete"
  autoComplete
  includeInputInList
  renderInput={(params) => (
    <CoreTextField
      {...params}
      label="autoComplete"
      variant="standard"
    />
  )}
/>
<CoreAutocomplete
  {...defaultProps}
  id="disable-list-wrap"
  disableListWrap
  renderInput={(params) => (
    <CoreTextField
      {...params}
      label="disableListWrap"
      variant="standard"
    />
  )}
/>
<CoreAutocomplete
  {...defaultProps}
  id="open-on-focus"
  openOnFocus
  renderInput={(params) => (
    <CoreTextField
      {...params}
      label="openOnFocus"
      variant="standard"
    />
  )}
/>
<CoreAutocomplete
  {...defaultProps}
  id="auto-highlight"
  autoHighlight
  renderInput={(params) => (
    <CoreTextField
      {...params}
      label="autoHighlight"
      variant="standard"
    />
  )}
/>
<CoreAutocomplete
  {...defaultProps}
  id="auto-select"
  autoSelect
  renderInput={(params) => (
    <CoreTextField
      {...params}
      label="autoSelect"
      variant="standard"
    />
  )}
/>
<CoreAutocomplete
  {...defaultProps}
  id="disabled"
  disabled
  renderInput={(params) => (
    <CoreTextField
      {...params}
      label="disabled"
      variant="standard"
    />
  )}
/>
<CoreAutocomplete
  {...defaultProps}
  id="disable-portal"
  disablePortal
  renderInput={(params) => (
    <CoreTextField
      {...params}
      label="disablePortal"
      variant="standard"
    />
  )}
/>
<CoreAutocomplete
  {...defaultProps}
  id="blur-on-select"
  blurOnSelect
  renderInput={(params) => (
    <CoreTextField
      {...params}
      label="blurOnSelect"
      variant="standard"
    />
  )}
/>
<CoreAutocomplete
  {...defaultProps}
  id="clear-on-blur"
  clearOnBlur
  renderInput={(params) => (
    <CoreTextField
      {...params}
      label="clearOnBlur"
      variant="standard"
    />
  )}
/>
<CoreAutocomplete
  {...defaultProps}
  id="select-on-focus"
  selectOnFocus
  renderInput={(params) => (
    <CoreTextField
      {...params}
      label="selectOnFocus"
      variant="standard"
    />
  )}
/>
<CoreAutocomplete
  {...flatProps}
  id="readOnly"
  readOnly
  defaultValue={flatProps.options[13]}
  renderInput={(params) => (
    <CoreTextField
      {...params}
      label="readOnly"
      variant="standard"
    />
  )}
/>`}
              expandedCode={`import React from "react";
import {
  CoreAutocomplete,
  CoreTextField,
  CoreStack
} from "@wrappid/core";

export default function Playground() {
  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option) => option.title,
  };
  const flatProps = {
    options: top100Films.map((option) => option.title),
  };
  const [value, setValue] = React.useState(null);

  return (
    <CoreStack spacing={2} width={300}>
      <CoreAutocomplete
        {...defaultProps}
        id="disable-close-on-select"
        disableCloseOnSelect
        renderInput={(params) => (
          <CoreTextField
            {...params}
            label="disableCloseOnSelect"
            variant="standard"
          />
        )}
      />
      <CoreAutocomplete
        {...defaultProps}
        id="clear-on-escape"
        clearOnEscape
        renderInput={(params) => (
          <CoreTextField
            {...params}
            label="clearOnEscape"
            variant="standard"
          />
        )}
      />
      <CoreAutocomplete
        {...defaultProps}
        id="disable-clearable"
        disableClearable
        renderInput={(params) => (
          <CoreTextField
            {...params}
            label="disableClearable"
            variant="standard"
          />
        )}
      />
      <CoreAutocomplete
        {...defaultProps}
        id="include-input-in-list"
        includeInputInList
        renderInput={(params) => (
          <CoreTextField
            {...params}
            label="includeInputInList"
            variant="standard"
          />
        )}
      />
      <CoreAutocomplete
        {...flatProps}
        id="flat-demo"
        renderInput={(params) => (
          <CoreTextField {...params} label="flat" variant="standard" />
        )}
      />
      <CoreAutocomplete
        {...defaultProps}
        id="controlled-demo"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <CoreTextField
            {...params}
            label="controlled"
            variant="standard"
          />
        )}
      />
      <CoreAutocomplete
        {...defaultProps}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <CoreTextField
            {...params}
            label="autoComplete"
            variant="standard"
          />
        )}
      />
      <CoreAutocomplete
        {...defaultProps}
        id="disable-list-wrap"
        disableListWrap
        renderInput={(params) => (
          <CoreTextField
            {...params}
            label="disableListWrap"
            variant="standard"
          />
        )}
      />
      <CoreAutocomplete
        {...defaultProps}
        id="open-on-focus"
        openOnFocus
        renderInput={(params) => (
          <CoreTextField
            {...params}
            label="openOnFocus"
            variant="standard"
          />
        )}
      />
      <CoreAutocomplete
        {...defaultProps}
        id="auto-highlight"
        autoHighlight
        renderInput={(params) => (
          <CoreTextField
            {...params}
            label="autoHighlight"
            variant="standard"
          />
        )}
      />
      <CoreAutocomplete
        {...defaultProps}
        id="auto-select"
        autoSelect
        renderInput={(params) => (
          <CoreTextField
            {...params}
            label="autoSelect"
            variant="standard"
          />
        )}
      />
      <CoreAutocomplete
        {...defaultProps}
        id="disabled"
        disabled
        renderInput={(params) => (
          <CoreTextField
            {...params}
            label="disabled"
            variant="standard"
          />
        )}
      />
      <CoreAutocomplete
        {...defaultProps}
        id="disable-portal"
        disablePortal
        renderInput={(params) => (
          <CoreTextField
            {...params}
            label="disablePortal"
            variant="standard"
          />
        )}
      />
      <CoreAutocomplete
        {...defaultProps}
        id="blur-on-select"
        blurOnSelect
        renderInput={(params) => (
          <CoreTextField
            {...params}
            label="blurOnSelect"
            variant="standard"
          />
        )}
      />
      <CoreAutocomplete
        {...defaultProps}
        id="clear-on-blur"
        clearOnBlur
        renderInput={(params) => (
          <CoreTextField
            {...params}
            label="clearOnBlur"
            variant="standard"
          />
        )}
      />
      <CoreAutocomplete
        {...defaultProps}
        id="select-on-focus"
        selectOnFocus
        renderInput={(params) => (
          <CoreTextField
            {...params}
            label="selectOnFocus"
            variant="standard"
          />
        )}
      />
      <CoreAutocomplete
        {...flatProps}
        id="readOnly"
        readOnly
        defaultValue={flatProps.options[13]}
        renderInput={(params) => (
          <CoreTextField
            {...params}
            label="readOnly"
            variant="standard"
          />
        )}
      />
    </CoreStack>
  );                
}
  
${stringTop100Films}`}
              renderElement={
                <>
                  <CoreStack spacing={2} width={300}>
                    <CoreAutocomplete
                      {...defaultProps}
                      id="disable-close-on-select"
                      disableCloseOnSelect
                      renderInput={(params) => (
                        <CoreTextField
                          {...params}
                          label="disableCloseOnSelect"
                          variant="standard"
                        />
                      )}
                    />

                    <CoreAutocomplete
                      {...defaultProps}
                      id="clear-on-escape"
                      clearOnEscape
                      renderInput={(params) => (
                        <CoreTextField
                          {...params}
                          label="clearOnEscape"
                          variant="standard"
                        />
                      )}
                    />

                    <CoreAutocomplete
                      {...defaultProps}
                      id="disable-clearable"
                      disableClearable
                      renderInput={(params) => (
                        <CoreTextField
                          {...params}
                          label="disableClearable"
                          variant="standard"
                        />
                      )}
                    />

                    <CoreAutocomplete
                      {...defaultProps}
                      id="include-input-in-list"
                      includeInputInList
                      renderInput={(params) => (
                        <CoreTextField
                          {...params}
                          label="includeInputInList"
                          variant="standard"
                        />
                      )}
                    />

                    <CoreAutocomplete
                      {...flatProps}
                      id="flat-demo"
                      renderInput={(params) => (
                        <CoreTextField {...params} label="flat" variant="standard" />
                      )}
                    />

                    <CoreAutocomplete
                      {...defaultProps}
                      id="controlled-demo"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => (
                        <CoreTextField
                          {...params}
                          label="controlled"
                          variant="standard"
                        />
                      )}
                    />

                    <CoreAutocomplete
                      {...defaultProps}
                      id="auto-complete"
                      autoComplete
                      includeInputInList
                      renderInput={(params) => (
                        <CoreTextField
                          {...params}
                          label="autoComplete"
                          variant="standard"
                        />
                      )}
                    />

                    <CoreAutocomplete
                      {...defaultProps}
                      id="disable-list-wrap"
                      disableListWrap
                      renderInput={(params) => (
                        <CoreTextField
                          {...params}
                          label="disableListWrap"
                          variant="standard"
                        />
                      )}
                    />

                    <CoreAutocomplete
                      {...defaultProps}
                      id="open-on-focus"
                      openOnFocus
                      renderInput={(params) => (
                        <CoreTextField
                          {...params}
                          label="openOnFocus"
                          variant="standard"
                        />
                      )}
                    />

                    <CoreAutocomplete
                      {...defaultProps}
                      id="auto-highlight"
                      autoHighlight
                      renderInput={(params) => (
                        <CoreTextField
                          {...params}
                          label="autoHighlight"
                          variant="standard"
                        />
                      )}
                    />

                    <CoreAutocomplete
                      {...defaultProps}
                      id="auto-select"
                      autoSelect
                      renderInput={(params) => (
                        <CoreTextField
                          {...params}
                          label="autoSelect"
                          variant="standard"
                        />
                      )}
                    />

                    <CoreAutocomplete
                      {...defaultProps}
                      id="disabled"
                      disabled
                      renderInput={(params) => (
                        <CoreTextField
                          {...params}
                          label="disabled"
                          variant="standard"
                        />
                      )}
                    />

                    <CoreAutocomplete
                      {...defaultProps}
                      id="disable-portal"
                      disablePortal
                      renderInput={(params) => (
                        <CoreTextField
                          {...params}
                          label="disablePortal"
                          variant="standard"
                        />
                      )}
                    />

                    <CoreAutocomplete
                      {...defaultProps}
                      id="blur-on-select"
                      blurOnSelect
                      renderInput={(params) => (
                        <CoreTextField
                          {...params}
                          label="blurOnSelect"
                          variant="standard"
                        />
                      )}
                    />

                    <CoreAutocomplete
                      {...defaultProps}
                      id="clear-on-blur"
                      clearOnBlur
                      renderInput={(params) => (
                        <CoreTextField
                          {...params}
                          label="clearOnBlur"
                          variant="standard"
                        />
                      )}
                    />

                    <CoreAutocomplete
                      {...defaultProps}
                      id="select-on-focus"
                      selectOnFocus
                      renderInput={(params) => (
                        <CoreTextField
                          {...params}
                          label="selectOnFocus"
                          variant="standard"
                        />
                      )}
                    />

                    <CoreAutocomplete
                      {...flatProps}
                      id="readOnly"
                      readOnly
                      defaultValue={flatProps.options[13]}
                      renderInput={(params) => (
                        <CoreTextField
                          {...params}
                          label="readOnly"
                          variant="standard"
                        />
                      )}
                    />
                  </CoreStack>
                </>
              }
            />

            <CodeSample
              title={"Country select"}
              description={"Choose one of the 248 countries."}
              code={`<CoreAutocomplete
  id="country-select-demo"
  styleClasses={[CoreClasses.WIDTH.W_50]}
  options={countries}
  autoHighlight
  getOptionLabel={(option) => option.label}
  renderOption={(props, option) => {
    const { key, ...optionProps } = props;
    return (
      <CoreBox
        key={key}
        component="li"
        {...optionProps}
      >
        <img
          loading="lazy"
          width="20"
          srcSet={` + "`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`" + `}
          src={` + "`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`" + ` }
          alt=""
        />
        {option.label} ({option.code}) +{option.phone}
      </CoreBox>
    );
  }}
  renderInput={(params) => (
    <CoreTextField
      variant="outlined"
      {...params}
      label="Choose a country"
      slotProps={{
        htmlInput: {
          ...params.inputProps,
          autoComplete: "new-password", // disable autocomplete and autofill
        },
      }}
    />
  )}
/>`}
              expandedCode={`import {
  CoreAutocomplete,
  CoreClasses,
  CoreTextField,
  CoreBox
} from "@wrappid/core";
  
export default function CountrySelect() {
  return (
    <CoreAutocomplete
      id="country-select-demo"
      styleClasses={[CoreClasses.WIDTH.W_50]}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <CoreBox
            key={key}
            component="li"
            {...optionProps}
          >
            <img
              loading="lazy"
              width="20"
              srcSet={` + "`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`" + `}
              src={` + "`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`" + ` }
              alt=""
            />
            {option.label} ({option.code}) +{option.phone}
          </CoreBox>
        );
      }}
      renderInput={(params) => (
        <CoreTextField
          variant="outlined"
          {...params}
          label="Choose a country"
          slotProps={{
            htmlInput: {
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            },
          }}
        />
      )}
    />
  );  
}
  
${stringCountries}`}
              renderElement={
                <>
                  <CoreAutocomplete
                    id="country-select-demo"
                    styleClasses={[CoreClasses.WIDTH.W_50]}
                    options={countries}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option) => {
                      const { key, ...optionProps } = props;

                      return (
                        <CoreBox
                          key={key}
                          component="li"
                          {...optionProps}
                        >
                          <img
                            loading="lazy"
                            width="20"
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            alt=""
                          />

                          {option.label} ({option.code}) +{option.phone}
                        </CoreBox>
                      );
                    }}
                    renderInput={(params) => (
                      <CoreTextField
                        variant="outlined"
                        {...params}
                        label="Choose a country"
                        slotProps={{
                          htmlInput: {
                            ...params.inputProps,
                            autoComplete: "new-password", // disable autocomplete and autofill
                          },
                        }}
                      />
                    )}
                  />
                </>
              }
            /> 

            <CodeSample
              title={"Controlled states"}
              description={
                <>
                  <CoreTypographyBody1>
              The component has two states that can be controlled:
                  </CoreTypographyBody1>

                  <CoreTypographyBody1>
              1. the <CodeBlock>value</CodeBlock> state with the value
              onChange props combination. This state represents the value
              selected by the user, for instance when pressing Enter.
                  </CoreTypographyBody1>

                  <CoreTypographyBody1>
              2. the <CodeBlock>input value</CodeBlock> state with the
              inputValue/onInputChange props combination. This state represents
              the value displayed in the textbox.
                  </CoreTypographyBody1>

                  <CoreTypographyBody1>
              These two states are isolated, and should be controlled
              independently.
                  </CoreTypographyBody1>
                </>
              }
              code={"NA"}
              expandedCode={`import React from "react";
import {
  CoreTypographyBody1,
  CoreAutocomplete,
  CoreClasses,
  CoreTextField,
  CoreBox
} from "@wrappid/core";
                
export default function ControllableStates() {
  const [inputValue, setInputValue] = React.useState("");
  const [value, setValue] = React.useState(null);
  const OPTIONS = ["Option 1", "Option 2"];

  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_50]} >
      <CoreTypographyBody1>{` + "`value: ${value !== null ? `'${value}'`" + " : \"null\"}" + "`" + `}</CoreTypographyBody1>

      <CoreTypographyBody1>{` + "`inputValue: '${inputValue}'`" + `}</CoreTypographyBody1>

      <CoreAutocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={OPTIONS}
        renderInput={(params) => (
          <CoreTextField {...params} variant="outlined" label="Controllable" />
        )}
      />
    </CoreBox>
  );
}`}
              renderElement={
                <>
                  <CoreBox styleClasses={[CoreClasses.WIDTH.W_50]} >
                    <CoreTypographyBody1>{`value: ${value !== null ? `'${value}'` : "null"}`}</CoreTypographyBody1>

                    <CoreTypographyBody1>{`inputValue: '${inputValue}'`}</CoreTypographyBody1>

                    <CoreAutocomplete
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      inputValue={inputValue}
                      onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                      }}
                      id="controllable-states-demo"
                      options={OPTIONS}
                      renderInput={(params) => (
                        <CoreTextField {...params} variant="outlined" label="Controllable" />
                      )}
                    />
                  </CoreBox>
                </>
              }
            />

            <CodeSample
              title={" "}
              description={
                <>
                  <CoreTypographyBody1>
              If you control the <CodeBlock>value</CodeBlock>, make sure it is
              referentially stable between renders. In other words, the
              reference to the value should not change if the value itself
              does not change.
                  </CoreTypographyBody1>

                  <CoreTypographyBody1>
              In the first example, <CodeBlock>allValues.filter</CodeBlock> is

              called and returns a <strong>new array</strong> every render. The
              fix includes memoizing the value, so it changes only when needed.
                  </CoreTypographyBody1>

                  <CoreTypographyBody1>
                   
                  </CoreTypographyBody1>
                </>
              }
              code={text}
            />

            <CodeSample
              title={"Free solo"}
              description={
                "Set `freeSolo` to true so the textbox can contain any arbitrary value."
              }
            />

            <CodeSample
              title={"Search input"}
              description={
                "The prop is designed to cover the primary use case of a search input with suggestions, e.g. Google search or react-autowhatever."
              }
              code={"NA"}
              expandedCode={`import { CoreStack, CoreAutocomplete, CoreTextField } from "@wrappid/core";

export default function FreeSolo() {
  return (
    <CoreStack spacing={2} width={300}>
      <CoreAutocomplete
        id="free-solo-demo"
        freeSolo
        options={top100Films.map((option) => option.label)}
        renderInput={(params) => (
          <CoreTextField variant="outlined" {...params} label="freeSolo" />
        )}
      />
        
      <CoreAutocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.label)}
        renderInput={(params) => (
          <CoreTextField
            variant="outlined"
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </CoreStack>
  );
}

${stringTop100Films}`}
              renderElement={
                <>
                  <CoreStack spacing={2} width={300}>
                    <CoreAutocomplete
                      id="free-solo-demo"
                      freeSolo
                      options={top100Films.map((option) => option.label)}
                      renderInput={(params) => (
                        <CoreTextField variant="outlined" {...params} label="freeSolo" />
                      )}
                    />

                    <CoreAutocomplete
                      freeSolo
                      id="free-solo-2-demo"
                      disableClearable
                      options={top100Films.map((option) => option.label)}
                      renderInput={(params) => (
                        <CoreTextField
                          variant="outlined"
                          {...params}
                          label="Search input"
                          InputProps={{
                            ...params.InputProps,
                            type: "search",
                          }}
                        />
                      )}
                    />
                  </CoreStack>
                </>
              }
            />

            <CodeSample
              title={" "}
              description={
                <>
                  <CoreTypographyBody1>
              Be careful when using the free solo mode with non-string options,
              as it may cause type mismatch.
                  </CoreTypographyBody1>

                  <CoreTypographyBody1>
              The value created by typing into the textbox is always a string,
              regardless of the type of the options.
                  </CoreTypographyBody1>
                </>
              }
            />

            <CodeSample
              title={"Creatable"}
              description={
                <>
                  <CoreTypographyBody1>
                If you intend to use this mode for a combo box like experience we recommend setting:
                  </CoreTypographyBody1>
                  <CoreList variant="HTML" listType="DISC">
                    <CoreListItem><CodeBlock>selectOnFocus</CodeBlock> to help the user clear the selected value.</CoreListItem>
                    <CoreListItem><CodeBlock>clearOnBlur</CodeBlock> to help the user enter a new value</CoreListItem>
                    <CoreListItem><CodeBlock>handleHomeEndKeys</CodeBlock> to move focus inside the popup with the Home and End keys.</CoreListItem>
                    <CoreListItem>{"A last option, for instance: Add \"YOUR SEARCH\"."}</CoreListItem>
                  </CoreList>
                </>
              }
              code={"NA"}
              expandedCode={`import React from "react";
import { CoreAutocomplete, CoreClasses, CoreTextField } from "@wrappid/core";
                
function stripDiacritics(string) {
  return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
export function createFilterOptions(config = {}) {
  const {
    ignoreAccents = true,
    ignoreCase = true,
    limit,
    matchFrom = "any",
    stringify,
    trim = false,
  } = config;

  return (options, { inputValue, getOptionLabel }) => {
    let input = trim ? inputValue.trim() : inputValue;

    if (ignoreCase) {
      input = input.toLowerCase();
    }
    if (ignoreAccents) {
      input = stripDiacritics(input);
    }

    const filteredOptions = !input
      ? options
      : options.filter((option) => {
        let candidate = (stringify || getOptionLabel)(option);

        if (ignoreCase) {
          candidate = candidate.toLowerCase();
        }
        if (ignoreAccents) {
          candidate = stripDiacritics(candidate);
        }

        return matchFrom === "start"
          ? candidate.indexOf(input) === 0
          : candidate.indexOf(input) > -1;
      });

    return typeof limit === "number" ? filteredOptions.slice(0, limit) : filteredOptions;
  };
}

const filter = createFilterOptions();

export default function FreeSoloCreateOption() {
  const [value, setValue] = React.useState(null);
   
  return(
    <CoreAutocomplete
      styleClasses={[CoreClasses.WIDTH.W_50]}
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setValue({ title: newValue });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({ title: newValue.inputValue });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.title);

        if (inputValue !== "" && !isExisting) {
          filtered.push({
            inputValue,
            title: \`Add "\${inputValue}"\`,
          });
        }
        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={top100Movies}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === "string") {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            {option.title}
          </li>
        );
      }}
      freeSolo
      renderInput={(params) => (
        <CoreTextField {...params} variant="outlined" label="Free solo with text demo" />
      )}
    />
  );
}

${stringTop100Movies}`}
              renderElement={<>
                <CoreAutocomplete
                  styleClasses={[CoreClasses.WIDTH.W_50]}
                  value={value}
                  onChange={(event, newValue) => {
                    if (typeof newValue === "string") {
                      setValue({ title: newValue });
                    } else if (newValue && newValue.inputValue) {
                      // Create a new value from the user input
                      setValue({ title: newValue.inputValue });
                    } else {
                      setValue(newValue);
                    }
                  }}
                  filterOptions={(options, params) => {
                    const filtered = filter(options, params);

                    const { inputValue } = params;
                    // Suggest the creation of a new value
                    const isExisting = options.some((option) => inputValue === option.title);

                    if (inputValue !== "" && !isExisting) {
                      filtered.push({
                        inputValue,
                        title: `Add "${inputValue}"`,
                      });
                    }

                    return filtered;
                  }}
                  selectOnFocus
                  clearOnBlur
                  handleHomeEndKeys
                  id="free-solo-with-text-demo"
                  options={top100Movies}
                  getOptionLabel={(option) => {
                    // Value selected with enter, right from the input
                    if (typeof option === "string") {
                      return option;
                    }
                    // Add "xxx" option created dynamically
                    if (option.inputValue) {
                      return option.inputValue;
                    }
                    // Regular option
                    return option.title;
                  }}
                  renderOption={(props, option) => {
                    const { key, ...optionProps } = props;

                    return (
                      <li key={key} {...optionProps}>
                        {option.title}
                      </li>
                    );
                  }}
                  freeSolo
                  renderInput={(params) => (
                    <CoreTextField {...params} variant="outlined" label="Free solo with text demo" />
                  )}
                />
              </>}
            />

            <CodeSample
              title={"Grouped"}
              description={
                <>
                  <CoreTypographyBody1>
                You can group the options with the groupBy prop. If you do so, make sure that the options are also sorted with the same dimension that they are grouped by, otherwise, you will notice duplicate headers.
                  </CoreTypographyBody1>
                </>
              }
              code={`<CoreAutocomplete
  styleClasses={[CoreClasses.WIDTH.W_50]}
  options={options.sort((data, value) => -value.firstLetter.localeCompare(data.firstLetter))}
  groupBy={(option) => option.firstLetter}
  getOptionLabel={(option) => option.title}
  renderInput={(params) => <CoreTextField {...params} variant="outlined" label="With categories" />}
/>`}
              expandedCode={`import { CoreAutocomplete, CoreClasses, CoreTextField } from "@wrappid/core";

export default function Grouped() {
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();

    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (  
    <CoreAutocomplete
      styleClasses={[CoreClasses.WIDTH.W_50]}
      options={options.sort((data, value) => -value.firstLetter.localeCompare(data.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => <CoreTextField {...params} variant="outlined" label="With categories" />}
    />
  );
}

${stringTop100Films}
`}
              renderElement={<>
                <CoreAutocomplete
                  styleClasses={[CoreClasses.WIDTH.W_50]}
                  options={options.sort((data, value) => -value.firstLetter.localeCompare(data.firstLetter))}
                  groupBy={(option) => option.firstLetter}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => <CoreTextField {...params} variant="outlined" label="With categories" />}
                />
              </>}
            />

            <CodeSample
              title={"TITLE_OF_THE_SAMPLE"}
              description={"DESCRIPTION_OF_THE_SAMPLE"}
              code={"PRE-FORMATTED_CODE_GOES_HERE"}
              renderElement={<></>}
            />

            <CodeSample
              title={"Disabled options"}
              description={" "}
              code={`<CoreAutocomplete
  options={timeSlots}
  styleClasses={[CoreClasses.WIDTH.W_50]}
  getOptionDisabled={(option) =>
    option === timeSlots[0] || option === timeSlots[2]
  }
  renderInput={(params) => <CoreTextField {...params} variant="outlined" label="Disabled options" />}
/>`}
              expandedCode={`import { CoreAutocomplete, CoreClasses, CoreTextField } from "@wrappid/core";

// One time slot every 30 minutes.
const timeSlots = Array.from(new Array(24 * 2)).map(
  (option, index) =>
    \`\${index < 20 ? "0" : ""} $\{Math.floor(index / 2)}:$\{
      index % 2 === 0 ? "00" : "30"
    }\`
);

export default function DisabledOptions() {
  return (
    <CoreAutocomplete
      options={timeSlots}
      styleClasses={[CoreClasses.WIDTH.W_50]}
      getOptionDisabled={(option) =>
        option === timeSlots[0] || option === timeSlots[2]
      }
      renderInput={(params) => <CoreTextField {...params} variant="outlined" label="Disabled options" />}
    />
  );
}`}
              renderElement={<>
                <CoreAutocomplete
                  options={timeSlots}
                  styleClasses={[CoreClasses.WIDTH.W_50]}
                  getOptionDisabled={(option) =>
                    option === timeSlots[0] || option === timeSlots[2]
                  }
                  renderInput={(params) => <CoreTextField {...params} variant="outlined" label="Disabled options" />}
                />
              </>}
            />

            <CodeSample
              title={"useAutocomplete (NOT_IMPLEMENTED)"}
              description={"DESCRIPTION_OF_THE_SAMPLE"}
              code={"PRE-FORMATTED_CODE_GOES_HERE"}
              renderElement={<></>}
            />

            <CodeSample
              title={"Customized hook (NOT_IMPLEMENTED)"}
              description={"DESCRIPTION_OF_THE_SAMPLE"}
              code={"PRE-FORMATTED_CODE_GOES_HERE"}
              renderElement={<></>}
            />

            <CoreH4>Asynchronous requests</CoreH4>

            <CodeSample
              title={"Load on open"}
              description={"It displays a progress state as long as the network request is pending."}
              code={`<CoreAutocomplete
  styleClasses={[CoreClasses.WIDTH.W_50]}
  open={open}
  onOpen={() => {
    setOpen(true);
  }}
  onClose={() => {
    setOpen(false);
  }}
  isOptionEqualToValue={(option, value) => option.title === value.title}
  getOptionLabel={(option) => option.title}
  options={optionss}
  loading={loading}
  renderInput={(params) => (
    <CoreTextField
      {...params}
      variant="outlined"
      label="Asynchronous"
      slotProps={{
        input: {
          ...params.InputProps,
          endAdornment: (
            <React.Fragment>
              {loading ? <CoreCircularProgress color="error" size={20} /> : null}
              {params.InputProps.endAdornment}
            </React.Fragment>
          ),
        },
      }}
    />
  )}
/>`}
              expandedCode={`import React from "react";
import {
  CoreAutocomplete,
  CoreClasses,
  CoreTextField,
  CoreCircularProgress
} from "@wrappid/core";

function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}
                
export default function Asynchronous() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...top100Movies]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return(
    <CoreAutocomplete
      styleClasses={[CoreClasses.WIDTH.W_50]}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <CoreTextField
          {...params}
          variant="outlined"
          label="Asynchronous"
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? <CoreCircularProgress color="error" size={20} /> : null}

                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            },
          }}
        />
      )}
    />
  );
}

${stringTop100Films}`}
              renderElement={<>
                <CoreAutocomplete
                  styleClasses={[CoreClasses.WIDTH.W_50]}
                  open={open}
                  onOpen={() => {
                    setOpen(true);
                  }}
                  onClose={() => {
                    setOpen(false);
                  }}
                  isOptionEqualToValue={(option, value) => option.title === value.title}
                  getOptionLabel={(option) => option.title}
                  options={optionss}
                  loading={loading}
                  renderInput={(params) => (
                    <CoreTextField
                      {...params}
                      variant="outlined"
                      label="Asynchronous"
                      slotProps={{
                        input: {
                          ...params.InputProps,
                          endAdornment: (
                            <React.Fragment>
                              {loading ? <CoreCircularProgress color="error" size={20} /> : null}
                              {params.InputProps.endAdornment}
                            </React.Fragment>
                          ),
                        },
                      }}
                    />
                  )}
                />
              </>}
            />

            <CodeSample title={"Search as you type"} description={""} code={""} />

            <CodeSample
              title={"Google Maps place (NOT_DEFINED)"}
              description={"DESCRIPTION_OF_THE_SAMPLE"}
              code={"PRE-FORMATTED_CODE_GOES_HERE"}
              renderElement={<></>}
            />

            <CodeSample
              title={"Multiple values"}
              description={"Also known as tags, the user is allowed to enter more than one value."}
              code={"NA"}
              expandedCode={`import {
  CoreAutocomplete,
  CoreTextField,
  CoreStack,
  CoreChip
} from "@wrappid/core";

export default function Tags() {
  return (
    <CoreStack spacing={3} width={500}>
      <CoreAutocomplete
        multiple
        id="tags-standard"
        options={top100Movies}
        getOptionLabel={(option) => option.title}
        defaultValue={[top100Movies[13]]}
        renderInput={(params) => (
          <CoreTextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
      />

      <CoreAutocomplete
        multiple
        id="tags-outlined"
        options={top100Movies}
        getOptionLabel={(option) => option.title}
        defaultValue={[top100Movies[13]]}
        filterSelectedOptions
        renderInput={(params) => (
          <CoreTextField
            {...params}
            variant="outlined"
            label="filterSelectedOptions"
            placeholder="Favorites"
          />
        )}
      />

      <CoreAutocomplete
        multiple
        id="tags-filled"
        options={top100Movies.map((option) => option.title)}
        defaultValue={[top100Movies[13].title]}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => {
            const { key, ...tagProps } = getTagProps({ index });
            return (
              <CoreChip
                variant="outlined"
                label={option}
                key={key}
                {...tagProps} />
            );
          })
        }
        renderInput={(params) => (
          <CoreTextField
            {...params}
            variant="filled"
            label="freeSolo"
            placeholder="Favorites"
          />
        )}
      />
      <CoreAutocomplete
        multiple
        id="tags-readOnly"
        options={top100Movies.map((option) => option.title)}
        defaultValue={[top100Movies[12].title, top100Movies[13].title]}
        readOnly
        renderInput={(params) => (
          <CoreTextField
            {...params}
            variant="outlined"
            label="readOnly"
            placeholder="Favorites" />
        )}
      />
    </CoreStack>  
  );               
}

${stringTop100Movies}
`}
              renderElement={<>
                <CoreStack spacing={3} width={500}>
                  <CoreAutocomplete
                    multiple
                    id="tags-standard"
                    options={top100Movies}
                    getOptionLabel={(option) => option.title}
                    defaultValue={[top100Movies[13]]}
                    renderInput={(params) => (
                      <CoreTextField
                        {...params}
                        variant="standard"
                        label="Multiple values"
                        placeholder="Favorites"
                      />
                    )}
                  />
                  <CoreAutocomplete
                    multiple
                    id="tags-outlined"
                    options={top100Movies}
                    getOptionLabel={(option) => option.title}
                    defaultValue={[top100Movies[13]]}
                    filterSelectedOptions
                    renderInput={(params) => (
                      <CoreTextField
                        {...params}
                        variant="outlined"
                        label="filterSelectedOptions"
                        placeholder="Favorites"
                      />
                    )}
                  />
                  <CoreAutocomplete
                    multiple
                    id="tags-filled"
                    options={top100Movies.map((option) => option.title)}
                    defaultValue={[top100Movies[13].title]}
                    freeSolo
                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => {
                        const { key, ...tagProps } = getTagProps({ index });

                        return (
                          <CoreChip
                            variant="outlined"
                            label={option}
                            key={key}
                            {...tagProps} />
                        );
                      })
                    }
                    renderInput={(params) => (
                      <CoreTextField
                        {...params}
                        variant="filled"
                        label="freeSolo"
                        placeholder="Favorites"
                      />
                    )}
                  />
                  <CoreAutocomplete
                    multiple
                    id="tags-readOnly"
                    options={top100Movies.map((option) => option.title)}
                    defaultValue={[top100Movies[12].title, top100Movies[13].title]}
                    readOnly
                    renderInput={(params) => (
                      <CoreTextField
                        {...params}
                        variant="outlined"
                        label="readOnly"
                        placeholder="Favorites" />
                    )}
                  />
                </CoreStack>
              </>}
            />

            <CodeSample
              title={"Fixed options (NOT_DEFINED)"}
              description={"In the event that you need to lock certain tags so that they can't be removed, you can set the chips disabled."}
              code={"PRE-FORMATTED_CODE_GOES_HERE"}
              renderElement={<>
                <CoreAutocomplete
                  multiple
                  id="fixed-tags-demo"
                  value={data}
                  onChange={(event, newValue) => {
                    setData([...fixedOptions, ...newValue.filter((option) => fixedOptions.indexOf(option) === -1)]);
                  }}
                  options={top100Movies}
                  getOptionLabel={(option) => option.title}
                  renderTags={(tagValue, getTagProps) =>
                    tagValue.map((option, index) => {
                      const { key, ...tagProps } = getTagProps({ index });

                      return (
                        <CoreChip
                          key={key}
                          label={option.title}
                          {...tagProps}
                          disabled={fixedOptions.indexOf(option) !== -1}
                        />
                      );
                    })
                  }
                  width={500}
                  renderInput={(params) => (
                    <CoreTextField {...params} label="Fixed tag" placeholder="Favorites" />
                  )}
                />
              
              </>}
            />

            <CodeSample
              title={"Checkboxes"}
              description={" "}
              code={"NA"}
              expandedCode={`import { CoreAutocomplete, CoreCheckbox, CoreClasses, CoreIcon, CoreTextField } from "@wrappid/core";

export default function CheckboxesTags() {
  return (
    <CoreAutocomplete 
      styleClasses={[CoreClasses.WIDTH.W_50]}
      multiple
      id="checkboxes-tags-demo"
      options={top100Movies}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            <CoreCheckbox
              icon={<CoreIcon icon="check_box_outline_blank" fontSize="small" />}
              checkedIcon={<CoreIcon icon="check_box" />}
              checked={selected}
            />
            
            {option.title}
          </li>
        );
      }}
      renderInput={(params) => (
        <CoreTextField
          {...params}
          variant="outlined"
          label="Checkboxes"
          placeholder="Favorites" />
      )}
    />
  );                
}                

${stringTop100Movies}`}
              renderElement={<>
                <CoreAutocomplete
                  styleClasses={[CoreClasses.WIDTH.W_50]}
                  multiple
                  id="checkboxes-tags-demo"
                  options={top100Movies}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.title}
                  renderOption={(props, option, { selected }) => {
                    const { key, ...optionProps } = props;

                    return (
                      <li key={key} {...optionProps}>
                        <CoreCheckbox
                          icon={<CoreIcon icon="check_box_outline_blank" fontSize="small" />}
                          checkedIcon={<CoreIcon icon="check_box" />}
                          checked={selected}
                        />
                        {option.title}
                      </li>
                    );
                  }}
                  renderInput={(params) => (
                    <CoreTextField
                      {...params}
                      variant="outlined"
                      label="Checkboxes"
                      placeholder="Favorites" />
                  )}
                />
              
              </>}
            />

            <CodeSample
              title={"Limit tags"}
              description={<CoreTypographyBody1>You can use the <CodeBlock>limitTags</CodeBlock> prop to limit the number of displayed options when not focused.</CoreTypographyBody1>}
              code={"NA"}
              expandedCode={`import { CoreAutocomplete, CoreClasses, CoreTextField } from "@wrappid/core";

export default function LimitTags() {
  return (
    <CoreAutocomplete
      styleClasses={[CoreClasses.WIDTH.W_50]}
      multiple
      limitTags={2}
      id="multiple-limit-tags"
      options={top100Movies}
      getOptionLabel={(option) => option.title}
      defaultValue={[top100Movies[13], top100Movies[12], top100Movies[11]]}
      renderInput={(params) => (
        <CoreTextField
          {...params}
          variant="outlined"
          label="limitTags"
          placeholder="Favorites" />
      )}
    />
  );                
}
  
${stringTop100Movies}`}
              renderElement={<>
                <CoreAutocomplete
                  styleClasses={[CoreClasses.WIDTH.W_50]}
                  multiple
                  limitTags={2}
                  id="multiple-limit-tags"
                  options={top100Movies}
                  getOptionLabel={(option) => option.title}
                  defaultValue={[top100Movies[13], top100Movies[12], top100Movies[11]]}
                  renderInput={(params) => (
                    <CoreTextField
                      {...params}
                      variant="outlined"
                      label="limitTags"
                      placeholder="Favorites" />
                  )}
                />
              </>}
            />

            <CodeSample
              title={"Sizes"}
              description={"For fancy smaller inputs use the size prop."}
              code={"NA"}
              expandedCode={`import { CoreAutocomplete, CoreChip, CoreTextField, CoreStack } from "@wrappid/core";

export default function Sizes() {
  return (
    <CoreStack spacing={2} width={400}>
      <CoreAutocomplete
        id="size-small-standard"
        size="small"
        options={top100Movies}
        getOptionLabel={(option) => option.title}
        defaultValue={top100Movies[13]}
        renderInput={(params) => (
          <CoreTextField
            {...params}
            variant="standard"
            label="Size small"
            placeholder="Favorites"
          />
        )}
      />
      <CoreAutocomplete
        multiple
        id="size-small-standard-multi"
        size="small"
        options={top100Movies}
        getOptionLabel={(option) => option.title}
        defaultValue={[top100Movies[13]]}
        renderInput={(params) => (
          <CoreTextField
            {...params}
            variant="standard"
            label="Size small"
            placeholder="Favorites"
          />
        )}
      />
      <CoreAutocomplete
        id="size-small-outlined"
        size="small"
        options={top100Movies}
        getOptionLabel={(option) => option.title}
        defaultValue={top100Movies[13]}
        renderInput={(params) => (
          <CoreTextField
            {...params}
            variant="outlined"
            label="Size small"
            placeholder="Favorites" />
        )}
      />
      <CoreAutocomplete
        multiple
        id="size-small-outlined-multi"
        size="small"
        options={top100Movies}
        getOptionLabel={(option) => option.title}
        defaultValue={[top100Movies[13]]}
        renderInput={(params) => (
          <CoreTextField
            {...params}
            variant="outlined"
            label="Size small"
            placeholder="Favorites" />
        )}
      />
      <CoreAutocomplete
        id="size-small-filled"
        size="small"
        options={top100Movies}
        getOptionLabel={(option) => option.title}
        defaultValue={top100Movies[13]}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => {
            const { key, ...tagProps } = getTagProps({ index });
            return (
              <CoreChip
                key={key}
                variant="outlined"
                label={option.title}
                size="small"
                {...tagProps}
              />
            );
          })
        }
        renderInput={(params) => (
          <CoreTextField
            {...params}
            variant="filled"
            label="Size small"
            placeholder="Favorites"
          />
        )}
      />
      <CoreAutocomplete
        multiple
        id="size-small-filled-multi"
        size="small"
        options={top100Movies}
        getOptionLabel={(option) => option.title}
        defaultValue={[top100Movies[13]]}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => {
            const { key, ...tagProps } = getTagProps({ index });
            return (
              <CoreChip
                key={key}
                variant="outlined"
                label={option.title}
                size="small"
                {...tagProps}
              />
            );
          })
        }
        renderInput={(params) => (
          <CoreTextField
            {...params}
            variant="filled"
            label="Size small"
            placeholder="Favorites"
          />
        )}
      />
    </CoreStack>
  );                
}
  
${stringTop100Movies}`}
              renderElement={<>
                <CoreStack spacing={2} width={400}>
                  <CoreAutocomplete
                    id="size-small-standard"
                    size="small"
                    options={top100Movies}
                    getOptionLabel={(option) => option.title}
                    defaultValue={top100Movies[13]}
                    renderInput={(params) => (
                      <CoreTextField
                        {...params}
                        variant="standard"
                        label="Size small"
                        placeholder="Favorites"
                      />
                    )}
                  />
                  <CoreAutocomplete
                    multiple
                    id="size-small-standard-multi"
                    size="small"
                    options={top100Movies}
                    getOptionLabel={(option) => option.title}
                    defaultValue={[top100Movies[13]]}
                    renderInput={(params) => (
                      <CoreTextField
                        {...params}
                        variant="standard"
                        label="Size small"
                        placeholder="Favorites"
                      />
                    )}
                  />
                  <CoreAutocomplete
                    id="size-small-outlined"
                    size="small"
                    options={top100Movies}
                    getOptionLabel={(option) => option.title}
                    defaultValue={top100Movies[13]}
                    renderInput={(params) => (
                      <CoreTextField
                        {...params}
                        variant="outlined"
                        label="Size small"
                        placeholder="Favorites" />
                    )}
                  />
                  <CoreAutocomplete
                    multiple
                    id="size-small-outlined-multi"
                    size="small"
                    options={top100Movies}
                    getOptionLabel={(option) => option.title}
                    defaultValue={[top100Movies[13]]}
                    renderInput={(params) => (
                      <CoreTextField
                        {...params}
                        variant="outlined"
                        label="Size small"
                        placeholder="Favorites" />
                    )}
                  />
                  <CoreAutocomplete
                    id="size-small-filled"
                    size="small"
                    options={top100Movies}
                    getOptionLabel={(option) => option.title}
                    defaultValue={top100Movies[13]}
                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => {
                        const { key, ...tagProps } = getTagProps({ index });

                        return (
                          <CoreChip
                            key={key}
                            variant="outlined"
                            label={option.title}
                            size="small"
                            {...tagProps}
                          />
                        );
                      })
                    }
                    renderInput={(params) => (
                      <CoreTextField
                        {...params}
                        variant="filled"
                        label="Size small"
                        placeholder="Favorites"
                      />
                    )}
                  />
                  <CoreAutocomplete
                    multiple
                    id="size-small-filled-multi"
                    size="small"
                    options={top100Movies}
                    getOptionLabel={(option) => option.title}
                    defaultValue={[top100Movies[13]]}
                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => {
                        const { key, ...tagProps } = getTagProps({ index });

                        return (
                          <CoreChip
                            key={key}
                            variant="outlined"
                            label={option.title}
                            size="small"
                            {...tagProps}
                          />
                        );
                      })
                    }
                    renderInput={(params) => (
                      <CoreTextField
                        {...params}
                        variant="filled"
                        label="Size small"
                        placeholder="Favorites"
                      />
                    )}
                  />
                </CoreStack>
              </>}
            />

            <CodeSample
              title={"TITLE_OF_THE_SAMPLE"}
              description={"DESCRIPTION_OF_THE_SAMPLE"}
              code={"PRE-FORMATTED_CODE_GOES_HERE"}
              renderElement={<>
             
              </>}
            />

            <CodeSample
              title={"TITLE_OF_THE_SAMPLE"}
              description={"DESCRIPTION_OF_THE_SAMPLE"}
              code={"PRE-FORMATTED_CODE_GOES_HERE"}
              renderElement={<></>}
            />

            <CodeSample
              title={"TITLE_OF_THE_SAMPLE"}
              description={"DESCRIPTION_OF_THE_SAMPLE"}
              code={"PRE-FORMATTED_CODE_GOES_HERE"}
              renderElement={<></>}
            />

            <CodeSample
              title={"TITLE_OF_THE_SAMPLE"}
              description={"DESCRIPTION_OF_THE_SAMPLE"}
              code={"PRE-FORMATTED_CODE_GOES_HERE"}
              renderElement={<></>}
            />

            <CodeSample
              title={"TITLE_OF_THE_SAMPLE"}
              description={"DESCRIPTION_OF_THE_SAMPLE"}
              code={"PRE-FORMATTED_CODE_GOES_HERE"}
              renderElement={<></>}
            />

            <CodeSample
              title={"TITLE_OF_THE_SAMPLE"}
              description={"DESCRIPTION_OF_THE_SAMPLE"}
              code={"PRE-FORMATTED_CODE_GOES_HERE"}
              renderElement={<></>}
            />
          </>
        }
      />
    </>
  );
}
