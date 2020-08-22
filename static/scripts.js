const ul = document.querySelectorAll("ul li");

let clear = document.getElementById("clear");

let equals = document.getElementById("equals");

// screen values
for (let i = 0; i < ul.length; i++) {
  ul[i].addEventListener("click", function () {
    screen.value = screen.value + this.value;
  });
}

// equal results
equal.addEventListener("click", function () {
  screen.value = eval(screen.value);
});

// clear field
clear.addEventListener("click", function () {
  screen.value = null;
});
