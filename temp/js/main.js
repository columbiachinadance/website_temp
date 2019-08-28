// $(".background-wide > div:gt(0)").hide();

// setInterval(function() { 
//   $('.background-wide > div:first')
//     .fadeOut(1000)
//     .next()
//     .fadeIn(1000)
//     .end()
//     .appendTo('.background-wide');
// },  3000);

// $(".background-mobi > div:gt(0)").hide();

// setInterval(function() { 
//   $('.background-mobi > div:first')
//     .fadeOut(1000)
//     .next()
//     .fadeIn(1000)
//     .end()
//     .appendTo('.background-mobi');
// },  3000);

function splash() {
  var x = document.getElementById("information");
  
  document.getElementById("about").style.display="none"
  document.getElementById("team").style.display="none"
  document.getElementById("calendar").style.display="none"
  document.getElementById("gallery").style.display="none"
  document.getElementById("contact").style.display="none"
  document.getElementById("my-slider").style.display="block"
  document.getElementById("information").style.display="block"
    
    x.style.display = "block";
  } 


function about() {
  var x = document.getElementById("about");
  console.log(x)
  document.getElementById("my-slider").style.display=""
  document.getElementById("information").style.display="none"
  document.getElementById("team").style.display="none"
  document.getElementById("calendar").style.display="none"
  document.getElementById("gallery").style.display="none"
  document.getElementById("contact").style.display="none"
    
    x.style.display = "block";
  } 

function team() {
  var x = document.getElementById("team");
  if (x.style.display != "block") {
    if(document.getElementById("information").style.display =="block"){
      document.getElementById("information").style.display="none";
      document.getElementById("my-slider").style.display="none"
    }
    if(document.getElementById("about").style.display =="block"){
      document.getElementById("about").style.display="none"
    }
    if(document.getElementById("calendar").style.display =="block"){
      document.getElementById("calendar").style.display="none"
    }
    if(document.getElementById("gallery").style.display =="block"){
      document.getElementById("gallery").style.display="none"
    }
    if(document.getElementById("contact").style.display =="block"){
      document.getElementById("contact").style.display="none"
    }
   document.getElementById("my-slider").style.display="none"
    x.style.display = "block";
  } else {
    // x.style.display = "none";
  }
  }

  function calendar() {
  var x = document.getElementById("calendar");
  if (x.style.display != "block") {
    if(document.getElementById("information").style.display =="block"){
      document.getElementById("information").style.display="none"
      document.getElementById("my-slider").style.display="none"
    }
    if(document.getElementById("about").style.display =="block"){
      document.getElementById("about").style.display="none"
    }
    if(document.getElementById("team").style.display =="block"){
      document.getElementById("team").style.display="none"
    }
    if(document.getElementById("gallery").style.display =="block"){
      document.getElementById("gallery").style.display="none"
    }
    if(document.getElementById("contact").style.display =="block"){
      document.getElementById("contact").style.display="none"
    }
    document.getElementById("my-slider").style.display="none"
    x.style.display = "block";
  } else {
    // x.style.display = "none";
  }
  }

    function gallery() {
  var x = document.getElementById("gallery");
  if (x.style.display != "block") {
    if(document.getElementById("information").style.display =="block"){
      document.getElementById("information").style.display="none"
      document.getElementById("my-slider").style.display="none"
    }
    if(document.getElementById("about").style.display =="block"){
      document.getElementById("about").style.display="none"
    }
    if(document.getElementById("team").style.display =="block"){
      document.getElementById("team").style.display="none"
    }
     if(document.getElementById("calendar").style.display =="block"){
      document.getElementById("calendar").style.display="none"
    }
    if(document.getElementById("contact").style.display =="block"){
      document.getElementById("contact").style.display="none"
    }
    document.getElementById("my-slider").style.display="none"
    x.style.display = "block";
  } else {
    // x.style.display = "none";
  }
  }



  function contact() {
  var x = document.getElementById("contact");
  if (x.style.display != "block") {
    if(document.getElementById("information").style.display =="block"){
      document.getElementById("information").style.display="none"
      document.getElementById("my-slider").style.display="none"
    }
    if(document.getElementById("about").style.display =="block"){
      document.getElementById("about").style.display="none"
    }
    if(document.getElementById("team").style.display =="block"){
      document.getElementById("team").style.display="none"
    }
     if(document.getElementById("calendar").style.display =="block"){
      document.getElementById("calendar").style.display="none"
    }
    if(document.getElementById("gallery").style.display =="block"){
      document.getElementById("gallery").style.display="none"
    }
    document.getElementById("my-slider").style.display="none"
    x.style.display = "block";
  } else {
    // x.style.display = "none";
  }
  }

 $(".trigger_popup_fricc").click(function(){
       $('.hover_bkgr_fricc').show();
    });
    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });

// $(document).ready(function() {
//   setTimeout(function() { 
//     if(document.getElementById("information").style.display=="" && document.getElementById("team").style.display=="" && document.getElementById("calendar").style.display =="" &&
//      document.getElementById("gallery").style.display =="" && document.getElementById("contact").style.display ==""){
//     $("#information").delay(1000).fadeIn(500);}
//     }
//   }
//     , 3600);
  
  
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
}
