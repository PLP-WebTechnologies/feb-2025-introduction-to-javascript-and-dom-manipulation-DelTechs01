// This is a simple JavaScript file to demonstrate DOM manipulation
function changeText() {
    document.getElementById("main-title").textContent = "Text Changed with JavaScript!";
  }
  
  //Changing the style of the body and the main title
  function changeStyle() {
    document.body.style.backgroundColor = "#f0f8ff";
    document.getElementById("main-title").style.color = "darkblue";
  }
  
  // Adding and removing elements dynamically
  function addElement() {
    const newElement = document.createElement("p");
    newElement.id = "new-para";
    newElement.textContent = "This paragraph was added dynamically using JS.";
    document.body.appendChild(newElement);
  }
  

    // Removing an element dynamically
  function removeElement() {
    const element = document.getElementById("new-para");
    if (element) {
      element.remove();
    }
  }
  