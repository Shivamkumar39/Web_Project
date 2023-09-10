//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')
window.onscroll = () => {

    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            //active navbar links
            navLinks.forEach (links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            
        }
       
    });
    // sticky header
    let Headers = document.querySelector('header');

    Headers.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// for slide
var responsiveSlider = function() {

    var slider = document.getElementById("slider");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slideWrap");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    
    window.addEventListener('resize', function() {
      sliderWidth = slider.offsetWidth;
    });
    
    var prevSlide = function() {
      if(count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = 1) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
    };
    
    var nextSlide = function() {
      if(count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = items) {
        slideList.style.left = "0px";
        count = 1;
      }
    };
    
    next.addEventListener("click", function() {
      nextSlide();
    });
    
    prev.addEventListener("click", function() {
      prevSlide();
    });
    
    setInterval(function() {
      nextSlide()
    }, 5000);
    
    };
    
    window.onload = function() {
    responsiveSlider();  
    }

//js using for search 

// JavaScript code
let input = document.getElementById("searchbar");
//get list of value
let list = document.querySelectorAll(".list div");

//function search on the list.
function search (){
  for(let i = 0; i < list.length; i += 1){
   //check if the element contains the value of the input
   if(list[i].innerText.toLowerCase().includes(input.value.toLowerCase())){
     list[i].style.display = "block";
   }else{
     list[i].style.display = "none";
   }
  }
}

//to the change run search.
input.addEventListener('input', search);
