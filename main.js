const root = document.documentElement;

// ----- language -----
function setLang(lang) {
  root.lang = lang;
  root.dataset.lang = lang;
  try { localStorage.setItem('lang', lang); } catch (e) {}
  document.querySelectorAll('.status__lang').forEach((b) => {
    b.setAttribute('aria-label', b.dataset[lang === 'en' ? 'labelEn' : 'labelEs']);
  });
}
setLang(root.dataset.lang || 'en');
document.querySelectorAll('[data-action="lang"]').forEach((b) =>
  b.addEventListener('click', () => setLang(root.dataset.lang === 'en' ? 'es' : 'en'))
);

// ----- Girona clock -----
const clock = document.getElementById('clock');
const fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Madrid', hour: '2-digit', minute: '2-digit' });
function tick() {
  const now = new Date();
  clock.textContent = fmt.format(now);
  clock.dateTime = now.toISOString();
}
tick();
setInterval(tick, 20000);

// ----- key bar: digits work like the function keys on the terminal -----
const keys = [...document.querySelectorAll('.keys [data-key]')];
document.addEventListener('keydown', (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey || e.repeat) return;
  const t = e.target;
  if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
  const k = keys.find((el) => el.dataset.key === e.key);
  if (!k) return;
  e.preventDefault();
  k.focus({ preventScroll: true });
  k.click();
});

// ----- light up the key of the section on screen -----
const byId = new Map();
keys.forEach((k) => {
  const id = k.dataset.target || (k.getAttribute('href') || '').replace(/^#/, '');
  if (id && document.getElementById(id)) byId.set(id, k);
});
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    keys.forEach((k) => k.removeAttribute('aria-current'));
    const k = byId.get(en.target.id);
    if (k) k.setAttribute('aria-current', 'true');
  });
}, { rootMargin: '-45% 0px -50% 0px' });
byId.forEach((_, id) => io.observe(document.getElementById(id)));
