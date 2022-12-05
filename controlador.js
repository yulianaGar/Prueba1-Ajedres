/*Esta funcion es para obtener los identificadores de los elementos*/

function $(id){ //Inicio de la funcion $
  return document.getElementById(id); //Regresa como resultado el identificador del elemento
}//fin de la funcion $

function aparecerReina(id){
  var img = document.createElement('img');
  img.src = "corona.png";
  
  //vaciar y llenar con imagen 
  
  //document.getElementById(id).appendChild(img);
  
  document.getElementById(id).innerHTML="R";
}


$("boton").onclick= function(){
  alert("Iniciando...");
  //hacer primera reina aleatoria 
   var x1 = Math.floor(Math.random() * 8) + 1; //direccion x reina 1
   var y1 = Math.floor(Math.random() * 8) + 1;//direccion y reina 1
   $('rx1').value=x1;
   $('ry1').value=y1;
   var p1=x1*y1;
   aparecerReina(p1);
   generarR2();
}

function generarR2(){
   var x2 = Math.floor(Math.random() * 8) + 1; //direccion x reina 2
   var y2 = Math.floor(Math.random() * 8) + 1; //direccion y reina 2
   $('rx2').value=x2;
   $('ry2').value=y2;
   var p2=x2*y2;
   aparecerReina(p2);
   generarR3();
 }
function generarR3(){
   var x3 = Math.floor(Math.random() * 8) + 1;//direccion x reina 3
   var y3 = Math.floor(Math.random() * 8) + 1; //direccion y reina 3
   $('rx3').value=x3;
   $('ry3').value=y3;
   var p3=x3*y3;
   aparecerReina(p3);
   generarR4();
}
function generarR4(){
   var x4 = Math.floor(Math.random() * 8) + 1; //direccion x reina 4
   var y4 = Math.floor(Math.random() * 8) + 1;//direccion y reina 4
   $('rx4').value=x4;
   $('ry4').value=y4;
   var p4=x4*y4;
   aparecerReina(p4);
   generarR5();
}
function generarR5(){
   var x5 = Math.floor(Math.random() * 8) + 1; //direccion x reina 5
   var y5 = Math.floor(Math.random() * 8) + 1; //direccion y reina 5
   $('rx5').value=x5;
   $('ry5').value=y5;
   var p5=x5*y5;
   aparecerReina(p5);
    generarR6();
}
 function generarR6(){
 var x6 = Math.floor(Math.random() * 8) + 1; //direccion x reina 6
 var y6 = Math.floor(Math.random() * 8) + 1; //direccion y reina 6
 $('rx6').value=x6;
 $('ry6').value=y6;
 var p6=x6*y6;
 aparecerReina(p6);
 generarR7();
}
   function generarR7(){
   var x7 = Math.floor(Math.random() * 8) + 1; //direccion x reina 7
   var y7 = Math.floor(Math.random() * 8) + 1; //direccion y reina 7
   $('rx7').value=x7;
   $('ry7').value=y7;
   var p7=x7*y7;
   aparecerReina(p7);
   generarR8();
 }
function generarR8(){
   var x8 = Math.floor(Math.random() * 8) + 1; //direccion x reina 8
   var y8 = Math.floor(Math.random() * 8) + 1;//direccion y reina 8
   $('rx8').value=x8;
   $('ry8').value=y8;
   var p8=x8*y8;
   aparecerReina(p8);
  //lenar cuadros de ubicaciones posibles de reinas 
initialFuntion();
}


// alert('hola');

// true
const arr = [[1, 1],[2, 5],[3, 8],[4, 6],
[5, 3],[6, 7],[7, 2],[8, 4]];

// true
const arr1 = [[1, 1],[2, 6],[3, 8],[4, 3],
[5, 7],[6, 4],[7, 2],[8, 5]];

// false
const arr2 = [ [1, 1],[2, 3],[3, 5],[4, 7],
[5, 2],[6, 4],[7, 6],[8, 8]];

// false
const arr3 = [[1, 1],[2, 3],[3, 5],[4, 7],
[5, 2],[6, 4],[7, 6],[8, 8]];

// elementos de HTML
const rx1 = $('rx1');
const ry1 = $('ry1');

const rx2 = $('rx2');
const ry2 = $('ry2');

const rx3 = $('rx3');
const ry3 = $('ry3');

const rx4 = $('rx4');
const ry4 = $('ry4');

const rx5 = $('rx5');
const ry5 = $('ry5');

const rx6 = $('rx6');
const ry6 = $('ry6');

const rx7 = $('rx7');
const ry7 = $('ry7');

const rx8 = $('rx8');
const ry8 = $('ry8');

const resultPrint = document.getElementById('result');
const btn = document.getElementById('btn');
const btnTryA = document.getElementById('btn-try-a');


let i = 0;
let j = 1;
let result = '';

// Funcion que compara los elementos de array
const compare = (arr) => {
  console.log('i =', i);
  console.log('j =', j);
  if (j < arr.length) {
    // Se comparan dos reinas a la vez.
    let rest1 = arr[i][0] - arr[i][1];
    let rest2 = arr[j][0] - arr[j][1];
    console.log(rest1, rest2);

    // compara que no se repita el mismo numero en X y en Y
    if (arr[i][0] === arr[j][0] || arr[i][1] === arr[j][1]) {
      result = 'Chocan las reinas';
      return result;
    } else {
      // compara que las reinas no esten en la misma diagonal, haciendo una resta de x-y
      if (rest1 === rest2) {
        result = 'Chocan las reinas';
        return result;
      } else {
        // certificando que se cumple que las reina no esta en la misma linea y diagonal, 
        //se pasa a la siguiente reina.
        j++;
        compare(arr);
      }
    }
  } else {
    // si ha terminado de comparar a la primera reina con las otras 7
    // pasa a comparar las siguientes reinas en el mismo ciclo.
    i++;
    j = i + 1;
    if (i < arr.length) {
      compare(arr);
    } else {
      // si termina de hacer todas las comparaciones el resultado sera true.
      result = 'RESUELTO CORRECTAMENTE';
      return result;
    };
  };
  // console.log(result);
  return result;
};

const initialFuntion = () => {

  if (rx1.value, rx2.value, rx3.value, rx4.value, rx5.value, rx6.value, rx7.value, rx8.value,
   ry1.value, ry2.value, ry3.value, ry4.value, ry5.value, ry6.value, ry7.value, ry8.value) 
  {
    const arrUser = [[rx1.value, ry1.value], [rx2.value, ry2.value], [rx3.value, ry3.value],
    [rx4.value, ry4.value], [rx5.value, ry5.value], [rx6.value, ry6.value], [rx7.value, ry7.value],
    [rx8.value, ry8.value]];
    const res = compare(arrUser);
    console.log(res);
    resultPrint.innerHTML = res;
  } else {
    alert('escribe numeros validos en las casillas');
  };
};

btn.addEventListener('click', initialFuntion);
btnTryA.addEventListener('click', event=>location.reload());

// const respuesta = compare(arr1);
// console.log(respuesta);

