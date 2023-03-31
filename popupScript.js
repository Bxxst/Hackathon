const enlarge = document.getElementById('enlarge');
const enlargeRange = document.getElementById('enlargeRange');
const rangeDiv = document.getElementById('rangeDiv');
const rangeResult = document.getElementById('rangeResult');
var size = "";
function check(){
    let size = localStorage.getItem("fontsize");
            console.log("Checkform is running. . .")
            if (size == "")
            {
                formsend();
            }
            else
            {
                console.log("The size is: " + size);
            }
        }
enlarge.addEventListener('change', function() {
    if (enlarge.checked) {
        rangeDiv.classList.remove('hide');
    } else {
        rangeDiv.classList.add('hide');
    }
})
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
