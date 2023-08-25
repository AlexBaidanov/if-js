function displayHotels() {
  fetch('https://if-student-api.onrender.com/api/hotels/popular')
    .then((response) => response.json())
    .then((data) => {
      const hotels = data.slice(0, 4);
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
      document.querySelector('.homes__variants').innerHTML = content;
    });
}
displayHotels();
