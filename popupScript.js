const enlarge = document.getElementById('enlarge')
const enlargeRange = document.getElementById('enlargeRange')
const rangeDiv = document.getElementById('rangeDiv')
const rangeResult = document.getElementById('rangeResult')

enlarge.addEventListener('change', function() {
    if (enlarge.checked) {
        rangeDiv.classList.remove('hide');
    } else {
        rangeDiv.classList.add('hide');
    }
})

enlargeRange.addEventListener('change', () => {
    var value = enlargeRange.value
    
    rangeResult.innerHTML = value + " px"
})

