// chuikov.work — отрисовка страницы из assets/js/data.js
(function(){
const S = window.SITE;
const html = document.documentElement;
const L = html.lang === 'de' ? 'de' : 'en';
const BASE = html.dataset.base || './';        // путь до корня сайта ('./' или '../')
const t = S.text[L];
const W = S.works;
const $ = (s, el=document) => el.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const img = w => `${BASE}assets/img/${w.v}.jpg`;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Ссылки переключателя языка: EN = корень, DE = /de/. Выбор запоминаем.
const langHref = l => (l === 'en' ? BASE : BASE + 'de/');
function langSwitch(){
  return `<div class="lang" role="group" aria-label="Language">
    <a href="${langHref('en')}" data-lang="en" hreflang="en" class="${L==='en'?'on':''}" aria-label="English"${L==='en'?' aria-current="true"':''}>EN</a>
    <a href="${langHref('de')}" data-lang="de" hreflang="de" class="${L==='de'?'on':''}" aria-label="Deutsch"${L==='de'?' aria-current="true"':''}>DE</a>
  </div>`;
}
document.addEventListener('click', e => {
  const a = e.target.closest('.lang a');
  if (!a) return;
  try { localStorage.setItem('lang', a.dataset.lang); } catch(_){}
  e.preventDefault();
  location.href = a.getAttribute('href') + (location.hash || '');   // открытая работа сохраняется
});

const logo = `<b>chuikov</b><i>//</i>`;
const tag = (txt, cls='') => `<span class="tag ${cls}">${esc(txt)}</span>`;

// ---------- страница ----------
$('#app').innerHTML = `
<header class="hdr">
  <nav class="nav" aria-label="Main">
    <a href="#work">${t.work}</a><a href="#about">${t.about}</a><a href="#awards">${t.awards}</a><a href="#contact">${t.contact}</a>
  </nav>
  <a class="logo" href="#top" aria-label="chuikov — ${esc(t.role)}">${logo}</a>
  <div class="right"><a class="hide-s" href="${S.contacts.music}" target="_blank" rel="noopener">onewoten ↗</a>${langSwitch()}</div>
</header>

<main id="work" class="grid">
  <h1 class="sr">Aleksandr Chuikov — ${esc(t.role)}</h1>
  ${W.map((w,i) => `
  <a class="tile" href="#${w.id}" data-i="${i}" style="grid-column:span ${w.size[0]};grid-row:span ${w.size[1]}"
     aria-label="${esc(w.brand)} — ${esc(w.title[L])}">
    <img src="${img(w)}" alt="" ${i>2?'loading="lazy"':''} decoding="async">
    <div class="shade"></div>
    <div class="tags">${tag(w.role[L])}${w.award ? tag(w.award[L],'award') : ''}</div>
    <div class="cap"><b>${esc(w.brand)}</b><span>${esc(w.title[L])}</span></div>
  </a>`).join('')}
</main>

<div class="inner">
  <section id="about" class="about">
    <div class="bio">
      <h2 class="label">${t.about}</h2>
      <p class="p1">${esc(t.bio1)}</p>
      <p class="p2">${esc(t.bio2)}</p>
      <div class="bl">${t.brandsL}</div>
      <div class="chips">${S.brands.map(b=>tag(b)).join('')}${S.artists.map(b=>tag(b,'artist')).join('')}</div>
    </div>
    <div id="awards" class="awards">
      <h2 class="sr">${t.awards}</h2>
      ${S.awards.map(a => `<div class="aw ${a.style} ${a.big?'big':''}"><h3>${esc(t[a.t])}</h3><div class="s">${esc(t[a.s])}</div><div class="d">${esc(t[a.d])}</div></div>`).join('')}
    </div>
  </section>

  <footer id="contact" class="foot">
    <div class="label">${t.contact}</div>
    <div class="links">
      <a href="mailto:${S.contacts.email}">${S.contacts.email}</a>
      <a href="${S.contacts.telegram}" target="_blank" rel="noopener">telegram</a>
      <a href="${S.contacts.instagram}" target="_blank" rel="noopener">instagram</a>
      <a class="music" href="${S.contacts.music}" target="_blank" rel="noopener">${t.music}</a>
    </div>
  </footer>
</div>`;

// ---------- фуллскрин-просмотр ----------
let cur = -1, ov = null, lastFocus = null;
const EASE = 'cubic-bezier(.2,.8,.2,1)';

function clipFrom(el){
  // прямоугольник плитки → clip-path для анимации «из плитки в фуллскрин»
  const r = el.getBoundingClientRect(), vw = innerWidth, vh = innerHeight;
  const visible = r.bottom > 0 && r.top < vh;
  if (!visible) return 'inset(16% 20% round 28px)';
  return `inset(${Math.max(0,r.top)}px ${Math.max(0,vw-r.right)}px ${Math.max(0,vh-r.bottom)}px ${Math.max(0,r.left)}px round 18px)`;
}
const tileEl = i => document.querySelector(`.tile[data-i="${i}"]`);

function playerHTML(w){
  const src = `https://player.vimeo.com/video/${w.v}?autoplay=1&title=0&byline=0&portrait=0&dnt=1&color=D0F04A`;
  return `<img src="${img(w)}" alt="">
    <iframe src="${src}" title="${esc(w.brand)} — ${esc(w.title[L])}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
}

function fill(i){
  const w = W[i];
  $('.ov-bg', ov).src = img(w);
  const p = $('.player', ov);
  p.classList.toggle('vert', !!w.vert);
  p.innerHTML = playerHTML(w);
  $('.info', ov).innerHTML = `
    <div class="tags">${tag(t[w.kind])}${tag(w.role[L])}${w.award ? tag(w.award[L],'award') : ''}</div>
    <h2 id="ov-title">${esc(w.brand)}</h2>
    <div class="ttl">${esc(w.title[L])}</div>
    <div class="cr">${esc(w.credit[L])}${w.stat ? ' · ' + esc(w.stat[L]) : ''}<a href="https://vimeo.com/${w.v}" target="_blank" rel="noopener">${t.watch} ↗</a></div>`;
  history.replaceState(null, '', '#' + w.id);
}

function open(i, fromTile){
  lastFocus = document.activeElement;
  cur = i;
  ov = document.createElement('div');
  ov.className = 'ov';
  ov.setAttribute('role','dialog');
  ov.setAttribute('aria-modal','true');
  ov.setAttribute('aria-labelledby','ov-title');
  ov.innerHTML = `
    <img class="ov-bg" alt="" aria-hidden="true">
    <div class="ov-shade"></div>
    <div class="ov-in">
      <div class="ov-top">
        <a class="logo" href="#top" data-close>${logo}</a>
        <div class="ov-ctrl">${langSwitch()}
          <button class="x" data-close aria-label="${t.close}"><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 2l14 14M16 2L2 16" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></button>
        </div>
      </div>
      <div class="stage"><div class="player"></div></div>
      <div class="ov-bot">
        <div class="info"></div>
        <div class="arrows">
          <button class="pv" aria-label="${t.prev}"><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M12.5 4l-6 6 6 6" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round"/></svg></button>
          <button class="nx" aria-label="${t.next}"><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M7.5 4l6 6-6 6" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round"/></svg></button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(ov);
  document.body.classList.add('lock');
  fill(i);
  ov.addEventListener('click', e => {
    if (e.target.closest('[data-close]')) { e.preventDefault(); close(); }
    else if (e.target.closest('.pv')) step(-1);
    else if (e.target.closest('.nx')) step(1);
  });
  if (!reduced) {
    const from = fromTile ? clipFrom(fromTile) : 'inset(16% 20% round 28px)';
    ov.animate([{clipPath: from, opacity: .3}, {clipPath: 'inset(0 round 0)', opacity: 1}], {duration: 550, easing: EASE});
  }
  $('.x', ov).focus({preventScroll: true});
}

function step(d){
  const p = $('.player', ov);
  cur = (cur + d + W.length) % W.length;
  if (reduced) return fill(cur);
  p.classList.add('fade');
  setTimeout(() => { fill(cur); p.classList.remove('fade'); }, 180);
}

function close(){
  if (!ov) return;
  const el = ov, tile = tileEl(cur);
  ov = null;
  history.replaceState(null, '', location.pathname + location.search);
  document.body.classList.remove('lock');
  const done = () => { el.remove(); (tile || lastFocus)?.focus({preventScroll: true}); };
  if (reduced) return done();
  $('.player', el).innerHTML = '';  // остановить видео сразу
  el.animate([{clipPath: 'inset(0 round 0)', opacity: 1}, {clipPath: tile ? clipFrom(tile) : 'inset(16% 20% round 28px)', opacity: .2}],
    {duration: 420, easing: EASE, fill: 'forwards'}).onfinish = done;
  cur = -1;
}

// клик по плитке
$('#work').addEventListener('click', e => {
  const a = e.target.closest('.tile');
  if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
  e.preventDefault();
  open(+a.dataset.i, a);
});

// клавиатура: Esc — закрыть, стрелки — листать, Tab не выходит из окна
document.addEventListener('keydown', e => {
  if (!ov) return;
  if (e.key === 'Escape') close();
  else if (e.key === 'ArrowRight') step(1);
  else if (e.key === 'ArrowLeft') step(-1);
  else if (e.key === 'Tab') {
    const f = [...ov.querySelectorAll('a[href],button,iframe')];
    const first = f[0], last = f[f.length-1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

// прямая ссылка на работу: chuikov.work/#deadmau5
function fromHash(){
  const id = decodeURIComponent(location.hash.slice(1));
  const i = W.findIndex(w => w.id === id);
  if (i < 0) return;
  if (ov) { cur = i; fill(i); } else open(i, tileEl(i));
}
addEventListener('hashchange', fromHash);
fromHash();
})();
