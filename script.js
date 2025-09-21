const btn = document.getElementById('btn');
const msg = document.getElementById('msg');

btn?.addEventListener('click', () => {
  if (msg.hasAttribute('hidden')) {
    msg.removeAttribute('hidden');
    btn.textContent = '💛';
  } else {
    msg.setAttribute('hidden', '');
    btn.textContent = 'Toca para ver tu mensaje';
  }
});
