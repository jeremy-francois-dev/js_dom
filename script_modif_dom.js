function changeTitles() {
  let h1 = document.getElementsByTagName("h1")[0];
  h1.innerHTML = "Ce que j'ai appris à THP";
  let p = document.querySelectorAll(".jumbotron p")[0];
  p.innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}
changeTitles();


function changeCallToActions() {
  let linkOne = document.querySelectorAll(".jumbotron a")[0]
  linkOne.innerHTML = "Ok je veux tester !";
  linkOne.href = "http://www.thehackingproject.org";
  let linkTwo = document.querySelectorAll(".jumbotron a")[1];
  linkTwo.innerHTML = "Non Merci";
  linkTwo.href = "https://www.pole-emploi.fr/accueil/";
}
changeCallToActions();


function changeLogoName() {
  let logo = document.querySelectorAll(".navbar a strong")[0];
  logo.innerHTML = "The THP Experience";
  logo.style.fontSize = "2em";
  
}
changeLogoName();


function populateImages() {
  let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
  let img = document.querySelectorAll(".card-img-top");

  img.forEach(element => {
    element.src = imagesArray[0];    
  });
  
}
populateImages();



function deleteLastCards() {
  let div = document.querySelectorAll("div.card");
  console.log(div.length);
  for (let index = 1; index < 4; index++) {
    div[div.length-index].remove();    
  };
}
deleteLastCards();