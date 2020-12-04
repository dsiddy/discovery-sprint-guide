// Add your custom javascript here
console.log("Hi from Federalist");

let sidenav = document.querySelector('.usa-sidenav');

window.addEventListener('scroll',setCurrentLink);

/**
 * Find the most recently passed heading and adds a usa-current
 * class to the correspoing link in the sidenav subnav
 */
function setCurrentLink(){
  if (sidenav) {
    let h3s = document.querySelectorAll('h3');
    let scrollPos = document.documentElement.scrollTop;
    let topHead = h3s[0];
    let i = 0;
    let found = false;
    while (!found && i < h3s.length) {
        if (scrollPos < h3s[i].offsetTop){
          found = true;
        }
        else {
          topHead = h3s[i];
        }
        i++;
    }
    let href = topHead.id;
    let oldLink = document.querySelector('.usa-sidenav__sublist .usa-current');
    if (oldLink) {
      oldLink.classList.remove('usa-current');
    }
    let currentLink = document.querySelector('.usa-sidenav__sublist [href="#'+href+'"]').parentElement;
    currentLink.classList.add('usa-current');
  }
}