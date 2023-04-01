let savedData = window.localStorage.getItem("savedData");
let data = JSON.parse(savedData);
document.querySelectorAll("a").forEach(function(el) {
  el.setAttribute("data-text", el.innerText);
  el.classList.add("marked");
  })

console.log(data)
if(data !== null){
  if(data.toggle1){
    document.querySelectorAll("*").forEach(el=>{
      el.classList.remove("resised")
    })
    document.querySelector(':root').style.setProperty('--size', "16px")
  }
    const fontSize = `${data.size}px`;
    document.querySelector(':root').style.setProperty('--size', fontSize)
    document.querySelectorAll("*").forEach(el=>{
      el.classList.add("resised")
    })
    if(data.toggle2){
      document.querySelectorAll("a").forEach(function(el) {
        el.setAttribute("data-text", el.textContent.slice(0, 30)+"...");
        el.classList.add("marked");
        })
    }
    else{
      document.querySelectorAll("a").forEach(function(el) {
        el.removeAttribute("data-text");
        el.classList.remove("marked");
      })
    }
}





chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message)
  let Saved = {
    size : message.fontSize,
    toggle1 : message.unchecked,
    toggle2:  message.hoverChecked
  }
  window.localStorage.setItem("Saved", JSON.stringify(Saved));


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
  if(message.hoverChecked){
    document.querySelectorAll("a").forEach(function(el) {
      el.setAttribute("data-text", el.innerText);
      el.classList.add("marked");
      })
  }
  else{
    document.querySelectorAll("a").forEach(function(el) {
      el.removeAttribute("data-text");
      el.classList.remove("marked");
    })
  }
})
