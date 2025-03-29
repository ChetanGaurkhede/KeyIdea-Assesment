// Select elements
const navLinks = document.querySelectorAll(".nav-link");
const mobileNav = document.querySelector(".container-fluid.block");

// Handle active link change
navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navLinks.forEach(nav => nav.classList.remove("active"));
    this.classList.add("active"); 
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu-container");
  const openBtn = document.querySelector("#open-nav-list"); 
  const closeBtn = document.querySelector("#close-nav-list");

  openBtn.addEventListener("click", function () {
    menu.classList.add("show");
  });

  closeBtn.addEventListener("click", function () {
    menu.classList.remove("show");
  });
});


let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});





var swiper2 = new Swiper(".swiper2", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 20,
    stretch: 1,
    depth: 100,
    modifier: 1,
    scale: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


document.addEventListener('DOMContentLoaded', function () {
  const rings = document.querySelectorAll('.ring');

  // Add click event listeners to each ring
  rings.forEach(ring => {
    ring.addEventListener('click', function () {
      // Skip if already active
      if (this.classList.contains('active')) return;

      const currentPosition = this.getAttribute('data-position');
      const activeRing = document.querySelector('.ring.active');
      const activePosition = activeRing.getAttribute('data-position');

      // Determine rotation direction
      const clockwise = (currentPosition === 'left' && activePosition === 'active') ||
        (currentPosition === 'active' && activePosition === 'right') ||
        (currentPosition === 'right' && activePosition === 'left');

      // Update positions based on clicked ring
      if (currentPosition === 'left') {
        //  - rotate clockwise
        console.log("left")
        updatePositions(clockwise);
      } else if (currentPosition === 'right') {
        console.log("right")
        // - rotate counter-clockwise
        updatePositions(clockwise);
      }
    });
  });

  // Function to update positions of all rings
  function updatePositions(clockwise) {
    const positions = ['left', 'active', 'right'];

    // Get current position of each ring
    const currentPositions = {};
    rings.forEach(ring => {
      currentPositions[ring.id] = ring.getAttribute('data-position');
    });

    // Calculate new positions
    const newPositions = {};
    for (const [ringId, position] of Object.entries(currentPositions)) {
      const currentIndex = positions.indexOf(position);
      let newIndex;

      if (clockwise) {
        // Rotate clockwise
        newIndex = (currentIndex + 1) % positions.length;
      } else {
        // Rotate counter-clockwise
        newIndex = (currentIndex - 1 + positions.length) % positions.length;
      }

      newPositions[ringId] = positions[newIndex];
    }

    // Apply new positions
    for (const [ringId, newPosition] of Object.entries(newPositions)) {
      const ring = document.getElementById(ringId);

      // Remove all position classes
      ring.classList.remove('left', 'active', 'right');

      // Add new position class
      ring.classList.add(newPosition);

      // Update data attribute
      ring.setAttribute('data-position', newPosition);
    }
  }

  // Add automatic rotation for demo purposes (optional)
  let autoRotate = setInterval(() => {
    updatePositions(true);
  }, 5000);

  // Stop auto-rotation when user interacts
  rings.forEach(ring => {
    ring.addEventListener('click', () => {
      clearInterval(autoRotate);
    });
  });
});