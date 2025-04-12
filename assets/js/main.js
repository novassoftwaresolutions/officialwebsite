const waterEffect = document.querySelector('.water-effect');

document.addEventListener('mousemove', (e) => {
  const ripple = document.createElement('span');
  const size = Math.random() * 60 + 5;
  const x = e.clientX - size / 2;
  const y = e.clientY - size / 2;

  // Random color generator for each ripple
  const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`;

  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.style.background = randomColor; 
  ripple.style.position = 'absolute';
  ripple.style.pointerEvents = 'none';
  ripple.style.animation = 'rippleEffect 4s ease-out';

  waterEffect.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 2000); 
});

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  const mainContent = document.querySelector('.main-content');

  setTimeout(() => {
    preloader.style.display = 'none'; 
    mainContent.style.display = 'block'; 
  }, 10000); 
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.innerHTML = `
  @keyframes rippleEffect {
    0% {
      transform: scale(0);
      opacity: 0.8;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.4;
    }
    100% {
      transform: scale(3);
      opacity: 0;
    }
  }
  .water-effect span {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    animation: rippleEffect 4s ease-out;
  }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', () => {
  const cookieNotice = document.querySelector('.cookie-notice');
  const cookieBtn = document.querySelector('.cookie-btn');

  cookieBtn.addEventListener('click', () => {
    cookieNotice.style.display = 'none'; // Hide the cookie notice
  });
});