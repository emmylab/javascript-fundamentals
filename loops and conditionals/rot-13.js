function rot13(str) {
    return str.replace(/[A-Z]/gi, (char) =>{
        let code = char.charCodeAt(0);
        let shift = code >= 65 && code <= 90 ? 65 : 97;
        return String.fromCharCode(((code - shift + 13) % 26) + shift);
    });
}


console.log(rot13("k"))