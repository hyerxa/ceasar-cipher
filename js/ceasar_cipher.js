/*
Haley Yerxa
04/28/2019
Ceasar Cipher Functions
Shifts inputed text by however many letters the user inputs
*/

function shiftUp() {
    var word = document.getElementById("input").value; // word is value inputed by user (taken in as a string)
    var shiftNumber = parseInt(document.getElementById("shift-number").value); // the number of letters that the user wants to shift by
    var newWord = new String(); // create a new string to be our new word
    var letter; // will be used to hold the current letter that is being shifted
    var index1; // index of original character
    var index2; // index of shifted character
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for (let i = 0; i < word.length; i++) { // loops entire input string one character at a time
        if (alphabet.includes(word[i].toLowerCase()) === false) { // if the character is not in the alphabet array (anything but a letter)
            letter = word[i]; // the letter stays the same
        } else { // if it is a letter
            index1 = alphabet.indexOf(word[i].toLowerCase()); // gets the position of the character in the alphabet array
            index2 = index1 + shiftNumber; // adds number for shift
            if (26 % (index2 + 1) === 26) { // if the shift puts it out of bounds of the array (will have a remainder of 26 because it can't be divided at all)
                index2 = index2 - 26; // subtracts 26 to get the index we want (ex. if shift was 3 and letter was y, shift would give index of 27, we actually want index of 1 (b))
            }
        
            letter = alphabet[index2]; // shifted letter corresponds to new index in alphabet array
            if (alphabet.includes(word[i]) === false) { // if the original letter was uppercase, it won't be in array, so this will convert the new letter back into upper case
                letter = letter.toUpperCase();
            }
        }
        newWord = newWord + letter; // appends letter to the output string
    }
    document.getElementById("message").innerHTML = ("Your encrypted message is: " + newWord);
}

function shiftDown() {
    var word = document.getElementById("input").value; // word is value inputed by user (taken in as a string)
    var shiftNumber = parseInt(document.getElementById("shift-number").value); // the number of letters that the user wants to shift by
    var newWord = new String(); // create a new string to be our new word
    var letter; // will be used to hold the current letter that is being shifted
    var index1; // index of original character
    var index2; // index of shifted character
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for (let i = 0; i < word.length; i++) { // loops entire input string one character at a time
        if (alphabet.includes(word[i].toLowerCase()) === false) { // if the character is not in the alphabet array (anything but a letter)
            letter = word[i]; // the letter stays the same
        } else { // if it is a letter
            index1 = alphabet.indexOf(word[i].toLowerCase()); // gets the position of the character in the alphabet array
            index2 = index1 - shiftNumber; // subtracts number for shift
            if (index2 < 0) { // if the shift puts it out of bounds of the array (will have a remainder of 26 because it can't be divided at all)
                index2 = index2 + 26; // adds 26 to get the index we want (ex. if shift was 3 and letter was a, shift would give index of -3, we actually want index of 23 (x))
            }
        
            letter = alphabet[index2]; // shifted letter corresponds to new index in alphabet array
            if (alphabet.includes(word[i]) === false) { // if the original letter was uppercase, it won't be in array, so this will convert the new letter back into upper case
                letter = letter.toUpperCase();
            }
        }
        newWord = newWord + letter; // appends letter to the output string
    }
    document.getElementById("message").innerHTML = ("Your decrypted message is: " + newWord);
}