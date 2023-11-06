//esercizio 1
/* 
const sottrazione = (a, b) => a - b;
sottrazione(18, 5);
console.log(sottrazione(18, 5));
 */
/* 
const studente = {
  nome: "Jose",
  eta: 15,
  passaggioClasse: function (anni) {
    this.eta += anni;
  },
  identita: function () {
    console.log(this.eta + " anni", this.nome);
  },
};

studente.passaggioClasse(5);
console.log(studente);
studente.identita(); */
/* 
window.addEventListener(`load`, () => {
  let body = document.body;
  const div1 = document.createElement(`div`);
  const paragraf = document.createElement(`p`);
  body.appendChild(div1);
  div1.appendChild(paragraf);
  paragraf.innerText = `Mado' che burdel \n nu veru burdelu`;
});
 */

//esercizio 4
/* 
const lista = [`maglia`, `felpa`, `camicia`];

window.addEventListener(`load`, () => {
  let body = document.body;
  let ul = document.createElement(`ul`);
  for (let i = 0; i < lista.length; i++) {
    let li = document.createElement(`li`);
    li.innerText = lista[i];
    ul.appendChild(li);
  }
  let firstLi = document.createElement(`li`);
  firstLi.innerHTML = `savatte`;
  ul.appendChild(firstLi);
  let lastLi = document.createElement(`li`);
  lastLi.innerHTML = `cappello`;
  ul.insertBefore(lastLi, ul.children[0]);
  body.appendChild(ul);
});
 */
