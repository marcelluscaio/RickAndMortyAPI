// Get HTML Elements
const searchField = document.querySelector("#search-field");
const searchButton = document.querySelector("#search-button");
const cardContainer = document.querySelector("#card-container");


// Create Empty Variables to Receive Results
var img = '';
var name = '';
var status = '';
var species = '';
var gender = '';
var originName = '';
var locationName = '';


// Add Event Listener for the Search
searchButton.addEventListener('click', (e) => {
      e.preventDefault();
      const searchTerm = searchField.value;
      makeRequest(searchTerm);
   }
);


// Get Object Based on the Searched Term
const makeRequest = (searchTerm) => {
   fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`)
      .then(response => response.json())
      .then(response => renderResponse(response))
};


// Create Card Element
const createCards = (img, name, status, species, gender, originName, locationName) => {
   const card = document.createElement('div');
   card.classList.add("card");
   card.style.width = "18rem";
   card.innerHTML =
   `
      <img src=${img} class="card-img-top" alt="...">
      <div class="card-body">
         <h2 class="card-title text-center py-2">${name}</h2>
         <p class="card-text"><span class="fw-bold">Species: </span>${species}</p>
         <p class="card-text"><span class="fw-bold">Gender: </span>${gender}</p>
         <p class="card-text"><span class="fw-bold">Origin: </span>${originName}</p>
         <p class="card-text"><span class="fw-bold">Current Location: </span>${locationName}</p>
         <p class="card-text text-center">${status}</p>
      </div>
   `;
   cardContainer.appendChild(card);
}


// Set Variables Values, Transfer values to Existing Cards and Show the Search Result on the Screen
const showSearchResult = (result, img, name, status, species, gender, originName, locationName) => {
   img = result.image;
   name = result.name;
   status = result.status;
   species = result.species;
   gender = result.gender;
   originName = result.origin.name;
   locationName = result.location.name;

   createCards(img, name, status, species, gender, originName, locationName);
} 

// Clear Displayed Result for Every New Search

const clearSearch = () => {
   cardContainer.replaceChildren(); 
}
  

// Loop through object to Find the Result and Display It
const renderResponse = response => {
   clearSearch();
   // const searchResult = response.result;
   response.results.forEach(result =>
      {
         showSearchResult(result);
        
      });
};


//Queremos pegar: name, status, species, gender, origin, location, image

//mostrar async e await