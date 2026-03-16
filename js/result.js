const params = new URLSearchParams(window.location.search);

const char1 = params.get("char1");
const char2 = params.get("char2");

document.getElementById("pair").textContent =
char1 + " × " + char2;

document.getElementById("text").textContent =
"ここに関係性テキストが入ります";