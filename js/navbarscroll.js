let lastScrollTop = 0;
// window.addEventListener("scroll", function() {
//     if(lastScrollTop==0){
//         document.body.classList.add("bg-color");
//     }

// });          
window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

 
  if (scrollTop === 0) {
    // At the top of the page
    document.body.classList.add("top-remove-bg-navabr");
    document.body.classList.remove("scrolling-up", "scrolling-down");
  } else if (scrollTop > lastScrollTop) {
    // Scrolling down
    document.body.classList.add("scrolling-down");
    document.body.classList.remove("scrolling-up", "top-remove-bg-navabr");
  } else {
    // Scrolling up
    document.body.classList.add("scrolling-up");
    document.body.classList.remove("scrolling-down", "top-remove-bg-navabr");
  }

  lastScrollTop = scrollTop;
});




// loader

const loader=document.querySelector('.loader-container')
const pagecontent=document.querySelector('#page-content')

window.addEventListener('load',() => {
  loader.classList.add("hidden")
  pagecontent.classList.add("visible")
})