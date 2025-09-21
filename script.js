const btn = document.getElementById('btn');
const msg = document.getElementById('msg');

// revela/oculta el mensaje
btn?.addEventListener('click', () => {
  const hidden = msg.hasAttribute('hidden');
  if (hidden) {
    msg.removeAttribute('hidden');
    btn.textContent = 'teamo muxito amor de mi vida';
    // pequeño destello al mostrar
    msg.animate([{opacity:0, transform:'scale(.98)'},{opacity:1, transform:'scale(1)'}],
                {duration:300, easing:'ease-out'});
  } else {
    msg.setAttribute('hidden','');
    btn.textContent = 'Apretameee';
  }
});

// entrada escalonada del ramillete
document.querySelectorAll('.flower').forEach((el,i)=>{
  el.animate(
    [{opacity:0, transform:'translateY(12px) scale(.98)'},
     {opacity:1, transform:'translateY(0) scale(1)'}],
    {duration:500, delay:200*i, easing:'ease-out', fill:'both'}
  );
});
