const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById("text-el1")
let password2El = document.getElementById("text-el2")

generateBtn.addEventListener("click", function(){
    password1El.innerText = ""
    password2El.innerText = ""
    
    for (let i=0; i<16; i++){
        
    let randomIndex1 = Math.floor(Math.random()*characters.length)
    let randomIndex2 = Math.floor(Math.random()*characters.length)
    
    password1El.innerText += characters[randomIndex1];
    password2El.innerText += characters[randomIndex2];
    } 

})




