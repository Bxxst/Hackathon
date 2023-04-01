const enlarge = document.getElementById('enlarge');
const enlargeRange = document.getElementById('enlargeRange');
const rangeDiv = document.getElementById('rangeDiv');
const rangeResult = document.getElementById('rangeResult');
//getting the values of the checkboxes
var size = "";

document.addEventListener("DOMContentLoaded", function(){ check(); }, false);
function check(){  
    chrome.storage.local.get(["key"]).then((result) => {
  console.log("Toggle currently is " + result.key);
  console.log(result.key);
    if (result.key === true) {
            document.getElementById("enlarge").checked = true;
            rangeDiv.classList.remove('hide');

    }

});
        chrome.storage.local.get(["key2"]).then((result) => {
  console.log("Value currently is " + result.key2); 
       rangeResult.innerHTML = result.key2 + " px"
       document.getElementById("enlargeRange").defaultValue = result.key2; 
});
  
 chrome.storage.local.get(["key3"]).then((result) => {
  console.log("Toggle2 currently is " + result.key3);
    if (result.key3 === true) {
            document.getElementById("window2").checked = true;

    }
    });
}
//checking the status of the inptuts from the website

enlarge.addEventListener('change', function() {
var toggletest = enlarge.checked;
chrome.storage.local.set({ key: toggletest }).then(() => {
  console.log("Toggle is set to " + toggletest);
});

chrome.storage.local.get(["key"]).then((result) => {
  console.log("Toggle currently is " + result.key);
  let toggle1 = result.key;
});

    if (enlarge.checked) {
        rangeDiv.classList.remove('hide');
    } else {
        rangeDiv.classList.add('hide');
    }
    if (toggletest == "true") {
document.getElementById("enlarge").checked = true;
    }
    //my send
    let params = {
      active: true,
      currentWindow: true
    }
    chrome.tabs.query(params, getTabs);
    let test = enlargeRange.value;
    let msg = {
      txt: test
    }
    function getTabs(tabs){
      chrome.tabs.sendMessage(tabs[0].id, msg)
    }
})
//Checking changes for the toggle

enlargeRange.addEventListener('change', () => {
    size = enlargeRange.value;
    chrome.storage.local.set({ key2: size }).then(() => {
  console.log("Value is set to " + size);
  
});
    chrome.storage.local.get(["key2"]).then((result) => {
  console.log("Value currently is " + result.key2);
  let size1 = result.key2;
});
    rangeResult.innerHTML = size + " px"
        if (size == "")
            {
                console.log("Empty!");
            }
    
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {fontSize: size});
    });
  })

window2.addEventListener('change', () => {
    windowcheck = document.getElementById('window2').checked;
    console.log(windowcheck);
    chrome.storage.local.set({ key3: windowcheck }).then(() => {
  console.log("Value is set to " + windowcheck);
});
    chrome.storage.local.get(["key3"]).then((result) => {
  console.log("Value currently is " + result.key3);
  
  let toggle2 = result.key3;
});
    })