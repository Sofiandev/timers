// fonction synchrone
function wait(duration) {
  const t = Date.now();
  while (Date.now() - t < duration) {}
}

console.log("bonjour");
// wait(1000);
setTimeout(() => {
  console.log("les gens");
}, 1000);

console.log("Au revoir");

// avec setTimeout (asynchrone), d'autres fonctions sont lancées, le console.log('au revoir') s'affichera avec "les gens"

// creer un interval d'affichage
let i = 0;
const t = setInterval(() => {
  i++;
  console.log("bonjour");
  if (i >= 5) {
    clearInterval(t);
  }
}, 200);

function decompte(n) {
  console.log(n);
  const t = setInterval(() => {
    n--;
    console.log(n);
    if (n === 0) {
      clearInterval(t);
    }
  }, 1000);
}

decompte(3);
decompte(5);
