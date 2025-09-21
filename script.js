const btn = document.getElementById('btn');
const msg = document.getElementById('msg');

btn?.addEventListener('click', () => {
  const hidden = msg.hasAttribute('hidden');
  if (hidden) {
    msg.removeAttribute('hidden');
    btn.textContent = '💛';
    msg.animate([{opacity:0, transform:'scale(.96)'},{opacity:1, transform:'scale(1)'}],
                {duration:300, easing:'ease-out'});
  } else {
    msg.setAttribute('hidden','');
    btn.textContent = 'Toca para ver tu mensaje';
  }
});

// entrada suave del SVG
document.getElementById('garden')?.animate(
  [{opacity:0, transform:'translateY(12px)'},
   {opacity:1, transform:'translateY(0)'}],
  {duration:600, easing:'ease-out', fill:'both'}
);
