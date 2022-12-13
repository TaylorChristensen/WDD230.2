
const requestURL = 'https://raw.githubusercontent.com/TaylorChristensen/WDD230/master/chamber/directory/directory.json'
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinesses)
  });

    function displayBusinesses(business) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let img = document.createElement('img');
      let Adress = document.createElement('p');
      let phone = document.createElement('p');
      let webURL = document.createElement('p');
      let membership = document.createElement('p');
        let li = document.createElement('section');
        let listH2 = document.createElement('h2');
        let listAdress = document.createElement('p');
        let listPhone = document.createElement('p');
        let listWebURL = document.createElement('p');
        let listMembership = document.createElement('p');

      h2.textContent = `${business.name}`;
      Adress.textContent =  `${business.address}`;
      phone.textContent = `${business.phone}`;
      webURL.textContent = `${business.webLink}`;
      membership.textContent =`${business.membership}`;
      listH2.textContent = `${business.name}`;
      listAdress.textContent =  `${business.address}`;
      listPhone.textContent = `${business.phone}`;
      listWebURL.textContent = `${business.webLink}`;
      listMembership.textContent =`${business.membership}`;

      img.setAttribute('src', business.imageURL);
      img.setAttribute('alt',`${business.name}`);

      card.classList.add('card');
      img.classList.add('card-img');

      card.appendChild(h2);
      card.appendChild(img);
      card.appendChild(Adress);
      card.appendChild(phone);
      card.appendChild(webURL);
      card.appendChild(membership);
      li.appendChild(listH2);
      li.appendChild(listAdress);
      li.appendChild(listPhone);
      li.appendChild(listWebURL);
      li.appendChild(listMembership);

      document.querySelector('div.cards').appendChild(card);
      document.querySelector('div.list').appendChild(li);
    }

    const cardsButton = document.querySelector(".card-btn");
    const listButton = document.querySelector(".list-Btn");

    const Cards = document.querySelector(".cards");
    const List = document.querySelector(".list");

    const cardsBox = document.querySelector(".cards");
    const listBox = document.querySelector(".list");

    cardsButton.onclick = function() {
      const cardsBox = document.querySelector(".cards");
      const listBox = document.querySelector(".list");

      cardsBox.style.display  = "flex";
      listBox.style.display   = "none";
    }

    listButton.onclick = function() {
      const cardsBox  = document.querySelector(".cards");
      const listBox   = document.querySelector(".list");
    
      cardsBox.style.display  = "none";
      listBox.style.display   = "block";
    
    }
    
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    
    if (vw >= 800 && vw < 1000) {
      cardsBox.style.display  = "none";
      listBox.style.display   = "block";
    }