AOS.init({
  duration: 1000
});

// Header Dropdowns
function flag_myFunction() {
  document.getElementById("flag_Dropdown").classList.toggle("show");
}

// Close dropdown 
window.onclick = function(event) {
  if (!event.target.matches('.flag_dropbtn') && !event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("flagdrop-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }

    var languageDropdowns = document.getElementsByClassName("dropdown-content");
    for (i = 0; i < languageDropdowns.length; i++) {
      var openLanguageDropdown = languageDropdowns[i];
      if (openLanguageDropdown.classList.contains('show')) {
        openLanguageDropdown.classList.remove('show');
      }
    }
  }
}


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("#nav-links ul li a");

  navLinks.forEach(link => {
      link.addEventListener("click", function () {
        
          navLinks.forEach(item => item.classList.remove("active"));

          this.classList.add("active");
      });
  });
});



// Hamburger
document.addEventListener("DOMContentLoaded", function () {
const hamburger = document.getElementById("hamburger-icon");
const hamLinks = document.querySelector(".ham-links");
const closeIcon = document.querySelector(".ham-links .fa-xmark");
const dropdownLinks = document.querySelectorAll(".ham-links ul > li > a");


hamburger.addEventListener("click", function () {
    hamLinks.classList.add("active");
});

closeIcon.addEventListener("click", function () {
    hamLinks.classList.remove("active");
});

dropdownLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        const parentLi = this.parentElement;
        const subMenu = parentLi.querySelector("ul");

        if (subMenu) {
            e.preventDefault();
            subMenu.style.display = subMenu.style.display === "block" ? "none" : "block";
            parentLi.classList.toggle("active");
        }
    });
});
});


// Swiper  for hero section
var swiper = new Swiper(".mySwiper", {
spaceBetween: 30,
effect: "fade",
loop: true,

navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
on: {
  slideChangeTransitionStart: function () {
    let activeSlide = document.querySelector(".swiper-slide-active");
    activeSlide.classList.add("light-flash");
    setTimeout(() => {
      activeSlide.classList.remove("light-flash");
    }, 300);
  },
},
});









// owlCarousel

$(document).ready(function() {
  // First Carousel
  $(".first-carousel").owlCarousel({
      items: 5,           
      loop: true,         
      margin: 10,         
      nav: false,        
      dots: true,
      navText: [
          "<div>&#8592;</div>", 
          "<div>&#8594;</div>" 
      ],
      responsive: {
          0: {
              items: 1           
          },
          600: {
              items: 1         
          },
          1000: {
              items: 1         
          }
      }
  });

  // Second Carousel
  $(".second-carousel").owlCarousel({
      items: 10,           
      // loop: true,         
      margin: 20,         
      nav: true,       
      dots: true, 
      navText: [
        "<div><i class='fa-solid fa-chevron-left'></i></div>", 
        "<div><i class='fa-solid fa-chevron-right'></i></div>", 
    ],
    
      responsive: {
          0: {
              items: 2       
          },
          600: {
              items: 3         
          },
          1000: {
              items: 3          
          },
          1200:{
              items: 5
          }
      }
  });

  $(".third-carousel").owlCarousel({
    items: 5,
    loop: true,
    dots: true,
    margin: 20,
    nav: false,
    // autoplay: true,
    navText: [
        "<div>&#8592;</div>", 
        "<div>&#8594;</div>"
    ],
    responsive: {
        0: { items: 1 },    
        600: { items: 1.3 }, 
        1024: { items: 1.3 }, 
        1025: { items: 2 }   
    }
});



$(".fourth-carousel").owlCarousel({
  items: 5,
  loop: true,
  dots: true,
  margin: 20,
  nav: false,
  // autoplay: true,
  navText: [
      "<div>&#8592;</div>", 
      "<div>&#8594;</div>"
  ],
  responsive: {
      0: { items: 2 },
      600: { items: 3 }, 
   
      1025: { items: 3 } ,  
      1200: { items: 5 }   
  }
});


$(".fifth-carousel").owlCarousel({
  items: 5,
  loop: true,
  dots: true,
  margin: 20,
  nav: false,
  // autoplay: true,
  navText: [
      "<div>&#8592;</div>", 
      "<div>&#8594;</div>"
  ],
  responsive: {
      0: { items: 1 },    
      
      768: { items: 2},
      1025: { items: 3 } ,  
      1200: { items: 5 }   
  }
});


$(".sixth-carousel").owlCarousel({
  items: 5,
  loop: true,
  dots: true,
  margin: 20,
  nav: false,
  // autoplay: true,
  navText: [
      "<div>&#8592;</div>", 
      "<div>&#8594;</div>"
  ],
  responsive: {
      0: { items: 1 },
      
      768: { items: 3},
      1025: { items: 3 } ,  
      1200: { items: 5 }   
  }
});

});



