function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Hold fast to dreams, for if dreams die",
    autoStart: true,
    delay: 1.5,
    cursor: "",
  });
}

let form = document.getElementById("poem-generator-form");
form.addEventListener("submit", generatePoem);
