
//Solução 1
function verificaPalindromo (string){
    if(!string) return "string inesistente";

    return string.split("").reverse().join("") === string;
}

// console.log(verificaPalindromo("gato"))

//Solução 2

function verificaPalindromo2 (string){
    if(!string) return "string inesistente";

    for(let i = 0; i < string.lenght / 2; i++) {
        if(string[i] !== string.lenght -) {
            if(string [i] !== string.lenght - 1 - i){
                
            }
        }
    }
}