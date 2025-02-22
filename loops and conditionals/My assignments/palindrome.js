word = "PARALELOGRAM"


let revert = (word.split("").reverse().join(""))
if (word === revert){
    console.log("it is a palindrome")
}else{
    console.log("Not a palindrome")
}