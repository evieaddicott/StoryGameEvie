// --------------------------------------------------
// SCENES
// --------------------------------------------------

let currentScene = "flowershop";

const scenes = {

    flowershop: {
        title: "Location: Flower Shop",
        character: "Interviewee: Daisy",
        text: "Daisy is the owner of the flower shop. She is a kind and friendly person who loves helping customers find the perfect flowers. Her favorite flower is the rose. You ask what she was doing the night of the robbery. She responds, 'I got a call from the police at about 3:30 in the morning telling me the store had been broken into. I immediately left my house and drove to the store. When I arrived, the front door had been smashed in and the cash register was open.' You ask about her relationships with customers. She says, 'I love all of my customers and try to get to know them. I want everyone to be happy with their experience. There are times when I don't get along with some of them, but that's not important.'",

        choices: [
            {
                text: "You feel like giving up already (-10 HP)",
                action: function () {
                    updateHealth(-10);
                },
                nextScene: "youGiveUp"
            },
            {
                text: "Talk to Petunia, a loyal customer",
                nextScene: "petunia"
            },
            {
                text: "Remember her favorite flower",
                action: function () {
                    pickUpItem("roses");
                }
            },
            {
                text: "Visit the crime scene",
                nextScene: "policeCrimeScene"
            }
        ]
    },

    petunia: {
        title: "Interviewee: Petunia",
        character: "Petunia",
        text: "Petunia is a regular customer at the flower shop. She is a sweet and caring person who loves giving flowers to her friends and family. Her favorite flower is the tulip. She is a mother of two young children and is also a member of the local gardening club. You ask Petunia what she was doing the night of the robbery. She responds, 'I was at home with my family. We were having a quiet evening when we heard a loud noise outside. I looked out the window and saw that the flower shop had been broken into. I immediately called the police.' You ask about her relationships with other customers. She responds, 'I love all the customers, but it bothers me when my favorite flowers are sold out. Whenever I come into the shop in the afternoon, there are never any red roses left!'",

        choices: [
            {
                text: "You are about to give up. This is too hard (-10 HP)",
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
                text: "Visit the crime scene",
                nextScene: "policeCrimeScene"
            }
        ]
    },

    jasmine: {
        title: "Interviewee: Jasmine",
        character: "Jasmine",
        text: "Jasmine is the delivery woman for the flower shop. She is hardworking and reliable. You ask Jasmine about the night of the robbery. She responds, 'I was delivering flowers to a customer when I heard the commotion. I quickly made my way to the shop and saw that it had been broken into. I immediately called the police.' You ask about her relationships with other employees. She responds, 'I get along well with everyone at the shop. We work together seamlessly to make sure all customers are satisfied.'",

        choices: [
            {
                text: "Go back to the crime scene",
                nextScene: "policeCrimeScene"
            },
            {
                text: "Guess who committed the crime",
                nextScene: "guessWho"
            }
        ]
    },

    policeCrimeScene: {
        title: "Crime Scene",
        character: "Police Officer",
        text: "You are at the crime scene with the police officer. You can see the broken door and the cash register that was tampered with. There is a pearl necklace on the ground. Rose petals are scattered across the floor, making a faint path to the broken window. You see a magnifying glass on the counter and security cameras in the corner. You ask the police officer if you can access the cameras. He says yes. You watch footage from the night of the robbery. You see a truck pull up to the scene and a person in a black hoodie and black pants break the window, take the register, and drive away.",

        choices: [
            {
                text: "Pick up the magnifying glass",
                action: function () {
                    pickUpItem("magnifying glass");
                }
            },
            {
                text: "Pick up the brass key",
                action: function () {
                    pickUpItem("brass key");
                }
            },
            {
                text: "Talk to Petunia",
                nextScene: "petunia"
            },
            {
                text: "Talk to Jasmine",
                nextScene: "jasmine"
            },
            {
                text: "Guess who committed the crime",
                nextScene: "guessWho"
            }
        ]
    },

    guessWho: {
        title: "Guess Who Committed the Crime",
        character: "Detective",
        text: "You have gathered enough evidence to make an educated guess. Who do you think committed the robbery?",

        choices: [
            {
                text: "Accuse Daisy",
                nextScene: "solution"
            },
            {
                text: "Accuse Jasmine",
                nextScene: "wrongGuess"
            },
            {
                text: "Accuse Petunia",
                nextScene: "wrongGuess"
            }
        ]
    },

    wrongGuess: {
        title: "Incorrect!",
        character: "Detective",
        text: "You accused the wrong person! You need to look more carefully at the evidence.",

        choices: [
            {
                text: "Try again",
                nextScene: "guessWho"
            },
            {
                text: "Go investigate again",
                nextScene: "policeCrimeScene"
            }
        ]
    },

    youGiveUp: {
        title: "You Give Up",
        character: "",
        text: "You are getting frustrated and decide to give up on the investigation. Maybe you should take another look at the evidence.",

        choices: [
            {
                text: "Try again",
                nextScene: "flowershop"
            }
        ]
    },

    solution: {
        title: "You Solved the Mystery!",
        character: "Detective",
        text: "Congratulations! You solved the flower shop robbery. Daisy was responsible for the crime. You successfully used the evidence and interviews to solve the mystery!"
    }
};


// --------------------------------------------------
// UPDATE SCENES
// --------------------------------------------------

const sceneTitle = document.getElementById("scene-title");
const sceneText = document.getElementById("scene-text");
const choicesContainer = document.getElementById("choices-container");
const characterName = document.getElementById("character-name");

function updateScene(sceneName) {

    currentScene = sceneName;

    const scene = scenes[sceneName];

    sceneTitle.textContent = scene.title;
    sceneText.textContent = scene.text;
    characterName.textContent = scene.character || "";

    choicesContainer.innerHTML = "";

    if (scene.choices) {

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

}

// Display the starting scene
updateScene(currentScene);


// --------------------------------------------------
// HEALTH
// --------------------------------------------------

let health = 100;

const healthDisplay = document.getElementById("health-display");

function updateHealth(amount) {

    health += amount;

    if (health < 0) {
        health = 0;
    }

    healthDisplay.textContent = health;

    if (health === 0) {
        updateScene("youGiveUp");
    }

}

// Display starting health
updateHealth(0);


// --------------------------------------------------
// INVENTORY
// --------------------------------------------------

let inventory = [];

const inventoryDisplay = document.querySelector("#inventory-display");
const messageDisplay = document.getElementById("message-display");

function pickUpItem(itemName) {

    if (!inventory.includes(itemName)) {

        inventory.push(itemName);

        inventoryDisplay.textContent = inventory.join(", ");

        messageDisplay.textContent = "You picked up: " + itemName;

    } else {

        messageDisplay.textContent = "You already have this item.";

    }

}


// --------------------------------------------------
// CONDITIONAL
// --------------------------------------------------

function unlockDoor() {

    if (inventory.includes("brass key")) {

        updateScene("solution");

    } else {

        messageDisplay.textContent = "The door is locked.";

    }

}