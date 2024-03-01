function validatePassword(password1, password2){
    if (password1 !== password2){
        return false;
    }

    if(password1.length < 8){
        return false;
    }

    for (let char of password1) {
        if (char >= '0' && char <= '9') {
            Digit = true;
        } else if (char >= 'a' && char <= 'z') {
            LowerCase = true;
        } else if (char >= 'A' && char <= 'Z') {
            UpperCase = true;
        }
    }

    if (!Digit || !LowerCase || !UpperCase) {
        return false;
    }

    return true; 
}

function reversedPassword(password1) {
    let reversePassword = "";
    for (let i = password1.length - 1; i >= 0; i--) {
        reversePassword += password1[i];
    }
    return reversePassword;
}

function storePassword(name, password1, password2) {
    if (validatePassword(password1, password2)) {
        const newpassword = reversedPassword(password1);
        return { name, newpassword };
    } else {
        return { name, newpassword: password1 };
    }
}

console.log(validatePassword("helloworld", "hello"));
console.log(validatePassword("Helloworld1234", "Helloworld1234"));

console.log(storePassword("John", "Pass1234", "Pass1234"));     // { name: "John", newpassword: "4321ssaP" }
console.log(storePassword("John", "Pass123", "Pass12345"));     // { name: "John", newpassword: "Pass123" }
