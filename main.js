const pali = 'шалаш';
console.log(pali);

const check = (pali) => pali.split('').reverse().join('') == pali;

console.log(check(pali));
export function sum(a) {
  return function (b) {
    return a + b;
  };
}
console.log(sum(2)(5));

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

let i1 = -1;
let i2 = -1;
let i3 = -1;

export const colors = [
  'magenta',
  'cyan',
  'firebrick',
  'springgreen',
  'skyblue',
];

const textCol1 = () => {
  i1++;
  if (i1 > 4) i1 = 0;

  text1.style.color = colors[i1];
};
const textCol2 = () => {
  i2++;
  if (i2 > 4) i2 = 0;

  text2.style.color = colors[i2];
};
const textCol3 = () => {
  i3++;
  if (i3 > 4) i3 = 0;

  text3.style.color = colors[i3];
};

document.addEventListener('DOMContentLoaded', () => {
  text1.addEventListener('click', () => {
    textCol1();
  });
  text2.addEventListener('click', () => {
    textCol2();
  });
  text3.addEventListener('click', () => {
    textCol3();
  });
});

console.log('..............');

const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];

const search = (search, hotels) => {
  const results = [];
  const regex = new RegExp(search, 'i');
  const find = hotels.filter(function (value) {
    return (
      value.country.match(regex) ||
      value.city.match(regex) ||
      value.name.match(regex)
    );
  });
  find.forEach((value) => {
    results.push(`${value.country}, ${value.city}, ${value.name}`);
  });
  return results;
};
const results = search('usa', hotels);
console.log(results);

function uniq(hotels) {
  const countries = {};
  hotels.forEach((value) => {
    if (!countries[value.country]) {
      countries[value.country] = [];
    }
    countries[value.country].push(value.city);
  });
  return countries;
}

console.log(uniq(hotels));
