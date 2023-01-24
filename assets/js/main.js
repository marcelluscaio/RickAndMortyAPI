let dados;

fetch('https://rickandmortyapi.com/api/character')
   .then(respostaDaPromessa1 => respostaDaPromessa1.json())
   .then(respostaDaPromessa2 => dados = respostaDaPromessa2)

//mostrar async we await
//há diferença entre json() e JSON.stringify x JSON.parse()?