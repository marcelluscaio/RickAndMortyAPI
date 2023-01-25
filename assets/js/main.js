const cardContainer = document.querySelector("#card-container");
let img ='';


fetch('https://rickandmortyapi.com/api/character')
   .then(resposta => resposta.json())
   .then(resposta => {
      resposta.results.forEach(result => {
            img = result.image;
            let card = document.createElement('div');
            card.classList.add("card");
            card.style.width = "18rem";
            card.innerHTML =
             `
               <img src=${img} class="card-img-top" alt="...">
               <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               </div>
            `;
            cardContainer.appendChild(card);


      });
   })


//name, status, species, gender, origin, location, image







//mostrar async we await
//há diferença entre json() e JSON.stringify x JSON.parse()?