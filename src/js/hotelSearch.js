const button = document.querySelector('.form__button');
const availableBlock = document.querySelector('.available');
button.addEventListener('click', () => {
  availableBlock.classList.add('_visible');
  event.preventDefault();
  displayHotels();
});

function displayHotels() {
  const search = hotelsSearching();
  const url = hotelsUrl(search);
  hotelsRequest(url).then((data) => {
    const hotels = hotelsFilter(data);
    const content = hotelsContent(hotels);
    hotelsRender(content);
  });
}

function hotelsSearching() {
  return document.querySelector('[name = "hotel"]').value;
}

function hotelsUrl(search) {
  return `https://if-student-api.onrender.com/api/hotels?search=${search}`;
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