// Product catalog
document.querySelector(".card").addEventListener("mouseenter", function() {
this.style.transition = "background 0.5s ease-in-out";
});

document.querySelector(".card").addEventListener("mouseleave", function() {
this.style.transition = "background 0.5s ease-in-out";
});



/* Product catalog with buttons  */
function openTab(event, tabId) {

let tabContents = document.querySelectorAll(".tab-content");
tabContents.forEach(tab => tab.classList.remove("active"));


let buttons = document.querySelectorAll(".tab-btn");
buttons.forEach(btn => btn.classList.remove("active"));


document.getElementById(tabId).classList.add("active");


event.currentTarget.classList.add("active");
}

// By default, open the first tab
document.addEventListener("DOMContentLoaded", () => {
document.querySelector(".tab-btn").click();
});



// Countdown
function startCountdown(duration) {
let timer = duration;

function updateCountdown() {
    let days = Math.floor(timer / (24 * 60 * 60));
    let hours = Math.floor((timer % (24 * 60 * 60)) / (60 * 60));
    let minutes = Math.floor((timer % (60 * 60)) / 60);
    let seconds = timer % 60;

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (timer > 0) {
        timer--;
        setTimeout(updateCountdown, 1000);
    } else {
        document.getElementById("countdown").innerHTML = "<h2>Time's up!</h2>";
    }
}

updateCountdown();
}

// 11 days, 15 hours, 51 minutes, 50 seconds in seconds
const countdownTime = (11 * 24 * 60 * 60) + (15 * 60 * 60) + (51 * 60) + 50;
startCountdown(countdownTime);





// Product countdown

function startCountdowns() {
let totalSeconds = (11 * 24 * 60 * 60) + (14 * 60 * 60) + (32 * 60) + 59; // 11d 14h 32m 59s in seconds

function updateTimer() {
    let days = Math.floor(totalSeconds / (24 * 60 * 60));
    let hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    let minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    let seconds = totalSeconds % 60;

    document.getElementById("timer").innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;

    if (totalSeconds > 0) {
        totalSeconds--;
        setTimeout(updateTimer, 1000);
    } else {
        document.getElementById("timer").innerHTML = "Time's up!";
    }
}

updateTimer();
}

startCountdowns();




// Select all product buttons
const allButtons = document.querySelectorAll('.product-btn button');

function removeActiveClass(card) {
const buttons = card.querySelectorAll('.product-btn button');
buttons.forEach(button => button.classList.remove('active'));
}


allButtons.forEach(button => {
button.addEventListener('mouseenter', function () {
  const card = button.closest('.card');
  const cardImage = card.querySelector('.card-image');

  removeActiveClass(card);

  button.classList.add('active');

  const image = button.getAttribute('data-image');
  cardImage.style.backgroundImage = `url(${image})`;
});

button.addEventListener('click', function () {
  const card = button.closest('.card');

  removeActiveClass(card);

  button.classList.add('active');

  card.dataset.lastActiveButton = button.getAttribute('data-image');
});
});

// Handle card hover behavior
document.querySelectorAll('.card-image').forEach(cardImage => {
cardImage.addEventListener('mouseenter', function () {
  const card = cardImage.closest('.card');

  const lastActiveButton = card.querySelector('.product-btn button.active');

  if (lastActiveButton) {
    card.dataset.lastActiveButton = lastActiveButton.getAttribute('data-image');
    lastActiveButton.classList.remove('active');
  }

  cardImage.style.removeProperty('background-image');
});

cardImage.addEventListener('mouseleave', function () {
  const card = cardImage.closest('.card');
  const lastImage = card.dataset.lastActiveButton;

  if (lastImage) {
   
    cardImage.style.backgroundImage = `url(${lastImage})`;

    const buttons = card.querySelectorAll('.product-btn button');
    buttons.forEach(button => {
      if (button.getAttribute('data-image') === lastImage) {
        button.classList.add('active');
      }
    });
  }
});
});



const menuContainers = document.querySelectorAll('.menu-container');

menuContainers.forEach(menuContainer => {
  const menuBtn = menuContainer.querySelector('.menu-btn');
  const menuItems = menuContainer.querySelector('.menu-items');
  
 
  menuBtn.addEventListener('click', function(event) {
      event.stopPropagation(); 
      menuContainers.forEach(container => {
          if (container !== menuContainer) {
              container.classList.remove('active');
          }
      });
      menuContainer.classList.toggle('active');
  });


  document.addEventListener('click', function(event) {
      if (!menuContainer.contains(event.target)) {
          menuContainer.classList.remove('active');
      }
  });

  menuContainer.addEventListener('mouseover', function() {
      menuContainers.forEach(container => {
          if (container !== menuContainer) {
              container.classList.remove('active');
          }
      });
  });
});

