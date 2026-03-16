let selected = [];

const chars = document.querySelectorAll(".char");

chars.forEach(char => {
  char.addEventListener("click", () => {
    

    const name = char.dataset.name;

    if (selected.includes(name)) {
      selected = selected.filter(n => n !== name);
      char.classList.remove("selected");
    } 
    else if (selected.length < 2) {
      selected.push(name);
      char.classList.add("selected");
    }

  });
});

document.getElementById("decide").addEventListener("click", () => {

  if (selected.length !== 2) {
    alert("2人選んでください");
    return;
  }

  console.log(selected);

  const url =
    "result.html?char1=" +
    selected[0] +
    "&char2=" +
    selected[1];

  window.location.href = url;

});

