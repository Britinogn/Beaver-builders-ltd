// function myFunction(x) {
//     x.classList.toggle("change");
//   }


//   nav

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector('[data-menu-toggle-btn]');

menuToggleBtn.addEventListener("click", function () {
    navbar.classList.toggle("change");
    this.classList.toggle("change");

  });

  for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", function () {
      navbar.classList.toggle("change");
      menuToggleBtn.classList.toggle("change");
    });
  }


  // header

  const header = document.querySelector("[data-header]");

  window.addEventListener("scroll", function(){
    if(window.scrollY >=100){
      header.classList.add("active");
    }
    else{
      header.classList.remove("active");
    }
  });