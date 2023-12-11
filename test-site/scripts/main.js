
const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/godiak-logo.jpg") {
    myImage.setAttribute("src", "images/godiak2.png");
  } else {
    myImage.setAttribute("src", "images/godiak-logo.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName){
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Godiak welcomes you, ${myName}`;
    }
  }
  
  myButton.onclick = () => {
    setUserName();
  };
  