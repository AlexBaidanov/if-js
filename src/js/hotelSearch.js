const button = document.querySelector('.form__button');
const availableBlock = document.querySelector('.available');
button.addEventListener('click', () => {
  availableBlock.classList.add('_visible');
  displayHotels();
});

function displayHotels() {
  const search = document.querySelector(
    'input[class="form__destination"]',
  ).value;

  fetch(`https://if-student-api.onrender.com/api/hotels?search=${search}`)
    .then((response) => response.json())
    .then((data) => {
      const filteredData = data.filter((hotel) =>
        hotel.name.toLowerCase().includes(search.toLowerCase()),
      );
      console.log(filteredData);
      const hotels = filteredData.slice(0, 4);
      console.log(hotels);
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
      document.querySelector('.available__hotels').innerHTML = content;
    });
}
