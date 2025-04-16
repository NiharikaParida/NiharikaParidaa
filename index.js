// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = '/'
})
/* Add this JavaScript to create particles */
document.addEventListener('DOMContentLoaded', function() {
  const particlesContainer = document.createElement('div');
  particlesContainer.style.position = 'fixed';
  particlesContainer.style.top = '0';
  particlesContainer.style.left = '0';
  particlesContainer.style.width = '100%';
  particlesContainer.style.height = '100%';
  particlesContainer.style.pointerEvents = 'none';
  particlesContainer.style.zIndex = '-1';
  document.body.appendChild(particlesContainer);

  function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    const size = Math.random() * 15 + 5;
    const posX = Math.random() * window.innerWidth;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}px`;
    particle.style.bottom = `-${size}px`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    
    // Random color
    const colors = ['rgba(255,255,255,0.7)', 'rgba(255,235,59,0.7)', 'rgba(233,30,99,0.7)', 'rgba(33,150,243,0.7)'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    particlesContainer.appendChild(particle);
    
    // Remove particle after animation completes
    setTimeout(() => {
      particle.remove();
    }, duration * 1000);
  }
  
  // Create initial particles
  for (let i = 0; i < 20; i++) {
    createParticle();
  }
  
  // Keep creating new particles
  setInterval(createParticle, 500);
});
/*=============================================================================================================================== */
document.querySelectorAll('.skills__skill').forEach(skill => {
  skill.addEventListener('mouseover', () => {
    skill.style.transform = 'scale(1.1) translateY(-5px)';
    skill.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
  });
  
  skill.addEventListener('mouseout', () => {
    skill.style.transform = 'scale(1)';
    skill.style.boxShadow = 'none';
  });
});
let currentColor = 0;
const colors = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
];

function changeBackground() {
  document.body.style.background = colors[currentColor];
  document.body.style.backgroundAttachment = 'fixed';
  document.body.style.transition = 'background 1.5s ease';
  currentColor = (currentColor + 1) % colors.length;
}

setInterval(changeBackground, 8000);
// Scroll reveal animation
document.addEventListener('DOMContentLoaded', () => {
  const scrollReveal = {
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: true
  };

  ScrollReveal().reveal('.heading-sec__main', {
    ...scrollReveal,
    origin: 'top'
  });

  ScrollReveal().reveal('.heading-sec__sub', {
    ...scrollReveal,
    origin: 'bottom'
  });

  ScrollReveal().reveal('.about__content', {
    ...scrollReveal,
    origin: 'left'
  });

  ScrollReveal().reveal('.projects__row', {
    ...scrollReveal,
    interval: 200
  });
});
// Add this in your JS file
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});
// Add this in your JS file
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.header__link');
  
  sections.forEach(section => {
      const top = window.scrollY;
      const offset = section.offsetTop - 150;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if(top >= offset && top < offset + height) {
          navLinks.forEach(link => {
              link.classList.remove('active');
              if(link.getAttribute('href').includes(id)) {
                  link.classList.add('active');
              }
          });
      }
  });
});
// Add this in your JS file
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      document.querySelectorAll('.projects__row').forEach(project => {
          if(filter === 'all' || project.dataset.category === filter) {
              project.style.display = 'grid';
          } else {
              project.style.display = 'none';
          }
      });

      document.querySelectorAll('.filter-btn').forEach(btn => 
          btn.classList.remove('active'));
      button.classList.add('active');
  });
});
// Add this in your JS file
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if(window.scrollY > 500) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
