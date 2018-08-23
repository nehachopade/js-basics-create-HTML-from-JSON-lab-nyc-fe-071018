document.addEventListener("DOMContentLoaded", (e) => {
  console.log(movies)
  // invoking a function here will make sure it happens on page load
  // your code here
  const titanicButton =document.getElementById('Titanic')
  const terminatorButton =document.getElementById('Terminator 2')
  titanicButton.addEventListener('click',(event) =>{
    //do something here
  })
  terminatorButton.addEventListener('click',(event) =>{
    //do something here
  })
});
function updateHTMLContent()
{
  let title = getElementById ('title')
  let director = getElementById ('director')
  let genre = getElementById ('genre')
  let filmRating = getElementById ('filmRating')
  
  title.innerHTML = 'Hi'
}