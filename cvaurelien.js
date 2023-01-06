/* Début de la section nav */
const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  })
  
  const elementColor = el.dataset.activeColor;
  const target = el.dataset.target;
  
  console.log(target);
  
  
  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.backgroundColor = elementColor;
  indicator.style.left = `${el.offsetLeft}px`;
  
  
  el.classList.add('is-active');
  el.style.color = elementColor;
}

items.forEach((item, index) => {
  item.addEventListener('click', e => {
    handleIndicator(e.target)
  });
  item.classList.contains('is-active') && handleIndicator(item);
});

/* Fin de la section nav */




/* Début de la section diplomes */
 

'use strict'  
var     testim = document.getElementById("testim"),  
          testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),  
  testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),  
  testimLeftArrow = document.getElementById("left-arrow"),  
  testimRightArrow = document.getElementById("right-arrow"),  
  testimSpeed = 4500,  
  currentSlide = 0,  
  currentActive = 0,  
  testimTimer,  
          touchStartPos,  
          touchEndPos,  
          touchPosDiff,  
          ignoreTouch = 30;  
;  



window.onload = function() {  
  // Testim Script  
  function playSlide(slide) {  
    for (var k = 0; k < testimDots.length; k++) {  
      testimContent[k].classList.remove("active");  
      testimContent[k].classList.remove("inactive");  
      testimDots[k].classList.remove("active");  
    }  
    if (slide < 0) {  
      slide = currentSlide = testimContent.length-1;  
    }  
    if (slide > testimContent.length - 1) {  
      slide = currentSlide = 0;  
    }  
    if (currentActive != currentSlide) {  
      testimContent[currentActive].classList.add("inactive");        
    }  
    testimContent[slide].classList.add("active");  
    testimDots[slide].classList.add("active");  
    currentActive = currentSlide;  
    clearTimeout(testimTimer);  
    testimTimer = setTimeout(function() {  
      playSlide(currentSlide += 1);  
    }, testimSpeed)  
  } 
  
   

  testimLeftArrow.addEventListener("click", function() {  
    playSlide(currentSlide -= 1);  
  })  
  testimRightArrow.addEventListener("click", function() {  
    playSlide(currentSlide += 1);  
  })    
  for (var l = 0; l < testimDots.length; l++) {  
    testimDots[l].addEventListener("click", function() {  
      playSlide(currentSlide = testimDots.indexOf(this));  
    })  
  }  
  playSlide(currentSlide);  
  // keyboard shortcuts  
  document.addEventListener("keyup", function(e) {  
    switch (e.keyCode) {  
      case 37:  
        testimLeftArrow.click();  
        break;  
      case 39:  
        testimRightArrow.click();  
        break;  
      case 39:  
        testimRightArrow.click();  
        break;  
      default:  
        break;  
    }  
  })  
          testim.addEventListener("touchstart", function(e) {  
                    touchStartPos = e.changedTouches[0].clientX;  
          })  
          testim.addEventListener("touchend", function(e) {  
                    touchEndPos = e.changedTouches[0].clientX;  
                    touchPosDiff = touchStartPos - touchEndPos;  
                    console.log(touchPosDiff);  
                    console.log(touchStartPos);       
                    console.log(touchEndPos);       
                    if (touchPosDiff > 0 + ignoreTouch) {  
                              testimLeftArrow.click();  
                    } else if (touchPosDiff < 0 - ignoreTouch) {  
                              testimRightArrow.click();  
                    } else {  
                         return;  
                    }  
          })  


/* Fin de la section diplomes */

/* Début de la section experiences */
 
    $('.flex-container').waitForImages(function() {  
         $('.spinner').fadeOut();  
    }, $.noop, true);  
    $(".flex-slide").each(function(){  
         $(this).hover(function(){  
              $(this).find('.flex-title').css({  
                   transform: 'rotate(0deg)',  
                   top: '10%'  
              });  
              $(this).find('.flex-about').css({  
                   opacity: '1'  
              });  
         }, function(){  
              $(this).find('.flex-title').css({  
                   transform: 'rotate(90deg)',  
                   top: '15%'  
              });  
              $(this).find('.flex-about').css({  
                   opacity: '0'  
              });  
         })  
    });  
};  

/* fin de la section experiences */
 

