      // NOTICE: This pen may appear to not work on mobile devices, but it is  due to the codepen footer and the browser's bottom menu bar that hide the button. It should work fine when implemented for your website

// used to avoid using 255, thus generating white-ish backgrounds that make text unreadable
const colorMax = 192;

// gets the breakpoint at which the scroll-to-top button should appear
const scrollBreakpoint = window.innerHeight * 0.9;

document.addEventListener('DOMContentLoaded', () => {
  randomizeBackgrounds();
  setupScrollListener();
  setupScrollEvent();  
});

// scrolls window to top
function setupScrollEvent() {
  const scrollButton = document.querySelector('.scroll-top');
  
  scrollButton.addEventListener('click', (e) => {
  
    smoothVerticalScrolling(scrollButton.parentElement, 250, "top");
  });
}


function setupScrollListener() {  
   window.addEventListener('scroll', (e) => {
     const scrollButton = document.querySelector('.scroll-top');

     const scrollOffset = window.scrollY;
    
     if (scrollOffset >= scrollBreakpoint) {
       scrollButton.classList.add('visible');
     } else if (scrollOffset <= 0) {
       scrollButton.classList.remove('visible');
     }    
  });
}

function randomizeBackgrounds() {

  const contentContainers = document.querySelectorAll('.content-container');
  
  [].forEach.call(contentContainers, container => {

    container.style.background = `rgb(${randVal(colorMax)},${randVal(colorMax)},${randVal(colorMax)})`;
  });
}

function randVal(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function smoothVerticalScrolling(e, time, where) {

  const eTop = e.getBoundingClientRect().top;
  const eAmt = eTop / 100;
  let curTime = 0;
  while (curTime <= time) {
    window.setTimeout(SVS_B, curTime, eAmt, where);

    curTime += time / 100;
  }
}

function SVS_B(eAmt, where) {
  // scroll by half the hundredth of the top offset if destination is not top (since to center only involves scrolling either in the top or bottom half of the window)
  if(where == "center" || where == "") {
    window.scrollBy(0, eAmt / 2); 
  }
  // otherwise scroll the full amount
  if (where == "top") {
    window.scrollBy(0, eAmt);
  }    
}