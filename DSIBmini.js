// navbar
// navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active")
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}




// magic button 
// magic button 
const eightBall = document.querySelector(".eightBall")
function generateAnswer() {
  responses = [
          'Second hand smoke kills your pets.<br>Don\'t smoke, it\'s bad', 
           'Smoking makes your breath smell like death. <br>Don\'t smoke, it\'s bad', 
           'Long Haul flights suck, they suck even more when you\'ve a nicotine addiction, quit smoking - go on holiday!<br>Don\'t smoke, it\'s bad', 
           'smoking causes arteriosclerosis, which leads to loss of circulation, this can then lead to sores, ulceration, gangrene and amputation. don\'t let smoking take your legs.<br>Don\'t smoke, it\'s bad', 
           'Know what\'s better than a cig? Living in to your old age and getting senior discounts on literally EVERYTHING.<br>Don\'t smoke, it\'s bad', 
           'Sorry babe but smoking is embarrassing, everyone knows it\'s bad for you and people think you\'re stupid for continuing.<br>Don\'t smoke, it\'s bad', 
           'Oh wow, you bought a reusable coffee cup and shopping bag? but you\'re still smoking? Look up the environmental impacts <a href="https://www.who.int/news/item/31-05-2022-who-raises-alarm-on-tobacco-industry-environmental-impact" target="_blank">here</a> ya fanny.<br>Don\'t smoke, it\'s bad',
           'People love you and you will be loved throughout life, don\'t leave them early or make them watch you die a really painful death.<br>Don\'t smoke, it\'s bad',
           'Just between us, we can admit we\'re vein and with good reason, you\'re a hotty but smoking will steal your looks like a Disney villain. You\'re gonna look old, haggard, have yellow teeth and baggy, baggy skin. Quit smoking, stay hot.<br>Don\'t smoke, it\'s bad',
           'Smoking is paying to die a painful death. You could spend that money on a daily iced latte and croissant.<br>Don\'t smoke, it\'s bad'
  ];
  response = responses[Math.floor(Math.random() * responses.length)];
  document.getElementById('outputDiv').innerHTML = response;
  eightBall.innerHTML = 'Press me again?';
  eightBall.style.color = 'green';
} 

// play button for smaller screens autoplay for desktop 

var video = document.getElementById("spotVideo");
var playButton = document.getElementById("playButton");

if (!window.matchMedia("(max-width: 768px)").matches) {
  playButton.style.display = "none";
  video.play(); // Autoplay video on desktop
}

/
playButton.addEventListener("click", function() {
  video.play();
  playButton.style.display = "none"; // Hide play button after click
});


video.addEventListener("ended", function() {
  video.currentTime = 0; // Restart video
  video.play(); // Play video again
});


  
// image gallwery
function expandImage(image) {
  var expandedImageContainer = document.getElementById("expandedImageContainer");
  var expandedImage = document.getElementById("expandedImage");
  
  expandedImage.src = image.src;
  
  expandedImageContainer.style.display = "block";
}

document.getElementById("expandedImageContainer").addEventListener("click", function() {
  this.style.display = "none";
});

window.addEventListener("load", function() {
  console.log("Page loaded");
  var firstImage = document.querySelector("#imageGallery .galleryImage");
  console.log(firstImage);
  if (firstImage) {
    expandImage(firstImage);
  } else {
    console.log("No images found in the gallery.");
  }
});


// color changing for resources

let colorChange = document.querySelectorAll('.resource');

for (let i = 0; i < colorChange.length; i++) {
  colorChange[i].addEventListener('mouseover', function() {
    colorChange[i].style.backgroundColor = 'rgb(255,142,0)';
  });

  colorChange[i].addEventListener('mouseout', function() {
    colorChange[i].style.backgroundColor = ''; 
  });
}

