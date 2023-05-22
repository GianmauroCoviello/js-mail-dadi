let verifica_iscritti = prompt('Inserisci la tua mail')

let flag = false

const iscritti = ['rashford@gmail.com', 'Grealish@gmail.com', 'Haaland@gmail.com', 'Fernandes@gmail.com', 'Sancho@gmail.com']
console.log(iscritti)


for (let i = 0; i < iscritti.length; i++) {

    if (iscritti[i] === verifica_iscritti) {
        flag = true

        
        
    }
}

if (flag === true) {
    console.log("Complimenti la tua mail risulta valida")
    let flag = document.getElementById("verifica").innerHTML = ('Complimenti la tua mail risulta valida')
    
} else{
    console.log("Spiacenti, la tua mail non risulta valida")
    let flag = document.getElementById("verifica").innerHTML = ('Spiacenti, la tua mail non risulta valida')
    
}


