//Ændre farven på h2 element under main
const h2 = document.querySelector("main h2");
h2.style.color = "blue";
console.log(h2);

//Ændre skriften på h1 element under header
const h1 = document.querySelector("header h1");
h1.textContent = "Det er svært";
console.log(h1);

//Ændre skriften på h3 element under section, i den anden artikel
const h3 = document.querySelector("section article:nth-child(2) h3");
h3.textContent = "Her køre der måske et tog";
console.log(h3);

//Ændre skriften på p element under section, i den anden artikel
const p = document.querySelector("section article:nth-child(2) p");
//ændre kun teksten
p.textContent = "Et tog er et transportmiddel bestående af en række indbyrdes forbundne vogne, der kører på jernbaneskinner. Vognene kan være trukket af et lokomotiv, tidligere også af heste, eller de kan være selvkørende. I køreplansmæssig forstand er solokørende lokomotiver også tog.";
//Ændre teksten og retter i html, her tilføjes en fed skrift til et ord
p.innerHTML = "Et tog er et transportmiddel bestående af en række indbyrdes forbundne vogne, der kører på <b>jernbaneskinner</b>. Vognene kan være trukket af et lokomotiv, tidligere også af heste, eller de kan være selvkørende. I køreplansmæssig forstand er solokørende lokomotiver også tog.";
console.log(p);

//Ændre img element under section, i den første artikel
const img = document.querySelector("section article:nth-child(1) img");
img.src = "https://picsum.photos/id/213/550/550";
console.log(img);

//Alans måde at gøre det på
const elm = (document.querySelector("section article:nth-child(2) img").src = "https://picsum.photos/id/233/550/550");
console.log(elm);
