document.querySelectorAll("a").forEach(function(el) {
  el.setAttribute("data-text", el.innerText);
});
document.querySelectorAll("button").forEach(function(el) {
    el.setAttribute("data-text", el.innerText);
});
document.querySelectorAll("input[type=submit]").forEach(function(el) {
    el.setAttribute("data-text", el.innerText);
});