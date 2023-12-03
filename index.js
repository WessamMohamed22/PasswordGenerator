const characters ={ 
cLetters:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
sLetters:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
numbers:["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
symbols:["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"] 
};

const features = {
    concatArr : [...characters.cLetters, ...characters.sLetters, ...characters.numbers, ...characters.symbols],
    isPWGenerated : false,
    maxCharacters : 15,
    firstPanel : "",
    secondPanel : "",
    isPWDisplayed : false,
}

const pwscr1EL = document.getElementById("pw-scr1");
const pwscr2EL = document.getElementById("pw-scr2");
const charInputEl = document.getElementById("char-input");

function maxCharacters(){
    let newInput = charInputEl.value;
    features.maxCharacters = newInput;
    features.isPWDisplayed = false
    remove()
}

function randomizer(){
    let randomArr = Math.floor(Math.random() *features.concatArr.length);
    return features.concatArr[randomArr];
}

function generatePassword() {
    if (features.isPWGenerated === false) {
        for(let i = 0; i < features.maxCharacters; i++) {
            pwscr1EL.textContent += randomizer()
            features.firstPanel = pwscr1EL.textContent
            pwscr2EL.textContent += randomizer()
            features.secondPanel = pwscr2EL.textContent
            features.isPWGenerated = true;
            features.isPWDisplayed = true;
        }
    } else {
        return features.isPWGenerated;
    }
}

function remove(){
    pwscr1EL.textContent = "";
    pwscr2EL.textContent = "";
    features.isPWGenerated = false;
    features.isPWDisplayed = false
}

