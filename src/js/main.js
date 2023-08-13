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

const homeSection = document.querySelector('.homes__variants');

const homeSectionContent = data
  .slice(0, 4)
  .map((element) => {
    return `
    <figure class="homes__item _mobile">
      <img class="homes__image" src="${element.imageUrl}" alt="${element.name}">
      <figcaption class="homes__description">
        ${element.name}
      </figcaption>
      <figcaption class="homes__place">
        ${element.city}, ${element.country}
      </figcaption>
    </figure>
  `;
  })
  .join('');

homeSection.innerHTML += homeSectionContent;

const homesButtonEllipse = document.createElement('button');
homesButtonEllipse.classList.add('homes__arrow--ellipse', 'button');
homesDiv.appendChild(homesButtonEllipse);

const homesButtonPike = document.createElement('div');
homesButtonPike.classList.add('homes__arrow--pike');
homesButtonEllipse.appendChild(homesButtonPike);

const destinationSection = document.querySelector('.destination');

document.body.insertBefore(homesSection, destinationSection);