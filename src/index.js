function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: [
      "Roses are red, violets are blue, this poem is generated just for you.",
    ],
    autoStart: true,
    delay: 1.5,
    cursor: "",
  });
}

let form = document.getElementById("poem-generator-form");
form.addEventListener("submit", generatePoem);
