const button = document.querySelector('.form__button');
const availableBlock = document.querySelector('.available');

const formInputAdult = document.querySelector('.form__adults-num');
const formInputChild = document.querySelector('.form__children-num');
const formInputRoom = document.querySelector('.form__room-num');

button.addEventListener('click', (event) => {
  availableBlock.classList.add('_visible');
  event.preventDefault();

  const adults = formInputAdult.value;
  if (adults === '0') {
    alert('Количество взрослых не может быть равно 0');
    return;
  }

  const rooms = formInputRoom.value;
  if (rooms === '0') {
    alert('Количество комнат не может быть равно 0');
    return;
  }

  displayHotels();
});

function displayHotels() {
  const search = hotelsSearching();

  const adults = formInputAdult.value;
  const children = formInputChild.value;
  const rooms = formInputRoom.value;

  const url = hotelsUrl(search, adults, children, rooms);

  hotelsRequest(url).then((data) => {
    const hotels = hotelsFilter(data);
    const content = hotelsContent(hotels);
    hotelsRender(content);
  });
}

function hotelsSearching() {
  return document.querySelector('[name = "hotel"]').value;
}

function hotelsUrl(search, adults, children, rooms) {
  return `https://if-student-api.onrender.com/api/hotels?search=${search}&adults=${adults}&children=${children}&rooms=${rooms}`;
}

function hotelsRequest(url) {
  return fetch(url).then((response) =>
    response.ok ? response.json() : Promise.reject(response),
  );
}

function hotelsFilter(data) {
  return data.slice(0, 4);
}

function hotelsContent(hotels) {
  let content = '';
  hotels.forEach((hotel) => {
    content += `
          <figure class="homes__item _mobile">
            <img
            class="homes__image"
            src="${hotel.imageUrl}" alt="${hotel.name}"
            />
            <figcaption class="homes__description">${hotel.name}</figcaption>
            <figcaption class="homes__place">
                ${hotel.city}, ${hotel.country}
            </figcaption>
          </figure>
    `;
  });
  return content;
}

function hotelsRender(content) {
  document.querySelector('.available__hotels').innerHTML = content;
}
