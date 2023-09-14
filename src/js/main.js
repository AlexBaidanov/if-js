function bubbleSort(data) {
  const length = data.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (data[j].name > data[j + 1].name) {
        const temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return data;
}

function displayHotels() {
  let data = sessionStorage.getItem('hotels');
  if (data) {
    data = JSON.parse(data);
    data = bubbleSort(data);
    contentHotels(data);
  } else {
    fetch('https://if-student-api.onrender.com/api/hotels/popular')
      .then((response) => response.json())
      .then((data) => {
        sessionStorage.setItem('hotels', JSON.stringify(data));
        data = bubbleSort(data);
        contentHotels(data);
      });
  }
}
function contentHotels(data) {
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
}
displayHotels();
