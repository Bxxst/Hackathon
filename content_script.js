chrome.runtime.onChange.addListener(getMessage);

function getMessage(message, sender, sendRangeVal){
  console.log(message);
  document.querySelector(':root').style.setProperty('--size', message+"px")
}

// Use the variables here



chrome.storage.local.get(["key"]).then((result) => {

});

// chrome.storage.local.get(["key2"]).then((result) => {
//   size1= result.key2;
// });
// chrome.storage.local.get(["key3"]).then((result) => {
//   toggle2 = result.key3;
// });


if(toggle1){
  document.querySelector(':root').style.setProperty('--size', size1+"px")
}
if(toggle2){
  document.querySelectorAll("a").forEach(function(el) {
    el.setAttribute("data-text", el.innerText);
<<<<<<< HEAD
    el.classList.add("marked")
  });
  document.querySelectorAll("button").forEach(function(el) {
      el.setAttribute("data-text", el.innerText);
      el.classList.add("marked")
  });
  document.querySelectorAll("input[type=submit]").forEach(function(el) {
      el.setAttribute("data-text", el.innerText);
      el.classList.add("marked")
  });
}

=======
});
document.querySelectorAll("input[type=submit]").forEach(function(el) {
    el.setAttribute("data-text", el.innerText);
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.fontSize) {
    const fontSize = `${message.fontSize}px`;
    document.querySelector(':root').style.setProperty('--size', fontSize)
  }
});
>>>>>>> 92261114d577a11a3c472c664e112a0f7e1a005b
