const elm = (document.querySelector("section article:nth-child(2) img").src = "https://picsum.photos/id/233/550/550");
console.log(elm);

const h2 = document.querySelector("main h2");
h2.style.color = "blue";
console.log(h2);

const h1 = document.querySelector("header h1");
h1.textContent = "Det er svært";
console.log(h1);

const h3 = document.querySelector("section article:nth-child(2) h3");
h3.textContent = "Her køre der måske et tog";
console.log(h3);

const p = document.querySelector("section article:nth-child(2) p");
p.textContent = "Et tog er et transportmiddel bestående af en række indbyrdes forbundne vogne, der kører på jernbaneskinner. Vognene kan være trukket af et lokomotiv, tidligere også af heste, eller de kan være selvkørende. I køreplansmæssig forstand er solokørende lokomotiver også tog.";
p.innerHTML = "Et tog er et transportmiddel bestående af en række indbyrdes forbundne vogne, der kører på <b>jernbaneskinner</b>. Vognene kan være trukket af et lokomotiv, tidligere også af heste, eller de kan være selvkørende. I køreplansmæssig forstand er solokørende lokomotiver også tog.";
console.log(p);
