// Skiongozi team building
// Global variable declaration

// Set currrent date
const date = document.getElementById('date');
const currrentDate = new Date().getFullYear();
date.innerHTML = currrentDate;

// Close Links
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')
const navToggle = document.querySelector('.nav-toggle')

navToggle.addEventListener('click', () => {
  // linksContainer.classList.toggle('show-links')
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if(containerHeight === 0){
    linksContainer.style.height = `${linksHeight}px`;
  }
  else{
    linksContainer.style.height = 0;
  }
})

