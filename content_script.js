let savedData = window.localStorage.getItem("Saved");
let data = JSON.parse(savedData);
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
}





chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message.fontSize)
  let Saved = {
    size : message.fontSize,
    toggle1 : message.unchecked,
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
});

