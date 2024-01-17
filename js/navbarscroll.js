let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    if(lastScrollTop==0){
        document.body.classList.add("bg-color");
    }

});          
window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    document.body.classList.add("scrolling-down");
    document.body.classList.remove("scrolling-up");
  } else {
    // Scrolling up
    document.body.classList.add("scrolling-up");
    document.body.classList.remove("scrolling-down");
  }

  lastScrollTop = scrollTop;
});