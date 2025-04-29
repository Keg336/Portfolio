document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("main-header");
    let isShrunk = false; // Track the current state
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50 && !isShrunk) {
        header.classList.add("shrink");
        isShrunk = true;
      } else if (window.scrollY <= 50 && isShrunk) {
        header.classList.remove("shrink");
        isShrunk = false;
      }
    });
  });  