/*** You will not need this file until Unit 5 ***/
/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");
// Step 2: Write the callback function
const toggleDarkMode = () => {
    // Write your code here
    document.body.classList.toggle("dark-mode");
    // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);


/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Query the button
const rsvpButton = document.getElementById("rsvp-button");
let count = 3;

// Step 2: Define the callback
const addParticipant = (person) => {
    // event.preventDefault();

    // const nameInput = document.getElementById("name").value;
    // const homeStateInput = document.getElementById("homestate").value;
    // const emailInput = document.getElementById("email").value;

    const newParticipant = document.createElement("p");
    newParticipant.textContent = `🎟️ ${person.name} from ${person.hometown} has RSVP'd.`;

    const oldCounter = document.getElementById("rsvp-count");
    if (oldCounter) {
        oldCounter.remove();
    }

    // INCREMENT the count
    count = count + 1;

    // CREATE a new count paragraph
    const newCounter = document.createElement("p");
    newCounter.id = "rsvp-count";
    newCounter.textContent = "⭐ " + count + " people have RSVP'd to this event!";

    const rsvpList = document.querySelector(".participants");
    rsvpList.appendChild(newParticipant);

    // Append new count to the participants section
    rsvpList.appendChild(newCounter);
    document.getElementById("rsvp-form").reset();
};

// Step 3: Attach the event listener
// rsvpButton.addEventListener("click", addParticipant);

/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = () => {
    let containsErrors = false;

    // Select all input elements in the form
    var rsvpInputs = document.getElementById("rsvp-form").elements;

    //create person object
    const person = {
        name: rsvpInputs[0].value, //name input
        hometown: rsvpInputs[1].value, //hometown input
        email: rsvpInputs[2].value, //rsvpInputs input
    }

    // Loop through all the inputs to validate them
    for (let i = 0; i < rsvpInputs.length; i++) {
        let input = rsvpInputs[i];

        // Check if the input length is less than 2 characters
        if (rsvpInputs[i].value.length < 2) {
            containsErrors = true;
            // Add the error class to indicate invalid input
            input.classList.add("error");
        } else {
            // Remove the error class if the input is valid
            input.classList.remove("error");
        }
    }

    let email = document.getElementById('email');
    if (!email.value.includes("@")) {
        containsErrors = true;
        email.classList.add('error');
    } else {
        email.classList.remove('error');
    }

    // If no errors, call addParticipant() and clear fields
    if (!containsErrors) {
        addParticipant(person);
        toggleModal(person);
        // Loop through inputs and clear the form
        for (let i = 0; i < rsvpInputs.length; i++) {
            rsvpInputs[i].value = "";
        }
    }

}



// Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpButton.addEventListener("click", validateForm);
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
    let modal = document.getElementById("success-modal");
    let modalContent = document.getElementById("modal-text");

    // TODO: Update modal display to flex
    modal.style.display = "flex";




    // TODO: Update modal text to personalized message
    modalContent.textContent = `Thanks for RSVPing, ${person.name}! We can't wait to see you at the event!`;

    // Start the image animation every 500 milliseconds
    let intervalId = setInterval(animateImage, 500);

    // Set modal timeout to 5 seconds
    setTimeout(() => {
        modal.style.display = "none";
        clearInterval(intervalId);
    }, 5000);


}

// TODO: animation variables and animateImage() function
let rotateFactor = 0;
let modalImage = document.querySelector("#success-modal img");

const animateImage = () => {
    if (rotateFactor === 0) {
        rotateFactor = -10;
    } else {
        rotateFactor = 0;
    }
    modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}

