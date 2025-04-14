const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const pass1EL = document.getElementById("pass1-el")
const pass2EL = document.getElementById("pass2-el")

function generatePass() {
    const passwordLength = 15
    let password1 = ""
    let password2 = ""

    for (let i = 0; i < passwordLength; i++) {
        const char1 = characters[Math.floor(Math.random() * characters.length)]
        const char2 = characters[Math.floor(Math.random() * characters.length)]
        password1 += char1
        password2 += char2
    }

    pass1EL.textContent = password1
    pass2EL.textContent = password2
}


