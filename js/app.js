$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      const hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

document.querySelector(".w").addEventListener("click",(e)=>{
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer .5s forwards";

    e.preventDefault();
});

document.querySelector(".e").addEventListener("click",(e)=>{
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer .5s forwards";

    e.preventDefault();
});
document.querySelector(".l").addEventListener("click",(e)=>{
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer .5s forwards";

    e.preventDefault();
});

document.querySelector(".close").addEventListener("click",()=>{
    let modal = document.querySelector(".modal-background");
    modal.style.display = "none";
});

