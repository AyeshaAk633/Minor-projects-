const movieContainer = document.getElementById("movieContainer");

async function getMovie(movieName){
  
  movieContainer.innerHTML = "<h2>Loading.......</h2>";
  
  const url = `https://www.omdbapi.com/?apikey=8cd9a21a&t=${movieName}`;
  
  try{
    let response = await fetch(url);
    let data = await response.json();
    if(data.Response == "True"){
    movieContainer.innerHTML = `
    <div class="movie-card">
    <img src="${data.Poster}">
    <h2>${data.Title}</h2>
    <p>${data.Year}</p>
    <p>${data.Plot}</p>
    </div>`;
      
    }else{
      movieContainer.innerHTML = "<h2>Movie Not Found</h2>";
      
    }
    
  }catch(error){
    movieContainer.innerHTML = "<h2>Error fetching movie</h2>";
    console.log(error);
    
  }
  
}

function HandleSearch(){
  const movieName = document.getElementById("Movie").value;
  if(movieName){
    getMovie(movieName);
    
  }
  
}