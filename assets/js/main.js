// Get HTML Elements
const searchField = document.querySelector("#search-field");
const searchButton = document.querySelector("#search-button");
const cardContainer = document.querySelector("#card-container");
const statusButtons = document.querySelectorAll(".status");
const genderButtons = document.querySelectorAll(".gender");
const speciesButtons = document.querySelectorAll(".species");


// Get Object Based on the Searched Term
const makeRequest = url => {
   fetch(url)
      .then(response => response.json())
      .then(response => renderResponse(response))
};

//First render
makeRequest('https://rickandmortyapi.com/api/character');

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
               <div class="character-description">
                  <h2 class="card-title text-center py-2">${name}</h2>
                  <p class="card-text"><span class="category">Species: </span>${species}</p>
                  <p class="card-text"><span class="category">Gender: </span>${gender}</p>
                  <p class="card-text"><span class="category">Origin: </span>${originName}</p>
                  <p class="card-text"><span class="category">Current Location: </span>${locationName}</p>
               </div>
               <div class="status-container">
                  <p class="card-text text-center m-auto text-light text-uppercase fw-bold">${status}</p>
               <div/>
            </div>
         `;
         cardContainer.appendChild(card);
      });
};

searchButton.addEventListener('click', (e) => {
      e.preventDefault();
      const searchTerm = searchField.value;
      searchCharacter(searchTerm);
   }
);

//Limit the checkbox selection to one option per category
const limitCheckboxSelection = (checkbox) => {
   
   for(i=0; i < statusButtons.length; i++) {
       if(statusButtons[i] !== checkbox){
         statusButtons[i].checked = false
       }
   }        
}


statusButtons.forEach(button => button.addEventListener('click', (event) => limitCheckboxSelection(event.target)));



// Get checkbox filter values
const getFilters = (checkbox, filter) => {
   let filterType = '';
   checkbox.forEach(button => {
      if(button.checked === true){
         filterType = `&${filter}=${button.value}`;
      }
   });
   return filterType
};


// Include filters on search
const searchCharacter = (searchTerm) => {
   const status = getFilters(statusButtons, 'status');
   const gender = getFilters(genderButtons, 'gender');
   const species = getFilters(speciesButtons, 'species');
   makeRequest(`https://rickandmortyapi.com/api/character/?name=${searchTerm}${status}${gender}${species}`);
}

//Queremos pegar: name, status, species, gender, origin, location, image
//mostrar async e await