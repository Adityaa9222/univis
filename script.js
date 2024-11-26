document.addEventListener('DOMContentLoaded',function() {
let backgroundContainer = document.querySelector('.header');
let backgrounds = [
  'img4.jpg',
  'img2.jpg',
  'img1.jpg'
];

let currentIndex = 1;
function changeBackground(){

  backgroundContainer.classList.add('zoom-out');

  setTimeout(() => {
  backgroundContainer.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
  currentIndex = (currentIndex+1)%backgrounds.length;

  backgroundContainer.classList.remove('zoom-out');
},500);
}
setInterval(changeBackground,3000);
changeBackground();

});




document.addEventListener('DOMContentLoaded',function() {
let currentIndex = 0;
const images = document.querySelectorAll('.slider img');
const totalImages = images.length;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000);
});


function toggleDetails(button) {
    const detailsDiv = button.parentElement.nextElementSibling;
    if (detailsDiv.style.display === "block") {
      detailsDiv.style.display = "none";
      button.textContent = "+";
    } else {
      detailsDiv.style.display = "block";
      button.textContent = "-";
    }
  }
  

  document.querySelectorAll('.nav-link').forEach(link =>{
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetID = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);

      if(targetSection){

        let offset = 100;

        if(targetID === "floorplan"){
          offset = -470;
        }
        const elementPosition = targetSection.offsetTop;
        const offsetPosition = elementPosition - offset;


        window.scrollTo({
          top:offsetPosition,
          behavior:'smooth'
        });
      }
    });
  });
  /*navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetClassName = event.target.getAttribute('data-target');
      const targetSection = document.querySelector('.section.${targetClassName}');
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.error('Target section with class "${targetClassName}" not found.');
      }
    });
  });*/

  //phone call button//
  function requestCall(){
    window.location.href = "tel : 9503024909";
  }


  //request submites//
  function showAlert(){
    alert("Your Response Have Been Saved.\nWe Will Call You Soon.")
  }

  //display form //
  //function showForm(){
    //document.getElementsByClassName('form-box').style.display = 'inline-block';
  //}//

   function clickMe(){
    window.scrollTo({top:0,behavior:'smooth'});
    document.getElementsByClassName('form-box').style.display = 'block';
  }



  //formanimation //

  document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById("interested");
    const form = document.getElementById("bookingForm");

    if (scrollToTopBtn && form) {
        scrollToTopBtn.addEventListener("click", function() {
            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            // Add the hanging swing animation to the form
            form.classList.add("animateForm");

            // Remove the animation class after the animation ends
            setTimeout(() => {
                form.classList.remove("animateForm");
            }, 4000); // Match this duration with the animation duration in CSS
        });
    } else {
        console.error("Button or form not found in the document.");
    }
})


//Scroller//

//enuire button//
document.addEventListener("DOMContentLoaded", function() {
document.querySelector(".bsd").addEventListener("click", function() {
  document.getElementById("contact us").scrollIntoView({behavior:"smooth"});
});
});



//gallary img animation//

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery-image");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target); // Optional: Stop observing once the animation is triggered
          }
      });
  });

  images.forEach((image) => {
      observer.observe(image);
  });
});




/*Floor Plan*/


document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("animationContainer");

  // Create an Intersection Observer
  const observer = new IntersectionObserver(
      (entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  container.classList.add("animate");
                  observer.disconnect(); // Stop observing after triggering animation
              }
          });
      },
      {
          root: null, // Use the viewport as the root
          threshold: 0.1 // Trigger when 30% of the section is visible
      }
  );

  // Observe the animation container
  observer.observe(container);
});


/* Img floorplan*/
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
showSlides(slideIndex += n);
}
function currentSlide(n) {
showSlides(slideIndex = n);
}
function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) { slideIndex = 1 }
if (n < 1) { slideIndex = slides.length }
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
}