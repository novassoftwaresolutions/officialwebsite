const waterEffect = document.querySelector('.water-effect');

document.addEventListener('mousemove', (e) => {
  const ripple = document.createElement('span');
  const size = Math.random() * 40 + 5; //
  const x = e.clientX - size / 2;
  const y = e.clientY - size / 2;

  // Random color generator for each ripple
  const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`;

  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.style.background = randomColor; // Apply the random color

  waterEffect.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 4000); // Remove ripple after animation
});