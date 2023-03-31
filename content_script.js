document.querySelectorAll("a").forEach(function(el) {
  el.setAttribute("data-text", el.innerText);
});