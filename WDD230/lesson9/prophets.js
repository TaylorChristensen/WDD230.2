const requestURL = 
    'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function getProphets() {
    const response = await fetch(requestURL);
    const data = await response.json();
    data.prophets.forEach(prophet => {displayProphets(prophet)})
}

function displayProphets(prophet) {

    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    // let h3 = document.createElement('h3');
    let portrait = document.createElement('img');
    let birthDate = document.createElement('h3');
    let birthPlace = document.createElement('h3');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} ${prophet.order}`);
    // portrait.setAttribute('alt', ` Date of Birth ${prophet.birthdate}`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    // card.appendChild(h3);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
  }


getProphets();

