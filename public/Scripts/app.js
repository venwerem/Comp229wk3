// IIFE -- immediately invoked function expression
(function(){

    function Start()
    {
        console.log("App started..");
    }

    window.addEventListener("load",Start);
})();
const texts = ["Web Developer", "UI/UX Designer", "Software Developer"];

function typeText() 
{
    let i = 0;
    let j = 0;
    let currentText = "";
    let isDeleting = false;
    const typingText = document.getElementById("typing-text");
  
    function type() {
    currentText = texts[i].substring(0, j);
    typingText.innerHTML = currentText;
    if (isDeleting) 
    {
     j--;
    } 
    else 
    {
     j++;
    }
  
    if (j === texts[i].length + 1)
 {
        isDeleting = true;
        setTimeout(function() {
          type();
        }, 1000);
      } else if (j === 0) {
        isDeleting = false;
        i = (i + 1) % texts.length;
        setTimeout(function() {
          type();
        }, 500);
      } else {
        setTimeout(function() {
          type();
        }, 100);
      }
    }
  
    type();
 }

  typeText();