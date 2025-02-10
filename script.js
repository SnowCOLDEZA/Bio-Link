document.addEventListener('DOMContentLoaded', () => {
  const snowflakesContainer = document.querySelector('.snowflakes');

  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.animationDuration = `${Math.random() * 6 + 8}s`;
    snowflake.style.fontSize = `${Math.random() * 20 + 40}px`;
    snowflake.textContent = '❄';
    snowflakesContainer.appendChild(snowflake);
  }

  for (let i = 0; i < 15; i++) {
    createSnowflake();
  }
});
