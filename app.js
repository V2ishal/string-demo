let str="rahul";
let reverse=str.split("").reverse().join("");
if(str===reverse){
    console.log("string is palindrome");
}
else{
    console.log("string is not a palindrome");
}