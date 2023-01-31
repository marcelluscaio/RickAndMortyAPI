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
   let total = 0;
   let checkButtons = checkbox;

   for(i=0; i < checkButtons.length; i++) {
       if(checkButtons[i].checked) {
           total ++;
       }
       if(total > 1) {
           checkButtons[i].checked = false;
       }
   }        
}

// Create filters based on user checkbox choice
const checkStatus = () => {
   let status = '';
   statusButtons.forEach(button => {
      if(button.checked === true){
         status = `&status=${button.value}`;
      }
   });
   return status
};

const checkGender = () => {
   let gender = '';
   genderButtons.forEach(button => {
      if(button.checked === true){
         gender = `&gender=${button.value}`;
      }
   });
   return gender
};

const checkSpecies = () => {
   let species = '';
   speciesButtons.forEach(button => {
      if(button.checked === true){
         species = `&species=${button.value}`;
      }
   });
   return species
};

// Include possible filters on search
const searchCharacter = (searchTerm) => {
   const status = checkStatus();
   const gender = checkGender();
   const species = checkSpecies();
   makeRequest(`https://rickandmortyapi.com/api/character/?name=${searchTerm}${status}${gender}${species}`);
}

//Queremos pegar: name, status, species, gender, origin, location, image
//mostrar async e await