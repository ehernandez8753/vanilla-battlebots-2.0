//CONSOLE LOG AT START OF ALL NECESSARY FILES/COMPONENTS/FUNCTIONS TO MAKE SURE EXPECTED EVENTS ARE ACTUALLY OCCURRING
console.log("script connected");

//MAY USE FOR ARENA FUNCTIONALITY
// const bots = [];

//THIS ADDS AN ONSUBMIT EVENT TO OUR HTML FORM SO THAT WE CAN FIRE THE CREATE BOT FUNCTION
const botForm = document.getElementById("bot-form");
botForm.addEventListener("submit", e => {
  e.preventDefault();
  createBot();
});

function createBot(e) {
  console.log("hit createBot function");

  let name = document.getElementById("name-input").value;
  let attack = document.getElementById("attack-input").value;
  let hp = document.getElementById("hp-input").value;

  if (name === "" || attack === "" || hp === "") {
    alert(
      "Unable to build bot. Our builders need more information! Please double check that you have entered your information correctly."
    );
  } else {
    //THIS CREATES A DIV FOR THE BOT THAT WE WILL ADD TO THE DISPLAY SECTION
    let div = document.createElement("div");

    //THIS ETS CLASSNAME SO STYLING APPLIES
    div.className = "bot";

    //THIS GENERATES THE INNER HTML OF THE DIV WE CREATED
    div.innerHTML = `<h2> ${name}</h2>
    <p id="attack">Attack: ${attack}</p>
    <p id="hp">HP: ${hp}</p>
    <button id="delete-btn">Destroy Bot</button>`;

    //THIS CREATES AN ONCLICK EVENT FOR THE BUTTON ON THE DIV WE CREATED IN ORDER TO FIRE THE REMOVE BOT FUNCTION
    div.lastChild.addEventListener("click", removeBot);

    ///MAY USE FOR ARENA FUNCTIONALITY
    // let newBot = {
    //   name,
    //   attack,
    //   hp
    // };
    // bots.push(newBot);

    //THIS SELECTS THE .BOT-DISPLAY SECTION AND ADDS THE DIV WE JUST CREATED TO THE .BOTS-DISPLAY SECTION
    let botDisplay = document.querySelector(".bot-display");
    botDisplay.appendChild(div);

    // THIS CLEARS THE INPUT FIELDS OF THE BOT BUILDER FORM AFTER CREATING THE BOT
    document.getElementById("name-input").value = "";
    document.getElementById("attack-input").value = "";
    document.getElementById("hp-input").value = "";
  }
}

// THIS DELETES BOTS FROM PAGE
function removeBot(e) {
  console.log("hit removeBot function");
  if (e.target.id === "delete-btn") {
    if (confirm("Are you sure you want to obliterate your bot?")) {
      e.target.parentElement.remove();
    }
  }
}
