

// document.querySelectorAll("a").forEach(function(el) {
//   el.setAttribute("data-text", el.innerText);
// });
// document.querySelectorAll("button").forEach(function(el) {
//     el.setAttribute("data-text", el.innerText);
// });
// document.querySelectorAll("input[type=submit]").forEach(function(el) {
//     el.setAttribute("data-text", el.innerText);
// });

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message.fontSize)
  if(message.unchecked){
    document.querySelectorAll("*").forEach(el=>{
      el.classList.remove("resised")
    })
    document.querySelector(':root').style.setProperty('--size', "16px")
  }
  if (message.fontSize) {
    const fontSize = `${message.fontSize}px`;
    document.querySelector(':root').style.setProperty('--size', fontSize)
    document.querySelectorAll("*").forEach(el=>{
      el.classList.add("resised")
    })
  }
  
 
});
