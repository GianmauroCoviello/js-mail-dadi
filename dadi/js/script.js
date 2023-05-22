// VARIABILE BUTTON
let button = document.getElementById('fight')

button.addEventListener('click', function(){
    // VARIABILE USER
    let user = Math.floor(Math.random() * 6)+1;
    console.log(user)
    // VARIABILE COMPUTER
    let computer = Math.floor(Math.random() * 6)+1;
    console.log(computer)
    // PRIMA CONDIZIONE
    if (user > computer) {
        console.log('User ha vinto')
        document.getElementById('Result').innerHTML= (' "User ha vinto" ')


    // SECONDA CONDIZIONE    
    } else if (user === computer) {
        console.log('avete pareggiato')
        document.getElementById('Result').innerHTML= (' "avete pareggiato" ')
    // TERZA CONDIZIONE   
    } else{
        console.log('Computer ha vinto')
        document.getElementById('Result').innerHTML= (' "Computer ha vinto" ')


    }

    
    document.getElementById("user").innerHTML = user;
    document.getElementById("computer").innerHTML = computer;

})







