const searchField = document.querySelector("#search-field");
const searchButton = document.querySelector("#search-button");
const cardContainer = document.querySelector("#card-container");

searchButton.addEventListener('click', (e) => {
      e.preventDefault();
      const searchTerm = searchField.value;
      searchCharacter(searchTerm);
   }
);

const makeRequest = url => {
   fetch(url)
      .then(response => response.json())
      .then(response => renderResponse(response))
};

const renderResponse = response => {
   cardContainer.innerHTML = ''; 
   //Inner html ou outro?
   //https://bobbyhadz.com/blog/javascript-clear-div-contents
   //https://www.geeksforgeeks.org/how-to-clear-the-content-of-a-div-using-javascript/
   response.results.forEach(result =>
      {
         const img = result.image;
         const name = result.name;
         const status = result.status;
         const species = result.species;
         const gender = result.gender;
         const originName = result.origin.name;
         const locationName = result.location.name;
         const card = document.createElement('div');
         card.classList.add("card");
         card.style.width = "18rem";
         card.innerHTML =
         `
            <img src=${img} class="card-img-top" alt="...">
            <div class="card-body">
               <h2 class="card-title">${name}</h2>
               <p class="card-text">${status}</p>
               <p class="card-text">${species}</p>
               <p class="card-text">${gender}</p>
               <p class="card-text">${originName}</p>
               <p class="card-text">${locationName}</p>
            </div>
         `;
         cardContainer.appendChild(card);
      });
};

const searchCharacter = (searchTerm) => {
   makeRequest(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`);
   /* 
   fetch()
      .then(response => response.json())
      .then(response => renderResponse(response)) */
}

makeRequest('https://rickandmortyapi.com/api/character');



//Queremos pegar: name, status, species, gender, origin, location, image

//mostrar async e await