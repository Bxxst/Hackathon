var test;
if(test != null){
    localStorage.setItem("saveData", test);
saveData = localStorage.getItem("saveData");
console.log(saveData);
} else{
    console.log("zjeb");
}