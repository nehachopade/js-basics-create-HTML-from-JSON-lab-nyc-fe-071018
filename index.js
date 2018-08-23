document.addEventListener("DOMContentLoaded", (e) => {
  console.log(movies)
  const titanicButton =document.getElementById('Titanic')
  const terminatorButton =document.getElementById('Terminator 2')
  titanicButton.addEventListener('click',(event) =>{
    updateHTMLContent('Titanic') 
    //do something here
  })
  terminatorButton.addEventListener('click',(event) =>{
    updateHTMLContent('Terminator 2') 
    //do something here
  })
});
function updateHTMLContent(movieName)
{
  let title = document.getElementById ('title')
  let director = document.getElementById ('director')
  let genre = document.getElementById ('genre')
  let filmRating = document.getElementById ('filmRating')
  let poster=document.getElementById('poster')
  let description =document.getElementById('description')
  let audienceScore=document.getElementById('audienceScore')
  let currentMovie = movie[movieName]
  
  title.innerHTML = movies[currentMovie].title
  director.innerHTML = movies[currentMovie].director
  genre.innerHTML = movies[currentMovie].genre
  filmRating.innerHTML = movies[currentMovie].filmRating
  poster.setAttribute('src', movies[currentMovie].poster)
  description.innerHTML =movies[currentMovie].description
  audienceScore.innerHTML= movies[currentMovie].audienceScore
}
