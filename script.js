
// --------------------------------------------------
// SCENES
// Read through the comments below to see what this section does
//
// TO CUSTOMIZE THIS SECTION
// 1) add fields for each scene, as relevant, to match your mockup
// 2) customize the scenes to fit your story
// 3) add any new fields to the function below
// --------------------------------------------------

// First, we create a variable for the current scene being displayed
let currentScene = "flowershop";

// Then, we create an object that stores the data for each scene,
const scenes = {
  // See "backyard" for the first example
  flowershop: {
    title: "Location: Flower shop",
    character: "Interviewee:Daisy",
    image: "https://media.istockphoto.com/id/134839570/vector/florist-girl.jpg?s=612x612&w=0&k=20&c=sJBm--ECTbBZ77MCo-SQHA8S6WSH4IjJN8eiv7my5zY=",
    text: "Text: Daisy is the owner of the flower shop. She is a kind and friendly person who loves to help her customers find the perfect flowers for any occasion. Her favorite flower is the rose, and she has a special talent for arranging them in beautiful bouquets. You ask what she was doing the night of the robbery and she responds with, well what I remember happening is that I got a call from the police at about 3:30 in the morning telling me that the store had been broken into. I immediately left the house and drove to the store. When I got there, I saw that the front door had been smashed in and the cash register was open. I called the police and they arrived shortly after. They took my statement and collected evidence from the scene. You ask about her relationships with her customers and she responds, I love all of my customers and I try to get to know them as best as I can. I want them to feel comfortable coming to me for their flower needs, and I want to make sure that they are happy with the arrangements that I create for them. I also like to get feedback from my customers so that I can improve my business and provide the best service possible.There are times when I don't get along well with some of them but that's not important... I just want to make sure that everyone is happy and satisfied with their experience at my flower shop. ",
    // you can choose how many choices to include
    // each choice can have text, an action, and/or nextScene
    choices: [
      {
        text: "You feel like you are goving up already (-10 HP)",
        action: function () {
          updateHealth(-10);
        },
        nextScene: "youGiveUp"
      },
      {
        text: "Talk to Petunia, a loyal costomer.",
        nextScene: "petunia"
      },
      {
          text: "Remember her favorite flower",
        action: function () {
          pickUpItem("roses");
        }
      },
      {
        text: "See the crime scene with the police officer",
        nextScene: "policeCrimeScene"
      }
    ]
  },
    
   policeCrimeScene: {
    title: "Crime Scene",
    character: "",
    text: "You are at the crime scene with the police officer. You can see the broken door and the cash register that was tampered with. There is a pearl necklace on the ground. Rose petals are scattered on the floor making a faint path to the broken window. You see a magnifying glass on the counter and security cameras in the corner. You ask the police if you have access to the cameras and he responds with yes. You go into the storage room and see footage of the night of the robbery. You hear a truck pull up to the scene and see a person in a black hoodie and black pants break the window, take the register, and drive away in a truck.",
    choices: [
      {
        text: "Pick up the magnifying glass.",
        action: function () {
          pickUpItem("magnifying glass");
        }
      },
      {text: "Talk to Petunia, a loyal customer.", nextScene: "petunia"},
      {
        text: "Guess who committed the crime",
        nextScene: "guessWho"
      }
    ]
  }, 

  petunia: {
    title: "Interviewee: Petunia",
    image: "https://media.istockphoto.com/id/134839570/vector/florist-girl.jpg?s=612x612&w=0&k=20&c=sJBm--ECTbBZ77MCo-SQHA8S6WSH4IjJN8eiv7my5zY=",
    Text : "Petunia is a regular customer at the flower shop. She is a sweet and caring person who loves to give flowers to her friends and family. Her favorite flower is the tulip, and she enjoys arranging them in creative ways. She is a mother of two young children and often buys flowers to brighten up her home. She never doesnt have flowers in her home, and she always makes sure to have a fresh bouquet on her dining table. She is also a member of the local gardening club and enjoys sharing tips and advice with other members. You ask Petunia what she was doing the night of the robbery and she responds with, I was at home with my family. We were having a quiet evening together when we heard a loud noise outside. I looked out the window and saw that the flower shop had been broken into. I immediately called the police and they arrived shortly after. They took my statement and collected evidence from the scene. You ask about her relationships with other customers and she responds, I love all of the customers and I try to get to know them as best as I can. However, it bothers me when I come in and all of my favoite flowers are sold out. Whenever I come into the shop in the afternoon there are never any red roses left! ",
      
   choices: [
      {
        text: " You are about to give up. This is too hard. (-10 HP)",
        action: function () {
          updateHealth(-10);
        },
        nextScene: "youGiveUp"
      },
      {
        text: "Talk to Jasmine, the delivery woman",
        nextScene: "jasmine"
      },
      {
          text: "talk to the police officer and see the crime scene",
          action: function () {
            pickUpItem("brass key");
          },
          nextScene: "policeCrimeScene"
      }
    ]
  },


  jasmine: {
    title: "Interviewee: Jasmine",
    Text: "Jasmine is the delivery woman for the flower shop. She is a hardworking and reliable person who ensures that all orders are delivered on time. She has a good relationship with the shop owner and often helps out with various tasks around the store. You ask Jasmine about the night of the robbery and she responds with, I was delivering flowers to a customer when I heard the commotion. I quickly made my way to the shop and saw that it had been broken into. I immediately called the police and they arrived shortly after. They took my statement and collected evidence from the scene. You ask about her relationships with other employees and she responds, I get along well with everyone at the shop. We work together seamlessly to ensure that all customers are satisfied.",
    choices: [
      {
        text: "go back to crime scene",
        nextScene: "policeCrimeScene"
      },
      {
        text: "Guess who commited the crime and solve the mystery",
        nextScene: "guessWho"
      }
    ]
  },

   guessWho: {
    title: "Guess Who Committed the Crime",
    text: "You have gathered enough evidence to make an educated guess about who committed the crime.",
    choices: [
      {
        text: "Accuse Daisy",
        nextScene: "solution"
      },
      {
        text: "Accuse Jasmine",
        nextScene: "solution"
      },
      {
        text: "Accuse Petunia",
        nextScene: "solution"
      }
    ]
  },

   policeCrimeScene: {
    title: "Crime Scene",
    character: "",
    text: "You are at the crime scene with the police officer. You can see the broken door and the cash register that was tampered with. There is a pearl necklace on the ground. Rose petals are scattered on the floor making a faint path to the broken window. You see a magnifying glass on the counter and security cameras in the corner. You ask the police if you have access to the cameras and he responds with yes. You go into the storage room and see footage of the night of the robbery. You hear a truck pull up to the scene and see a person in a black hoodie and black pants break the window, take the register, and drive away in a truck.",
    choices: [
      {
        text: "Pick up the magnifying glass.",
        action: function () {
          pickUpItem("magnifying glass");
        }
      },
      {
        text: "Guess who committed the crime",
        nextScene: "guessWho"
      }
    ]
  },

   solution: {
    title: "You are correct",
    text: "You solved the mystery!",
    
  }
};

