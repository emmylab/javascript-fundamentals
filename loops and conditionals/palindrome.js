const word = "palindrome"

const flip = word.split("").reverse().join()
if (word === flip){
console.log("it's a palindrome")
}else {
    console.log("Not a palindrome")
}