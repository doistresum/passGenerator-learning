const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1EL = document.getElementById("pass1-el")
let pass2EL = document.getElementById("pass2-el")
let generatePassBtn = document.getElementById("generate-pass")

generatePassBtn.addEventListener("click", function(){
    pass1EL.textContent = ""
    pass2EL.textContent = ""
    for (let i = 1; i < 16; i++){
        let pass1 = Math.floor(Math.random() * characters.length)
        let pass2 = Math.floor(Math.random() * characters.length)
        pass1EL.textContent += characters[pass1]
        pass2EL.textContent += characters[pass2]
    }
})

