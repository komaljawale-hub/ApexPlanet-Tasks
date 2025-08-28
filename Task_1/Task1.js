document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('alertBtn');
  const msg = document.getElementById('message');

  btn.addEventListener('click', () => {
    msg.textContent = "🎊 Great! You triggered a JavaScript action!";
    msg.classList.remove('hidden');
    btn.textContent = "Clicked!";
    btn.disabled = true;
  });
});
