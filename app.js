let botNameInput = document.getElementById("name-input");
let botAtkPwrInput = document.getElementById("attack-input");
let botHealthInput = document.getElementById("hp-input");
let buildBotButton = document.querySelector("button");
let botDisplay = document.querySelector(".bot-display");

let botName;
let botAtkPower;
let botHp;


buildBotButton.addEventListener("click", function(event){
  event.preventDefault();

  botName = botNameInput.value;
  botAtkPower = botAtkPwrInput.value;
  botHp = botHealthInput.value;

  if(botNameInput.value !== "" && botAtkPower != null && botHp != null){
    buildBot(botName, botAtkPower, botHp);
  }else{
    
    alert(`Unable to build bot. Our builders need more information! Please double check that you have entered your information correctly.`);
  }

});


function buildBot(name, attackPower, healthP){
 
  let newBot = document.createElement("div");
  newBot.classList.add("bot");
  botDisplay.appendChild(newBot);

  let botNameH2 = document.createElement("h2");
  newBot.appendChild(botNameH2);
  botNameH2.innerText = name;

  let attackP = document.createElement("p");
  attackP.id = "attack";
  newBot.appendChild(attackP);
  attackP.innerText = `Attack: ${attackPower}`;

  let hp = document.createElement("p");
  hp.id = "hp";
  newBot.appendChild(hp);
  hp.innerText = `Health: ${healthP}`;

  let destroyButton = document.createElement("button");
  //destroyButton.classList.add("bot");
  newBot.appendChild(destroyButton);
  destroyButton.innerText = "DESTROY BOT";
  destroyButton.addEventListener("click", function(event){
    event.preventDefault();
    destroyBot(newBot);
  });

  botNameInput.value = "";
  botAtkPwrInput.value = null;
  botHealthInput.value = null;
}

function destroyBot(bot){
  if(confirm("Are you sure you want to obliterate your bot?")) bot.remove(); 
}