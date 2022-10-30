function genPassword() {
    let addUpperCase = "";
    let addLowerCase = "";
    let addNumeric = "";
    let addSpecialCharacters = "!@#$%^&*()";
    let getLength = prompt("Please enter password length:", "8");

    // check password length is provided
    if (getLength == null || getLength > 128) {
        document.getElementById("generatedText").innerHTML= "Password length must be provided between 8-128";
        return;
    }

    // confirm to include uppercase
    let text = "To include UPPERCASE press OK\n Pressing cancel will not include UPPERCASE.";
    if (confirm(text) == true) {
      addUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    // confirm to include lower case
    text = "To include LOWERCASE press OK\n Pressing cancel will not include LOWERCASE.";
    if (confirm(text) == true) {
        addLowerCase = "abcdefghijklmnopqrstuvwxyz";
    }

    // confirm to include numeric
    text = "To include NUMERIC press OK\n Pressing cancel will not include NUMERIC.";
    if (confirm(text) == true) {
        addNumeric = "0123456789";
    }
    // concatenation of all confirmed values
    var passwordCharacters = addNumeric+addLowerCase+addSpecialCharacters+addUpperCase;

    // assign length to new variable
    var passwordLength = getLength;

    var password = "";

    // loop for pasword length to create random password
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * passwordCharacters.length);
        password += passwordCharacters.substring(randomNumber, randomNumber + 1);
    }
    // show generated password
    document.getElementById("password").value = password;
    
    // show message
    document.getElementById("generatedText").innerHTML= "Secure Password Generated";

}