let containerDom = document.getElementById('container');



//numeriscelti
var numeriInseriti=[];
console.log(numeriInseriti);

//numeri random
let numerivisibilicauali=[]
console.log(numerivisibilicauali);








 numerivisibili= generatenumber(1,100);
 numerivisibilicauali.push(numerivisibili);
 containerDom.append(`memorizza questi numeri  ${ numerivisibili}`);

//imposto tempo
 setTimeout(rimuoviNumeri, 3000);

  
  
 setTimeout(() => {
    numerisc=chiedinumero();
    numeriInseriti.push(numerisc);
    confronto( numeriInseriti,numerivisibilicauali);
 },3500);
 










//FUNZIONE PER GENERARE NUMERI CASUALI
function generatenumber(min, max){
 let numericasuali=[];
 for (i=0;i<5;i++){
 numericasuali.push(Math.floor(Math.random()*(max-min + 1))+ min);
 }
 return numericasuali;
}
//funzione per rimuovere i numeri
function rimuoviNumeri() {
    containerDom.classList.add("d-none");
   }
//fuzione per chiedere numero con prompt
function chiedinumero(){
    var numeri=[];
    for(var i=0; i<5; i++){
        var numero = parseInt(prompt("Inserisci un numero"));
        numeri.push(numero);
       }
       return numeri;
}
//funzione confronto 
function confronto(array1, array2){
    var punti = 0;

    for (var i = 0; i < array1.length; i++) { //scorre i due array
      if (array1[i] === array2[i]) { //se i numeri corrispondono, assegna un punto
        punti++;
      }
      else { //altrimenti hai perso, restituisci il messaggio
        alert( "Hai perso, i numeri non corrispondono");
      }
    }
  
    if (punti === 5) { //se hai tutti i punti hai vinto
      alert("Hai vinto!");
    }
    else { //altrimenti hai perso, restituisci il messaggio
      alert("Hai perso, hai ottenuto " + punti + " punti su 5");
    }
    
}