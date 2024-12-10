
function openCity(evt, cityName) {
    // Declare all variables
    let i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
     
      
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
   
    
   



  }


function mfunction(){
  let content = document.getElementById("dropdown-con");
   
   if(content.style.display =="none"){
    content.style.display = "block";
   }
   else{
    content.style.display = "none";
   }

  

}


// code for static navbar for fixed 


//js code for slider for mobile view
$(document).ready(function(){
  $(".SlickCarousel-mobile").slick({
    rtl:false, // If RTL Make it true & .slick-slide{float:right;}
    autoplay:true, 
    autoplaySpeed:5000, //  Slide Delay
    speed:800, // Transition Speed
    slidesToShow:1, // Number Of Carousel
    slidesToScroll:1, // Slide To Move 
    pauseOnHover:true,
   responsive:true,
    responsive: [
      {
        breakpoint: 975,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
      }
  ]
  })
})

//for desktop
$(document).ready(function(){
  $(".SlickCarousel").slick({
    rtl:false, // If RTL Make it true & .slick-slide{float:right;}
    autoplay:true, 
    autoplaySpeed:5000, //  Slide Delay
    speed:800, // Transition Speed
    slidesToShow:3, // Number Of Carousel
    slidesToScroll:1, // Slide To Move 
    pauseOnHover:true,
   responsive:true,
    responsive: [
      {
        breakpoint: 975,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
      }
  ]
  })
})


//js code for sticky navbar

// When the user scrolls the page, execute myFunction



//js for filter
filterSelection("All")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "All") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

//js for active buttons
 // Add active class to the current button (highlight it)
 var btnContainer = document.getElementById("mybtncontainer");
 var btns = btnContainer.getElementsByClassName("btns");
 for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function(){
     var current = document.getElementsByClassName("actives");
     current[0].className = current[0].className.replace(" actives", "");
     this.className += " actives";
   });
 }

 //code for counters
 const counters = document.querySelectorAll('.value');
 const speed = 9000;
 
 counters.forEach( counter => {
    const animate = () => {
       const value = +counter.getAttribute('num');
       const data = +counter.innerText;
      
       const time = value / speed;
      if(data < value) {
           counter.innerText = Math.ceil(data + time);
           setTimeout(animate, 1);
         }else{
           counter.innerText = value;
         }
      
    }
    
    animate();
 });


 //
 