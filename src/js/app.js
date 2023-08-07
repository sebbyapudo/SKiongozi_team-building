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
  linksContainer.classList.toggle('show-links')
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  // if(containerHeight === 0){
  //   linksContainer.style.height = `${linksHeight}px`;
  // }
  // else{
  //   linksContainer.style.height = 0;
  // }
})

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
// Fixed navbar
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if(scrollHeight > navHeight){
    navbar.classList.add('fixed-nav');
  }
  else{
    navbar.classList.remove('fixed-nav');
  }

  if(scrollHeight > 500){
    topLink.classList.add('show-link')
  }
  else {
    topLink.classList.remove('show-link')
  }
  
})

// Smooth scroll
// select link
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach( (link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault()
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // calculate heights 
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;

    if(!fixedNav){
      position = position - navHeight;
    }
    if(navHeight > 82){
      position = position + containerHeight;
    }

    window.scrollTo({ 
      left:0,
      top: position,
    });  
    // close
    linksContainer.classList.remove('show-links')
  });
});

// close the navtoggle on clickking the nav-btn
const navBtn = document.querySelector('.nav-btn');
navBtn.addEventListener("click", () => {
  linksContainer.classList.remove('show-links')
})

// Render blog 
function renderBlog() {
  const blogContainer = document.querySelector('.blog-container')
  blog.forEach( (item) => {
    blogContainer.innerHTML += `
    <!-- single blog -->
    <div class="single-blog">
      <div class="img-container">
        <img src=${item.img} alt=${item.id}>
      </div>
      <div class="blog-title">
        <h4 class="title">${item.title}</h4>
        <p class="blog-text">
          ${item.desc}
        </p>
      </div>
    </div>
    <!-- end of single blog -->
    `
  } )
}

console.log(renderBlog())
