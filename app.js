
//Operando 1
let oper1 = 0;

//Operando 2
let oper2;

//Operador
let operator;

//Total parcial
let parcialTotal;


//Mostrar en pantalla el número presionado
//Tener una referencia a la pantalla
const screen = document.getElementById('symbols');




//Al boton 1 agregarle un listener de click
const boton1 = document.getElementById('n1');
const boton2 = document.getElementById('n2');
const boton3 = document.getElementById('n3');
const boton4 = document.getElementById('n4');
const boton5 = document.getElementById('n5');
const boton6 = document.getElementById('n6');
const boton7 = document.getElementById('n7');
const boton8 = document.getElementById('n8');
const boton9 = document.getElementById('n9');
const boton0 = document.getElementById('n0');

// //Listeners
boton1.addEventListener('click', showInScreen);
boton2.addEventListener('click', showInScreen);
boton3.addEventListener('click', showInScreen);
boton4.addEventListener('click', showInScreen);
boton5.addEventListener('click', showInScreen);
boton6.addEventListener('click', showInScreen);
boton7.addEventListener('click', showInScreen);
boton8.addEventListener('click', showInScreen);
boton9.addEventListener('click', showInScreen);
boton0.addEventListener('click', showInScreen);


// const numberButtons = document.getElementsByClassName('number');
// console.log(numberButtons);
// console.log(numberButtons.length)

// for (let i = 0; i < numberButtons.length; i++) {
//     numberButtons[i].addEventListener('click', showInScreen);  
// }


//Luego ejecutar una función que me ponga en pantalla el numero 1


function showInScreen(e) {
    //Tomar el valor del botón
    e.preventDefault();
    const valorBoton = e.target.value;

    // let oper1 = 0;

    if (oper1 === 0) {
        screen.innerHTML = valorBoton;
        oper1 = parseFloat(valorBoton);
    }else{
        screen.innerHTML += valorBoton;
        oper1 = parseFloat(screen.innerHTML);
    }

    console.log(screen.innerHTML);
    console.log(oper1);
  
}

//Implementar funcionalidad del boton AC
const clearButton = document.getElementById('ac');
clearButton.addEventListener('click', resetCalculator)

function resetCalculator() {
    screen.innerHTML = "0";
    oper1 = 0;
    oper2 = null;
    operator = null;
}




// const screen = document.getElementById('symbols');
// const num1 = document.getElementById('n1');

//num1 = 6


//events
// num1.addEventListener('click', show);


// function show(e){
//     e.preventDefault;
//     screen.innerHTML = num1.value;
//     oper1 = parseInt(num1.value)
// }







//console.log(e.target);





/*
function reset() {
    result.textContent = "";
    operator1 = 0;
    operator2 = 0;
    operator; = "";
}
*/


