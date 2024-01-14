import React from "react";

import {
  CoreH4,
  CoreTypographyBody1,
  CoreAutocomplete,
  CoreClasses,
  CoreTextField,
  CoreStack,
  CoreBox
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

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

  // From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/be4cdd0b1f9566847c274d0d05b9549881e0ae4a/packages/core/select/src/data/countries.ts
  const countries = [
    { abbr: "AF", code: "93", icon: "🇦🇫", name: "Afghanistan" },
    { abbr: "AX", code: "358", icon: "🇦🇽", name: "Alland Islands" },
    { abbr: "AL", code: "355", icon: "🇦🇱", name: "Albania" },
    { abbr: "DZ", code: "213", icon: "🇩🇿", name: "Algeria" },
    { abbr: "AS", code: "1-684", icon: "🇦🇸", name: "American Samoa" },
    { abbr: "AD", code: "376", icon: "🇦🇩", name: "Andorra" },
    { abbr: "AO", code: "244", icon: "🇦🇴", name: "Angola" },
    { abbr: "AI", code: "1-264", icon: "🇦🇮", name: "Anguilla" },
    { abbr: "AQ", code: "672", icon: "🇦🇶", name: "Antarctica" },
    { abbr: "AG", code: "1-268", icon: "🇦🇬", name: "Antigua and Barbuda" },
    { abbr: "AR", code: "54", icon: "🇦🇷", name: "Argentina" },
    { abbr: "AM", code: "374", icon: "🇦🇲", name: "Armenia" },
    { abbr: "AW", code: "297", icon: "🇦🇼", name: "Aruba" },
    { abbr: "AU", code: "61", icon: "🇦🇺", name: "Australia", suggested: true },
    { abbr: "AT", code: "43", icon: "🇦🇹", name: "Austria" },
    { abbr: "AZ", code: "994", icon: "🇦🇿", name: "Azerbaijan" },
    { abbr: "BS", code: "1-242", icon: "🇧🇸", name: "Bahamas" },
    { abbr: "BH", code: "973", icon: "🇧🇭", name: "Bahrain" },
    { abbr: "BD", code: "880", icon: "🇧🇩", name: "Bangladesh" },
    { abbr: "BB", code: "1-246", icon: "🇧🇧", name: "Barbados" },
    { abbr: "BY", code: "375", icon: "🇧🇾", name: "Belarus" },
    { abbr: "BE", code: "32", icon: "🇧🇪", name: "Belgium" },
    { abbr: "BZ", code: "501", icon: "🇧🇿", name: "Belize" },
    { abbr: "BJ", code: "229", icon: "🇧🇯", name: "Benin" },
    { abbr: "BM", code: "1-441", icon: "🇧🇲", name: "Bermuda" },
    { abbr: "BT", code: "975", icon: "🇧🇹", name: "Bhutan" },
    { abbr: "BO", code: "591", icon: "🇧🇴", name: "Bolivia" },
    { abbr: "BA", code: "387", icon: "🇧🇦", name: "Bosnia and Herzegovina" },
    { abbr: "BW", code: "267", icon: "🇧🇼", name: "Botswana" },
    { abbr: "BV", code: "47", icon: "🇧🇻", name: "Bouvet Island" },
    { abbr: "BR", code: "55", icon: "🇧🇷", name: "Brazil" },
    {
      abbr: "IO",
      code: "246",
      icon: "🇮🇴",
      name: "British Indian Ocean Territory",
    },
    { abbr: "VG", code: "1-284", icon: "🇻🇬", name: "British Virgin Islands" },
    { abbr: "BN", code: "673", icon: "🇧🇳", name: "Brunei Darussalam" },
    { abbr: "BG", code: "359", icon: "🇧🇬", name: "Bulgaria" },
    { abbr: "BF", code: "226", icon: "🇧🇫", name: "Burkina Faso" },
    { abbr: "BI", code: "257", icon: "🇧🇮", name: "Burundi" },
    { abbr: "KH", code: "855", icon: "🇰🇭", name: "Cambodia" },
    { abbr: "CM", code: "237", icon: "🇨🇲", name: "Cameroon" },
    { abbr: "CA", code: "1", icon: "🇨🇦", name: "Canada", suggested: true },
    { abbr: "CV", code: "238", icon: "🇨🇻", name: "Cape Verde" },
    { abbr: "KY", code: "1-345", icon: "🇰🇾", name: "Cayman Islands" },
    { abbr: "CF", code: "236", icon: "🇨🇫", name: "Central African Republic" },
    { abbr: "TD", code: "235", icon: "🇹🇩", name: "Chad" },
    { abbr: "CL", code: "56", icon: "🇨🇱", name: "Chile" },
    { abbr: "CN", code: "86", icon: "🇨🇳", name: "China" },
    { abbr: "CX", code: "61", icon: "🇨🇽", name: "Christmas Island" },
    { abbr: "CC", code: "61", icon: "🇨🇨", name: "Cocos (Keeling) Islands" },
    { abbr: "CO", code: "57", icon: "🇨🇴", name: "Colombia" },
    { abbr: "KM", code: "269", icon: "🇰🇲", name: "Comoros" },
    {
      abbr: "CG",
      code: "243",
      icon: "🇨🇩",
      name: "Congo, Democratic Republic of the",
    },
    {
      abbr: "CD",
      code: "242",
      icon: "🇨🇬",
      name: "Congo, Republic of the",
    },
    { abbr: "CK", code: "682", icon: "🇨🇰", name: "Cook Islands" },
    { abbr: "CR", code: "506", icon: "🇨🇷", name: "Costa Rica" },
    { abbr: "CI", code: "225", icon: "🇨🇮", name: "Cote d'Ivoire" },
    { abbr: "HR", code: "385", icon: "🇭🇷", name: "Croatia" },
    { abbr: "CU", code: "53", icon: "🇨🇺", name: "Cuba" },
    { abbr: "CW", code: "599", icon: "🇨🇼", name: "Curacao" },
    { abbr: "CY", code: "357", icon: "🇨🇾", name: "Cyprus" },
    { abbr: "CZ", code: "420", icon: "🇨🇿", name: "Czech Republic" },
    { abbr: "DK", code: "45", icon: "🇩🇰", name: "Denmark" },
    { abbr: "DJ", code: "253", icon: "🇩🇯", name: "Djibouti" },
    { abbr: "DM", code: "1-767", icon: "🇩🇲", name: "Dominica" },
    { abbr: "DO", code: "1-809", icon: "🇩🇴", name: "Dominican Republic" },
    { abbr: "EC", code: "593", icon: "🇪🇨", name: "Ecuador" },
    { abbr: "EG", code: "20", icon: "🇪🇬", name: "Egypt" },
    { abbr: "SV", code: "503", icon: "🇸🇻", name: "El Salvador" },
    { abbr: "GQ", code: "240", icon: "🇬🇶", name: "Equatorial Guinea" },
    { abbr: "ER", code: "291", icon: "🇪🇷", name: "Eritrea" },
    { abbr: "EE", code: "372", icon: "🇪🇪", name: "Estonia" },
    { abbr: "ET", code: "251", icon: "🇪🇹", name: "Ethiopia" },
    {
      abbr: "FK",
      code: "500",
      icon: "🇫🇰",
      name: "Falkland Islands (Malvinas)",
    },
    { abbr: "FO", code: "298", icon: "🇫🇴", name: "Faroe Islands" },
    { abbr: "FJ", code: "679", icon: "🇫🇯", name: "Fiji" },
    { abbr: "FI", code: "358", icon: "🇫🇮", name: "Finland" },
    { abbr: "FR", code: "33", icon: "🇫🇷", name: "France", suggested: true },
    { abbr: "GF", code: "594", icon: "🇬🇫", name: "French Guiana" },
    { abbr: "PF", code: "689", icon: "🇵🇫", name: "French Polynesia" },
    {
      abbr: "TF",
      code: "262",
      icon: "🇹🇫",
      name: "French Southern Territories",
    },
    { abbr: "GA", code: "241", icon: "🇬🇦", name: "Gabon" },
    { abbr: "GM", code: "220", icon: "🇬🇲", name: "Gambia" },
    { abbr: "GE", code: "995", icon: "🇬🇪", name: "Georgia" },
    { abbr: "DE", code: "49", icon: "🇩🇪", name: "Germany", suggested: true },
    { abbr: "GH", code: "233", icon: "🇬🇭", name: "Ghana" },
    { abbr: "GI", code: "350", icon: "🇬🇮", name: "Gibraltar" },
    { abbr: "GR", code: "30", icon: "🇬🇷", name: "Greece" },
    { abbr: "GL", code: "299", icon: "🇬🇱", name: "Greenland" },
    { abbr: "GD", code: "1-473", icon: "🇬🇩", name: "Grenada" },
    { abbr: "GP", code: "590", icon: "🇬🇵", name: "Guadeloupe" },
    { abbr: "GU", code: "1-671", icon: "🇬🇺", name: "Guam" },
    { abbr: "GT", code: "502", icon: "🇬🇹", name: "Guatemala" },
    { abbr: "GG", code: "44", icon: "🇬🇬", name: "Guernsey" },
    { abbr: "GW", code: "245", icon: "🇬🇼", name: "Guinea-Bissau" },
    { abbr: "GN", code: "224", icon: "🇬🇳", name: "Guinea" },
    { abbr: "GY", code: "592", icon: "🇬🇾", name: "Guyana" },
    { abbr: "HT", code: "509", icon: "🇭🇹", name: "Haiti" },
    {
      abbr: "HM",
      code: "672",
      icon: "🇭🇲",
      name: "Heard Island and McDonald Islands",
    },
    {
      abbr: "VA",
      code: "379",
      icon: "🇻🇦",
      name: "Holy See (Vatican City State)",
    },
    { abbr: "HN", code: "504", icon: "🇭🇳", name: "Honduras" },
    { abbr: "HK", code: "852", icon: "🇭🇰", name: "Hong Kong" },
    { abbr: "HU", code: "36", icon: "🇭🇺", name: "Hungary" },
    { abbr: "IS", code: "354", icon: "🇮🇸", name: "Iceland" },
    { abbr: "IN", code: "91", icon: "🇮🇳", name: "India" },
    { abbr: "ID", code: "62", icon: "🇮🇩", name: "Indonesia" },
    { abbr: "IR", code: "98", icon: "🇮🇷", name: "Iran, Islamic Republic of" },
    { abbr: "IQ", code: "964", icon: "🇮🇶", name: "Iraq" },
    { abbr: "IE", code: "353", icon: "🇮🇪", name: "Ireland" },
    { abbr: "IM", code: "44", icon: "🇮🇲", name: "Isle of Man" },
    { abbr: "IL", code: "972", icon: "🇮🇱", name: "Israel" },
    { abbr: "IT", code: "39", icon: "🇮🇹", name: "Italy" },
    { abbr: "JM", code: "1-876", icon: "🇯🇲", name: "Jamaica" },
    { abbr: "JP", code: "81", icon: "🇯🇵", name: "Japan", suggested: true },
    { abbr: "JE", code: "44", icon: "🇯🇪", name: "Jersey" },
    { abbr: "JO", code: "962", icon: "🇯🇴", name: "Jordan" },
    { abbr: "KZ", code: "7", icon: "🇰🇿", name: "Kazakhstan" },
    { abbr: "KE", code: "254", icon: "🇰🇪", name: "Kenya" },
    { abbr: "KI", code: "686", icon: "🇰🇮", name: "Kiribati" },
    {
      abbr: "KP",
      code: "850",
      icon: "🇰🇵",
      name: "Korea, Democratic People's Republic of",
    },
    { abbr: "KR", code: "82", icon: "🇰🇷", name: "Korea, Republic of" },
    { abbr: "XK", code: "383", icon: "🇽🇰", name: "Kosovo" },
    { abbr: "KW", code: "965", icon: "🇰🇼", name: "Kuwait" },
    { abbr: "KG", code: "996", icon: "🇰🇬", name: "Kyrgyzstan" },
    {
      abbr: "LA",
      code: "856",
      icon: "🇱🇦",
      name: "Lao People's Democratic Republic",
    },
    { abbr: "LV", code: "371", icon: "🇱🇻", name: "Latvia" },
    { abbr: "LB", code: "961", icon: "🇱🇧", name: "Lebanon" },
    { abbr: "LS", code: "266", icon: "🇱🇸", name: "Lesotho" },
    { abbr: "LR", code: "231", icon: "🇱🇷", name: "Liberia" },
    { abbr: "LY", code: "218", icon: "🇱🇾", name: "Libya" },
    { abbr: "LI", code: "423", icon: "🇱🇮", name: "Liechtenstein" },
    { abbr: "LT", code: "370", icon: "🇱🇹", name: "Lithuania" },
    { abbr: "LU", code: "352", icon: "🇱🇺", name: "Luxembourg" },
    { abbr: "MO", code: "853", icon: "🇲🇴", name: "Macao" },
    {
      abbr: "MK",
      code: "389",
      icon: "🇲🇰",
      name: "Macedonia, the Former Yugoslav Republic of",
    },
    { abbr: "MG", code: "261", icon: "🇲🇬", name: "Madagascar" },
    { abbr: "MW", code: "265", icon: "🇲🇼", name: "Malawi" },
    { abbr: "MY", code: "60", icon: "🇲🇾", name: "Malaysia" },
    { abbr: "MV", code: "960", icon: "🇲🇻", name: "Maldives" },
    { abbr: "ML", code: "223", icon: "🇲🇱", name: "Mali" },
    { abbr: "MT", code: "356", icon: "🇲🇹", name: "Malta" },
    { abbr: "MH", code: "692", icon: "🇲🇭", name: "Marshall Islands" },
    { abbr: "MQ", code: "596", icon: "🇲🇶", name: "Martinique" },
    { abbr: "MR", code: "222", icon: "🇲🇷", name: "Mauritania" },
    { abbr: "MU", code: "230", icon: "🇲🇺", name: "Mauritius" },
    { abbr: "YT", code: "262", icon: "🇾🇹", name: "Mayotte" },
    { abbr: "MX", code: "52", icon: "🇲🇽", name: "Mexico" },
    {
      abbr: "FM",
      code: "691",
      icon: "🇫🇲",
      name: "Micronesia, Federated States of",
    },
    { abbr: "MD", code: "373", icon: "🇲🇩", name: "Moldova, Republic of" },
    { abbr: "MC", code: "377", icon: "🇲🇨", name: "Monaco" },
    { abbr: "MN", code: "976", icon: "🇲🇳", name: "Mongolia" },
    { abbr: "ME", code: "382", icon: "🇲🇪", name: "Montenegro" },
    { abbr: "MS", code: "1-664", icon: "🇲🇸", name: "Montserrat" },
    { abbr: "MA", code: "212", icon: "🇲🇦", name: "Morocco" },
    { abbr: "MZ", code: "258", icon: "🇲🇿", name: "Mozambique" },
    { abbr: "MM", code: "95", icon: "🇲🇲", name: "Myanmar" },
    { abbr: "NA", code: "264", icon: "🇳🇦", name: "Namibia" },
    { abbr: "NR", code: "674", icon: "🇳🇷", name: "Nauru" },
    { abbr: "NP", code: "977", icon: "🇳🇵", name: "Nepal" },
    { abbr: "NL", code: "31", icon: "🇳🇱", name: "Netherlands" },
    { abbr: "NC", code: "687", icon: "🇳🇨", name: "New Caledonia" },
    { abbr: "NZ", code: "64", icon: "🇳🇿", name: "New Zealand" },
    { abbr: "NI", code: "505", icon: "🇳🇮", name: "Nicaragua" },
    { abbr: "NE", code: "227", icon: "🇳🇪", name: "Niger" },
    { abbr: "NG", code: "234", icon: "🇳🇬", name: "Nigeria" },
    { abbr: "NU", code: "683", icon: "🇳🇺", name: "Niue" },
    { abbr: "NF", code: "672", icon: "🇳🇫", name: "Norfolk Island" },
    { abbr: "MP", code: "1-670", icon: "🇲🇵", name: "Northern Mariana Islands" },
    { abbr: "NO", code: "47", icon: "🇳🇴", name: "Norway" },
    { abbr: "OM", code: "968", icon: "🇴🇲", name: "Oman" },
    { abbr: "PK", code: "92", icon: "🇵🇰", name: "Pakistan" },
    { abbr: "PW", code: "680", icon: "🇵🇼", name: "Palau" },
    { abbr: "PS", code: "970", icon: "🇵🇸", name: "Palestine, State of" },
    { abbr: "PA", code: "507", icon: "🇵🇦", name: "Panama" },
    { abbr: "PG", code: "675", icon: "🇵🇬", name: "Papua New Guinea" },
    { abbr: "PY", code: "595", icon: "🇵🇾", name: "Paraguay" },
    { abbr: "PE", code: "51", icon: "🇵🇪", name: "Peru" },
    { abbr: "PH", code: "63", icon: "🇵🇭", name: "Philippines" },
    { abbr: "PN", code: "870", icon: "🇵🇳", name: "Pitcairn" },
    { abbr: "PL", code: "48", icon: "🇵🇱", name: "Poland" },
    { abbr: "PT", code: "351", icon: "🇵🇹", name: "Portugal" },
    { abbr: "PR", code: "1", icon: "🇵🇷", name: "Puerto Rico" },
    { abbr: "QA", code: "974", icon: "🇶🇦", name: "Qatar" },
    { abbr: "RE", code: "262", icon: "🇷🇪", name: "Reunion" },
    { abbr: "RO", code: "40", icon: "🇷🇴", name: "Romania" },
    { abbr: "RU", code: "7", icon: "🇷🇺", name: "Russian Federation" },
    { abbr: "RW", code: "250", icon: "🇷🇼", name: "Rwanda" },
    { abbr: "BL", code: "590", icon: "🇧🇱", name: "Saint Barthelemy" },
    { abbr: "SH", code: "290", icon: "🇸🇭", name: "Saint Helena" },
    { abbr: "KN", code: "1-869", icon: "🇰🇳", name: "Saint Kitts and Nevis" },
    { abbr: "LC", code: "1-758", icon: "🇱🇨", name: "Saint Lucia" },
    { abbr: "MF", code: "590", icon: "🇲🇫", name: "Saint Martin (French part)" },
    { abbr: "PM", code: "508", icon: "🇵🇲", name: "Saint Pierre and Miquelon" },
    {
      abbr: "VC",
      code: "1-784",
      icon: "🇻🇨",
      name: "Saint Vincent and the Grenadines",
    },
    { abbr: "WS", code: "685", icon: "🇼🇸", name: "Samoa" },
    { abbr: "SM", code: "378", icon: "🇸🇲", name: "San Marino" },
    { abbr: "ST", code: "239", icon: "🇸🇹", name: "Sao Tome and Principe" },
    { abbr: "SA", code: "966", icon: "🇸🇦", name: "Saudi Arabia" },
    { abbr: "SN", code: "221", icon: "🇸🇳", name: "Senegal" },
    { abbr: "RS", code: "381", icon: "🇷🇸", name: "Serbia" },
    { abbr: "SC", code: "248", icon: "🇸🇨", name: "Seychelles" },
    { abbr: "SL", code: "232", icon: "🇸🇱", name: "Sierra Leone" },
    { abbr: "SG", code: "65", icon: "🇸🇬", name: "Singapore" },
    {
      abbr: "SX",
      code: "1-721",
      icon: "🇸🇽",
      name: "Sint Maarten (Dutch part)",
    },
    { abbr: "SK", code: "421", icon: "🇸🇰", name: "Slovakia" },
    { abbr: "SI", code: "386", icon: "🇸🇮", name: "Slovenia" },
    { abbr: "SB", code: "677", icon: "🇸🇧", name: "Solomon Islands" },
    { abbr: "SO", code: "252", icon: "🇸🇴", name: "Somalia" },
    { abbr: "ZA", code: "27", icon: "🇿🇦", name: "South Africa" },
    {
      abbr: "GS",
      code: "500",
      icon: "🇬🇸",
      name: "South Georgia and the South Sandwich Islands",
    },
    { abbr: "SS", code: "211", icon: "🇸🇸", name: "South Sudan" },
    { abbr: "ES", code: "34", icon: "🇪🇸", name: "Spain" },
    { abbr: "LK", code: "94", icon: "🇱🇰", name: "Sri Lanka" },
    { abbr: "SD", code: "249", icon: "🇸🇩", name: "Sudan" },
    { abbr: "SR", code: "597", icon: "🇸🇷", name: "Suriname" },
    { abbr: "SJ", code: "47", icon: "🇸🇯", name: "Svalbard and Jan Mayen" },
    { abbr: "SZ", code: "268", icon: "🇸🇿", name: "Swaziland" },
    { abbr: "SE", code: "46", icon: "🇸🇪", name: "Sweden" },
    { abbr: "CH", code: "41", icon: "🇨🇭", name: "Switzerland" },
    { abbr: "SY", code: "963", icon: "🇸🇾", name: "Syrian Arab Republic" },
    { abbr: "TW", code: "886", icon: "🇹🇼", name: "Taiwan, Province of China" },
    { abbr: "TJ", code: "992", icon: "🇹🇯", name: "Tajikistan" },
    { abbr: "TH", code: "66", icon: "🇹🇭", name: "Thailand" },
    { abbr: "TL", code: "670", icon: "🇹🇱", name: "Timor-Leste" },
    { abbr: "TG", code: "228", icon: "🇹🇬", name: "Togo" },
    { abbr: "TK", code: "690", icon: "🇹🇰", name: "Tokelau" },
    { abbr: "TO", code: "676", icon: "🇹🇴", name: "Tonga" },
    { abbr: "TT", code: "1-868", icon: "🇹🇹", name: "Trinidad and Tobago" },
    { abbr: "TN", code: "216", icon: "🇹🇳", name: "Tunisia" },
    { abbr: "TR", code: "90", icon: "🇹🇷", name: "Turkey" },
    { abbr: "TM", code: "993", icon: "🇹🇲", name: "Turkmenistan" },
    { abbr: "TC", code: "1-649", icon: "🇹🇨", name: "Turks and Caicos Islands" },
    { abbr: "TV", code: "688", icon: "🇹🇻", name: "Tuvalu" },
    { abbr: "UG", code: "256", icon: "🇺🇬", name: "Uganda" },
    { abbr: "UA", code: "380", icon: "🇺🇦", name: "Ukraine" },
    { abbr: "AE", code: "971", icon: "🇦🇪", name: "United Arab Emirates" },
    { abbr: "GB", code: "44", icon: "🇬🇧", name: "United Kingdom" },
    {
      abbr: "TZ",
      code: "255",
      icon: "🇹🇿",
      name: "United Republic of Tanzania",
    },
    {
      abbr     : "US",
      code     : "1",
      icon     : "🇺🇲",
      name     : "United States",
      suggested: true,
    },
    { abbr: "UY", code: "598", icon: "🇺🇾", name: "Uruguay" },
    { abbr: "VI", code: "1-340", icon: "🇻🇮", name: "US Virgin Islands" },
    { abbr: "UZ", code: "998", icon: "🇺🇿", name: "Uzbekistan" },
    { abbr: "VU", code: "678", icon: "🇻🇺", name: "Vanuatu" },
    { abbr: "VE", code: "58", icon: "🇻🇪", name: "Venezuela" },
    { abbr: "VN", code: "84", icon: "🇻🇳", name: "Vietnam" },
    { abbr: "WF", code: "681", icon: "🇼🇫", name: "Wallis and Futuna" },
    { abbr: "EH", code: "212", icon: "🇪🇭", name: "Western Sahara" },
    { abbr: "YE", code: "967", icon: "🇾🇪", name: "Yemen" },
    { abbr: "ZM", code: "260", icon: "🇿🇲", name: "Zambia" },
    { abbr: "ZW", code: "263", icon: "🇿🇼", name: "Zimbabwe" },
  ];

  const [inputValue, setInputValue] = React.useState("");
  const defaultProps = {
    getOptionLabel: (option) => option.label,
    options       : top100Films,
  };
  const flatProps = { options: top100Films.map((option) => option.title) };
  const [value, setValue] = React.useState(null);
  const OPTIONS = ["Option 1", "Option 2"];

  return (
    <>
      <CoreH4>CoreAutocomplete</CoreH4>

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

      <CodeImport name="CoreAutocomplete" />

      {/* <CodeImport name="CoreAutocomplete, CoreTextField"/> */}
      <CodeSample
        title={"Combo box"}
        description={
          "The value must be chosen from a predefined set of allowed values."
        }
        code={`
  <CoreAutocomplete
  disablePortal
  id="combo-box-demo"
  options={top100Films}
  renderInput={(params) => (
    <CoreTextField {...params} label="Movie" />
    )
  }
  styleClasses={CoreClasses.WIDTH.W_AUTO}
/>
        `}
        renderElement={
          <>
            <CoreAutocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              styleClasses={CoreClasses.WIDTH.W_AUTO}
              renderInput={(params) => (
                <CoreTextField {...params} label="Movie" />
              )}
            />
          </>
        }
      />

      {/* <CodeImport name="CoreAutocomplete, CoreTextField, CoreStack"/> */}
      <CodeSample
        title={"Playground"}
        description={
          "Each of the following examples demonstrates one feature of the Autocomplete component."
        }
        code={`<CoreStack spacing={1} styleClass={CoreClasses.WIDTH.W_W100}>
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
        `}
        renderElement={
          <>
            <CoreStack spacing={1} styleClass={CoreClasses.WIDTH.W_W100}>
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

      {/* <CodeImport name="CoreAutocomplete, CoreTextField, CoreBox" /> */}

      {/* <CodeSample
        title={"Country select"}
        description={"Choose one of the 248 countries."}
        code={`<CoreAutocomplete
id="country-select-demo"
options={countries}
autoHighlight
getOptionLabel={(option) => option.name}
renderOption={(props, option) => (
  <CoreBox component="li" styleClasses={[CoreClasses.MARGIN.M2, CoreClasses.FLEX.FLEX_SHRINK_0]} {...props}>
    <img
      loading="lazy"
      width="20"
      srcSet={option.icon}
      src={option.icon}
      alt=""
    />
    {option.icon} {option.name} ({option.abbr}) +{option.code}
  </CoreBox>
)}
renderInput={(params) => (
  <CoreTextField
    {...params}
    label="Choose a country"
    inputProps={{
      ...params.inputProps,
      autoComplete: 'new-password', // disable autocomplete and autofill
    }}
  />
)}
/>`}
        renderElement={
          <>
            <CoreAutocomplete
              id="country-select-demo"
              options={countries}
              autoHighlight
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => (
                <CoreBox
                  component="li"
                  styleClasses={[CoreClasses.MARGIN.M2, CoreClasses.FLEX.FLEX_SHRINK_0]}
                  {...props}
                >
                  <img
                    loading="lazy"
                    width="20"
                    srcSet={option.icon}
                    src={option.icon}
                    alt=""
                  />

                  <CoreTypographyBody1>{option.icon} {option.name} ({option.abbr}) +{option.code}</CoreTypographyBody1>
                </CoreBox>
              )}
              renderInput={(params) => (
                <CoreTextField
                  {...params}
                  label="Choose a country"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              )}
            />
          </>
        }
      /> */}

      <CodeSample
        title={"Controlled states (NOT_DEFINED)"}
        description={
          <>
            <CoreTypographyBody1>
              The component has two states that can be controlled:
            </CoreTypographyBody1>

            <CoreTypographyBody1>
              1. the <CodeBlock>"value"</CodeBlock> state with the value
              onChange props combination. This state represents the value
              selected by the user, for instance when pressing Enter.
            </CoreTypographyBody1>

            <CoreTypographyBody1>
              2. the <CodeBlock>"input value"</CodeBlock> state with the
              inputValue/onInputChange props combination. This state represents
              the value displayed in the textbox.
            </CoreTypographyBody1>

            <CoreTypographyBody1>
              These two states are isolated, and should be controlled
              independently.
            </CoreTypographyBody1>
          </>
        }
        code={`<div>
        <div>{{value: value !== null ? value : "null"}}</div>

        <div>{{inputValue: inputValue}}</div>

        // <br />

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
          sx={{ width: 300 }}
          renderInput={(params) => (
            <CoreTextField {...params} label="Controllable" />
          )}
        />
      </div>`}
        renderElement={
          <>
            <CoreBox>
              <CoreTypographyBody1>{`value: ${value !== null ? `'${value}'` : "null"}`}</CoreTypographyBody1>

              <CoreTypographyBody1>{`inputValue: '${inputValue}'`}</CoreTypographyBody1>

              {/* <br /> */}

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
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <CoreTextField {...params} label="Controllable" />
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
          </>
        }
        code={`// ⚠️ BAD
return <CoreAutocomplete multiple value={allValues.filter((v) => v.selected)} />;

// 👍 GOOD
const selectedValues = React.useMemo(
  () => allValues.filter((v) => v.selected),
  [allValues],
);
return <CoreAutocomplete multiple value={selectedValues} />;`}
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
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={
          <>
            <CoreStack spacing={2} styleClasses={CoreClasses.WIDTH.W_AUTO}>
              <CoreAutocomplete
                id="free-solo-demo"
                // freeSolo
                options={top100Films.map((option) => option.label)}
                renderInput={(params) => (
                  <CoreTextField {...params} label="freeSolo" />
                )}
              />

              <CoreAutocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={top100Films.map((option) => option.label)}
                renderInput={(params) => (
                  <CoreTextField
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
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Grouped (NOT_DEFINED)"}
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
        title={"Disabled options (NOT_DEFINED)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
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
        title={"Load on open (NOT_DEFINED)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample title={"Search as you type"} description={""} code={""} />

      <CodeSample
        title={"Google Maps place (NOT_DEFINED)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Multiple values (NOT_DEFINED)"}
        description={"Also known as tags, the user is allowed to enter more than one value."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Fixed options (NOT_DEFINED)"}
        description={"In the event that you need to lock certain tags so that they can't be removed, you can set the chips disabled."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Checkboxes (NOT_DEFINED)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Limit tags (NOT_DEFINED)"}
        description={<CoreTypographyBody1>You can use the <CodeBlock>limitTags</CodeBlock> prop to limit the number of displayed options when not focused.</CoreTypographyBody1>}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Sizes"}
        description={"For fancy smaller inputs use the size prop."}
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

      <ComponentProps component={CoreAutocomplete} />
    </>
  );
}
