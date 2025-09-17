// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // 1.SELECTING ELEMENT (DOM)
    // Get a reference to the element we need to interact with
    const mainHeading = document.getElementById('main-heading');
    const changeButton = document.getElementById('change-btn');
    const textInput = document.getElementById('text-input');
    const displayText = document.getElementById('display-text');

    // 2. ADDING AN EVENT LISTNER (Events)
    // Attach a 'click' event listner to the button
    changeButton.addEventListener('click', () => {
        // 3. MANIPULATING THE DOM in reponse to the event
        // Change the text content of the heading
        mainHeading.textContent = "The DOM has been changed! ";

        // Change the style of the heading
        mainHeading.style.backgroundColor = '#28a745';
        mainHeading.stylle.color = 'white';
        mainHeading.stylle.padding = '10px'
        mainHeading.style.borderRadius = '5px;';
    }); 
        // 4. ANDTHER EVENT LISTNER
        // Attach an 'input' event listner to the text field for real-time updates
        textInput.addEventListener('input', () =>  {
            // Update the text of the paragraph with the current value of the input
            displayText.textContent = textInput.value;
        }); 

});