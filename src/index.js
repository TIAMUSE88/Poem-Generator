function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1.5,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-input");
  let apiKey = "9387af763ce4b20bcfo1t37b0bacd41e";
  let prompt = `Users instructions: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a poet who writes beautiful, romantic and inspiring poems. Ensure to create a short 4 line poem and separate each line with a <br> tag. Make sure to follow all of the users instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${encodeURIComponent(apiKey)}`;

  console.log("Generating poem❤️...");
  console.log("Prompt: " + prompt);
  console.log("Context: " + context);

  axios
    .get(apiUrl)
    .then(displayPoem)
    .catch((error) => {
      console.error("Error fetching poem:", error);
      alert(
        "There was a problem generating the poem. Check console for details.",
      );
    });
}

let form = document.getElementById("poem-generator-form");
form.addEventListener("submit", generatePoem);
