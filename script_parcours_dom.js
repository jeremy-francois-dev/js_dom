console.log("1.Nombre de P présents dans la page HTML");
let allP = document.getElementsByTagName("p");
console.log(allP.length);
console.log("--------------------------------------------");
console.log("--------------------------------------------");


console.log("2.Contenu de l'élément avec l'id coucou :");
let coucou = document.getElementById("coucou");
console.log(coucou.textContent);
console.log("--------------------------------------------");
console.log("--------------------------------------------");

console.log("3.url de la 3eme balise a de la page :");
let allA = document.getElementsByTagName("a");
console.log(allA[2].href);
console.log("--------------------------------------------");
console.log("--------------------------------------------");


console.log("4.nombre d'éléments avec la classe compte-moi :");
let allCompteMoi = document.getElementsByClassName("compte-moi");
console.log(allCompteMoi.length);
console.log("--------------------------------------------");
console.log("--------------------------------------------");

console.log("5.nombre de li avec la classe compte-moi :");
let allLiCompteMoi = document.querySelectorAll("li.compte-moi");
console.log(allLiCompteMoi.length);
console.log("--------------------------------------------");
console.log("--------------------------------------------");

console.log("6.nombre de li avec la classe compte-moi dans une liste ordonnée :");
let allLiOrdonneCompteMoi = document.querySelectorAll("ul > li.compte-moi");
console.log(allLiOrdonneCompteMoi.length);
console.log("--------------------------------------------");
console.log("--------------------------------------------");

console.log("7.li du deuxieme ul du div :");
let find = document.querySelectorAll("div  ul");
let hide = find[1].firstElementChild;
console.log(hide.textContent);
console.log("--------------------------------------------");
console.log("--------------------------------------------");