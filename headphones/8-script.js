// Hamburger Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav ul li a');
  
  // Close menu when clicking on a navigation link (mobile only)
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 480 && menuToggle.checked) {
        menuToggle.checked = false;
      }
    });
  });
  
  // Close menu when clicking outside (optional)
  document.addEventListener('click', function(event) {
    const header = document.querySelector('header');
    const isClickInsideHeader = header.contains(event.target);
    
    if (!isClickInsideHeader && menuToggle.checked && window.innerWidth <= 480) {
      menuToggle.checked = false;
    }
  });
  
  // Handle window resize - close menu if screen becomes larger
  window.addEventListener('resize', function() {
    if (window.innerWidth > 480 && menuToggle.checked) {
      menuToggle.checked = false;
    }
  });
});
