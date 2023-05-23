// VARIABILE CON PROMPT
let verifica_iscritti = prompt('Inserisci la tua mail');
// VARIABILE FLAG
let flag = false;

// ARRAY
const iscritti = ['rashford@gmail.com', 'Grealish@gmail.com', 'Haaland@gmail.com', 'Fernandes@gmail.com', 'Sancho@gmail.com'];
console.log(iscritti)

// CICLO FOR
for (let i = 0; i < iscritti.length; i++) {
    // CONDIZIONE 
    if (iscritti[i] === verifica_iscritti) {
        flag = true;

        
        
    }
}
// PRIMA CONDIZIONE 
if (flag === true) {

    let flag = document.getElementById("verifica").innerHTML = ('Complimenti la tua mail risulta valida');
// SECONDA CONDIZIONE   
} else{

    let flag = document.getElementById("verifica").innerHTML = ('Spiacenti, la tua mail non risulta valida');
    
}


