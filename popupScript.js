const enlarge = document.getElementById('enlarge');
const enlargeRange = document.getElementById('enlargeRange');
const rangeDiv = document.getElementById('rangeDiv');
const rangeResult = document.getElementById('rangeResult');

// Get a reference to the close button element
document.getElementById('closeButton').addEventListener("click",closePopup);
function closePopup() {
  window.close();
}



//getting the values of the checkboxes
var size = "";

document.addEventListener("DOMContentLoaded", function(){ check(); }, false);

function check(){
  var savedData = localStorage.getItem('savedData');
  console.log(savedData);
  size = savedData;
  sizeMessage();
  chrome.storage.local.get(["key"]).then((result) => {
    if (result.key === true) {
      document.getElementById("enlarge").checked = true;
      rangeDiv.classList.remove('hide');
    }
  });
  chrome.storage.local.get(["key2"]).then((result) => {
      rangeResult.innerHTML = savedData + " px"
      document.getElementById("enlargeRange").defaultValue = savedData; 
  });
  chrome.storage.local.get(["key3"]).then((result) => {
  if (result.key3 === true) {
      document.getElementById("window2").checked = true;
    }
  });
}
enlargeRange.addEventListener('change', sizeMessage)
//checking the status of the inptuts from the website
enlarge.addEventListener('change', function() {
  var toggletest = enlarge.checked;
  chrome.storage.local.set({ key: toggletest })
  chrome.storage.local.get(["key"])
  if (enlarge.checked) {
    sizeMessage();
    rangeDiv.classList.remove('hide');
  } else {
    rangeDiv.classList.add('hide');
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {unchecked: true});
    });
  }
  if (toggletest) {
    document.getElementById("enlarge").checked = true;
    sizeMessage();
  }
  // else{
    
  // }
  localStorage.getItem('savedData')
});

function sizeMessage(){
  size = enlargeRange.value;
  chrome.storage.local.set({ key2: size })
  chrome.storage.local.get(["key2"])
  rangeResult.innerHTML = size + " px"
  
  savedData = localStorage.setItem('savedData', size);
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {fontSize: localStorage.savedData});
  });
}

// Checking changes for the toggle

window2.addEventListener('change', function() {
  windowcheck = document.getElementById('window2').checked;
  chrome.storage.local.set({ key3: windowcheck })
  chrome.storage.local.get(["key3"])
  if(windowcheck){
    // document.getElementById("window2").checked = true;
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {hoverChecked: true});
    });
  }
  else{
    // document.getElementById("window2").checked = false;
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {hoverChecked: false});
    });
  }
});
