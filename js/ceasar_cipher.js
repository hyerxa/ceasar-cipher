function shift() {
    var word = document.getElementById("input").value;
    var newWord = new String();
    var letter;
    var alphabet = /[a-z]/i;
    for (let i = 0; i < word.length; i++) {
        if (alphabet.test(word[i]) === false) {
            letter = word[i];
        } else if (word[i].toLowerCase() === 'x') {
            if (word[i] != 'x') {
                letter = 'A';
            } else {
                letter = 'a';
            }
        } else if (word[i].toLowerCase() === 'y') {
            if (word[i] != 'y') {
                letter = 'B';
            } else {
                letter = 'b';
            }
        } else if (word[i].toLowerCase() === 'z') {
            if (word[i] != 'z') {
                letter = 'C';
            } else {
                letter = 'c';
            }
        } else {
            var oldCode = word.charCodeAt(i);
            var newCode = (oldCode + 3);
            letter = String.fromCharCode(newCode);
        }
        newWord = newWord + letter;
    }
    document.getElementById("message").innerHTML = ("Your encrypted message is: " + newWord);
}