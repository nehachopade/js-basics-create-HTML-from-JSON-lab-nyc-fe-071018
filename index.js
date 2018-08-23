document.addEventListener("DOMContentLoaded", (e) => {
  console.log(movies)
  const titanicButton =document.getElementById('Titanic')
  const terminatorButton =document.getElementById('Terminator 2')
  titanicButton.addEventListener('click',(event) =>{
    updateHTMLContent()
    //do something here
  })
  terminatorButton.addEventListener('click',(event) =>{
    //do something here
  })
});
function updateHTMLContent()
{
  let title = document.getElementById ('title')
  let director = document.getElementById ('director')
  let genre = document.getElementById ('genre')
  let filmRating = document.getElementById ('filmRating')
  
  title.innerHTML = 'Hi'
  
}