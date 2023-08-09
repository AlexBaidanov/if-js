import data from './homesData.js';

const homesSection = document.createElement('section');
homesSection.setAttribute('class', 'homes');
document.body.appendChild(homesSection);

const homesDiv = document.createElement('div');
homesDiv.setAttribute('class', 'container');
homesSection.appendChild(homesDiv);

const homesTitle = document.createElement('h2');
homesTitle.textContent = 'Homes guests loves';
homesTitle.classList.add('homes__title', 'text__center', 'title');
homesDiv.appendChild(homesTitle);

const variantsDiv = document.createElement('div');
variantsDiv.classList.add('homes__variants', 'description');
homesDiv.appendChild(variantsDiv);

const homesItem1 = document.createElement('figure');
homesItem1.classList.add('homes__item', '_mobile');
variantsDiv.appendChild(homesItem1);

const homesImg1 = document.createElement('img');
homesImg1.classList.add('homes__image');
homesImg1.setAttribute('src', 'src/images/homes/hotel.png');
homesImg1.setAttribute('alt', 'Hotel');
homesItem1.appendChild(homesImg1);

const homesFigcaptionDescription1 = document.createElement('figcaption');
data.forEach(function (item, index) {
  if (index === 0) {
    homesFigcaptionDescription1.textContent = item.name;
  }
});
homesFigcaptionDescription1.classList.add('homes__description');
homesItem1.appendChild(homesFigcaptionDescription1);

const homesFigcaptionPlace1 = document.createElement('figcaption');
data.forEach(function (item, index) {
  if (index === 0) {
    homesFigcaptionPlace1.textContent = `${item.city}, ${item.country}`;
  }
});
homesFigcaptionPlace1.classList.add('homes__place');
homesItem1.appendChild(homesFigcaptionPlace1);

const homesItem2 = document.createElement('figure');
homesItem2.classList.add('homes__item', '_mobile');
variantsDiv.appendChild(homesItem2);

const homesImg2 = document.createElement('img');
homesImg2.classList.add('homes__image');
homesImg2.setAttribute('src', 'src/images/homes/apartment.png');
homesImg2.setAttribute('alt', 'Apartment');
homesItem2.appendChild(homesImg2);

const homesFigcaptionDescription2 = document.createElement('figcaption');
data.forEach(function (item, index) {
  if (index === 1) {
    homesFigcaptionDescription2.textContent = item.name;
  }
});
homesFigcaptionDescription2.classList.add('homes__description');
homesItem2.appendChild(homesFigcaptionDescription2);

const homesFigcaptionPlace2 = document.createElement('figcaption');
data.forEach(function (item, index) {
  if (index === 1) {
    homesFigcaptionPlace2.textContent = `${item.city}, ${item.country}`;
  }
});
homesFigcaptionPlace2.classList.add('homes__place');
homesItem2.appendChild(homesFigcaptionPlace2);

const homesItem3 = document.createElement('figure');
homesItem3.classList.add('homes__item', '_hide');
variantsDiv.appendChild(homesItem3);

const homesImg3 = document.createElement('img');
homesImg3.classList.add('homes__image');
homesImg3.setAttribute('src', 'src/images/homes/villa.png');
homesImg3.setAttribute('alt', 'Villa');
homesItem3.appendChild(homesImg3);

const homesFigcaptionDescription3 = document.createElement('figcaption');
data.forEach(function (item, index) {
  if (index === 2) {
    homesFigcaptionDescription3.textContent = item.name;
  }
});
homesFigcaptionDescription3.classList.add('homes__description');
homesItem3.appendChild(homesFigcaptionDescription3);

const homesFigcaptionPlace3 = document.createElement('figcaption');
data.forEach(function (item, index) {
  if (index === 2) {
    homesFigcaptionPlace3.textContent = `${item.city}, ${item.country}`;
  }
});
homesFigcaptionPlace3.classList.add('homes__place');
homesItem3.appendChild(homesFigcaptionPlace3);

const homesItem4 = document.createElement('figure');
homesItem4.classList.add('homes__item', '_hide');
variantsDiv.appendChild(homesItem4);

const homesImg4 = document.createElement('img');
homesImg4.classList.add('homes__image');
homesImg4.setAttribute('src', 'src/images/homes/hostel.png');
homesImg4.setAttribute('alt', 'Hostel');
homesItem4.appendChild(homesImg4);

const homesFigcaptionDescription4 = document.createElement('figcaption');
data.forEach(function (item, index) {
  if (index === 3) {
    homesFigcaptionDescription4.textContent = item.name;
  }
});
homesFigcaptionDescription4.classList.add('homes__description');
homesItem4.appendChild(homesFigcaptionDescription4);

const homesFigcaptionPlace4 = document.createElement('figcaption');
data.forEach(function (item, index) {
  if (index === 3) {
    homesFigcaptionPlace4.textContent = `${item.city}, ${item.country}`;
  }
});
homesFigcaptionPlace4.classList.add('homes__place');
homesItem4.appendChild(homesFigcaptionPlace4);

const homesButtonEllipse = document.createElement('button');
homesButtonEllipse.classList.add('homes__arrow--ellipse', 'button');
homesDiv.appendChild(homesButtonEllipse);

const homesButtonPike = document.createElement('div');
homesButtonPike.classList.add('homes__arrow--pike');
homesButtonEllipse.appendChild(homesButtonPike);

const destinationSection = document.querySelector('.destination');
console.log(destinationSection);

document.body.insertBefore(homesSection, destinationSection);
