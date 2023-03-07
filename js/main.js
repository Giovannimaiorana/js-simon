const containerDom = document.getElementById('container');
let numeriInseriti=[];
let numerivisibilicauali=[]








 numerivisibili= generatenumber(1,100);
 
containerDom.append(`memorizza questi numeri  ${ numerivisibili}`);

//imposto tempo
setTimeout(chiedinumero, 3000);









//FUNZIONE PER GENERARE NUMERI CASUALI
function generatenumber(min, max){
 let numericasuali=[];
 for (i=0;i<5;i++){
 numericasuali.push(Math.floor(Math.random()*(max-min + 1))+ min);
 }
 return numericasuali;
}
//fuzione per chiedere numero con prompt
function chiedinumero(numerimemorizzati){
    for(let i=0; i<5; i++){
         numerimemorizzati=parseInt(prompt("inserisci il numero "))
         
       }
    return numerimemorizzati;
}