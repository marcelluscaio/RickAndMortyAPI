const cardContainer = document.querySelector("#card-container");

/* const renderCards = (url) => {
   fetch(url)
} */


fetch('https://rickandmortyapi.com/api/character')
   .then(resposta => resposta.json())
   .then(resposta => {
      resposta.results.forEach(result => {
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
   })


//Queremos pegar: name, status, species, gender, origin, location, image

//mostrar async e await