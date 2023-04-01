document.querySelectorAll("a").forEach(function(el) {
  el.setAttribute("data-text", el.innerText);
});
document.querySelectorAll("button").forEach(function(el) {
    el.setAttribute("data-text", el.innerText);
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