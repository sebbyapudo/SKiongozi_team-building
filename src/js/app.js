// Skiongozi team building
// Global variable declaration

// Setting the current date
const date = document.getElementById('date');
const currentDate = new Date().getFullYear();
date.innerHTML = currentDate;

// close links 
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
  linksContainer.classList.toggle('show-links')
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  
  // if(containerHeight === 0){
  //   linksContainer.style.height = `${linksHeight}px`;
  // }
  // else {
  //   linksContainer.style.height = 0;
  // }
})

// fixed navbar 
const navbar = document.querySelector('#nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if(scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav')
  }
  else{
    navbar.classList.remove('fixed-nav')
  }

  if(scrollHeight > 500) {
    topLink.classList.add('show-link');
  }
  else{
    topLink.classList.remove('show-link');
  }
})

// smooth scroll
// select links

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach( (link) => {
  link.addEventListener('click', (e) => {
    // prevent default behaviour
    e.preventDefault();
    // navigate to specific target
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);  
    // calculate heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.containerHeight().height;
    const fixedNav = navbar.classList.contains('fixed-nav')
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      left: 0,
      top: position,
    });
    // linksContainer.style.height = 0;
  })
})
