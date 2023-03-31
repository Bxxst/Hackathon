const enlarge = document.getElementById('enlarge');
const enlargeRange = document.getElementById('enlargeRange');
const rangeDiv = document.getElementById('rangeDiv');
const rangeResult = document.getElementById('rangeResult');
//getting the values of the checkboxes
var size = "";
var sizetoggle = 0;
//0= off, 1= on

function check(){

    let size = localStorage.getItem("fontsize");
    let toggletest = localStorage.getItem("togglesizestorage");

    if (toggletest == "true") {
                document.getElementById("enlarge").checked = true;
                rangeDiv.classList.remove('hide');
                enlargeRange.value = size;
    }
     rangeResult.innerHTML = size + " px"
}
//checking the status of the inptuts from the website
enlarge.addEventListener('change', function() {
        localStorage.setItem("togglesizestorage", enlarge.checked);
        let toggletest = localStorage.getItem("togglesizestorage");
    if (enlarge.checked) {
        rangeDiv.classList.remove('hide');
    } else {
        rangeDiv.classList.add('hide');
    }
    if (toggletest == "true") {
document.getElementById("enlarge").checked = true;
    }
})
//Checking changes for the toggle

enlargeRange.addEventListener('change', () => {
  console.log("formsend is running. . .");
    localStorage.setItem("fontsize", enlargeRange.value);
    let size = localStorage.getItem("fontsize");
    rangeResult.innerHTML = size + " px"
        if (size == "")
            {
                console.log("Empty!");
            }
            else {
                console.log("The size is: " + size);
            }
})
//checking changes in the slider