// --------------------------------------------------
// UPDATE SCENES
// Read through the comments below to see what this section does
//
// TO CUSTOMIZE THIS SECTION
// 1) add a new const variable for each new field you added above
// Make sure to match the ids used in your mock up with the fields 
// 2) set the .textContent of each variable to the corresponding field in the scene object
// Use sceneTitle as a model
// --------------------------------------------------

// First, we create variables to hold the references to the HTML elements
// Technically you could just use document.getElementById('id-name') 
// in the function itself, but that would be very wordy 
// and make the code harder to read
const sceneTitle = document.getElementById("scene-title");
const sceneText = document.getElementById("scene-text");
const choicesContainer = document.getElementById("choices-container");
const characterName = document.getElementById("character-name");

// Then, we create a function to update the scene,
function updateScene(sceneName) {

  //This update the variable currentScene with the new scene passed as a parameter
  currentScene = sceneName;

  //This accesses the scene object based on the scene name
  const scene = scenes[sceneName];

  // Here, for each html element, you change the textContent to match
  // the appropriate text from the scene object
  sceneTitle.textContent = scene.title;
  sceneText.textContent = scene.text;
  characterName.textContent = scene.character;

  // Clear the old buttons before creating new ones
  choicesContainer.innerHTML = "";

  // Loop through each choice in the scene, connecting an action and nextScene if included
  scene.choices.forEach(function (choice) {
    const button = document.createElement("button");

    button.textContent = choice.text;

    button.addEventListener("click", function () {
      if (choice.action) {
        choice.action();
      }

      if (choice.nextScene) {
        updateScene(choice.nextScene);
      }
    });

    choicesContainer.appendChild(button);
  });
}

// This updates the screen with the current scene
updateScene(currentScene);


// --------------------------------------------------
// HEALTH
// Read through the comments below to see what this section does
//
// TO CUSTOMIZE THIS SECTION
// Either customize the name from health to steps, stress, etc...
// OR
// create a copy of each step for each additional state you want to track throughout the game
// --------------------------------------------------

// Create a variable for health
let health = 100;

// Display current health
const healthDisplay = document.getElementById("health-display");

// Create a function to update health 
function updateHealth(amount) {
  health += amount;
  healthDisplay.textContent = health;
}

// This refreshes the health display
updateHealth(0);

// --------------------------------------------------
// INVENTORY
// Read through the comments below to see what this section does
//
// For now, you are probably leaving this section as is. 
// --------------------------------------------------

// Create a variable for inventory
let inventory = [];

// Display current inventory
const inventoryDisplay = document.querySelector("#inventory-display");
const messageDisplay = document.getElementById("message-display");

// Create a function to update inventory 
function pickUpItem(itemName) {
    // Add itemName to the inventory array
    // Show the updated inventory on the page
  inventory.push(itemName);
  inventoryDisplay.textContent = inventory.join(", ");
}

// --------------------------------------------------
// CONDITIONAL 
// Depending on how you want to implement the conditional logic, you may 
// simply adjust the names below or you may need to expand upon this section
// --------------------------------------------------

// Create a function that checks if the inventory contains one item and if so shows the win condition scene.
function unlockDoor() {
  if (inventory.includes("brass key")) {
    updateScene("solution");
  } else {
    messageDisplay.textContent = "The door is locked.";
  }
}

