/*
Haley Yerxa
04/28/2019
Ceasar Cipher
Shifts inputed text by 3 in the alphabet
*/

function shift() {
    var word = document.getElementById("input").value; // word is value inputed by user (taken in as a string)
    var newWord = new String(); // create a new string to be our new word
    var letter; // will be used to hold the current letter that is being shifter
    var index1; // index of original character
    var index2; // index of shifted character
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for (let i = 0; i < word.length; i++) { // loops entire input string one character at a time
        if (alphabet.includes(word[i].toLowerCase()) === false) { // if the character is not in the alphabet array (anything but a letter)
            letter = word[i]; // the letter stays the same
        } else { // if it is a letter
            index1 = alphabet.indexOf(word[i].toLowerCase()); // gets the position of the character in the alphabet array
            index2 = index1 + 3; // add 3 for shift
            if (26 % (index2 + 1) === 26) { // if the shift puts it out of bounds of the array (will have a remainder of 26 because it can't be divided at all)
                index2 = index2 - 26; // subtracts 26 to get the index we want (ex. if letter was y, shift would give index of 27, we actually want index of 1 (b))
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