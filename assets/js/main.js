/* ============================================================
   DOKA MINING — Main JavaScript (Bilingual)
   Each page must set before loading this script:
     const ROOT_PATH  = '' | '../' | '../../'
     const LANG       = 'en' | 'tr'
     const LANG_EQUIV = 'path/relative/to/ROOT_PATH/equiv-page.html'
   ============================================================ */
(function () {
  'use strict';

  const R     = typeof ROOT_PATH  !== 'undefined' ? ROOT_PATH  : '';
  const lang  = typeof LANG       !== 'undefined' ? LANG       : 'en';
  const equiv = typeof LANG_EQUIV !== 'undefined' ? LANG_EQUIV : 'index.html';
  const isTR  = (lang === 'tr');

  /* ── NAVS ──────────────────────────────────────────────────── */
  const navEN = `
<nav class="nav" id="mainNav">
  <div class="nav__container">
    <a href="${R}index.html" class="nav__logo"><img src="${R}assets/images/logo.svg" alt="DOKA Mining"></a>
    <ul class="nav__links" id="navLinks">
      <li class="nav__item nav__item--dropdown">
        <a href="${R}about/overview.html">About</a>
        <div class="nav__dropdown">
          <a href="${R}about/overview.html">Overview</a>
          <a href="${R}about/vision.html">Vision, Mission &amp; Values</a>
          <a href="${R}about/social-responsibility.html">Social Responsibility</a>
        </div>
      </li>
      <li class="nav__item"><a href="${R}sustainability.html">Sustainability</a></li>
      <li class="nav__item nav__item--dropdown">
        <a href="${R}portfolio/index.html">Our Portfolio</a>
        <div class="nav__dropdown">
          <a href="${R}portfolio/index.html">Overview</a>
          <a href="${R}portfolio/kirsehir.html">Kırşehir</a>
          <a href="${R}portfolio/bayburt.html">Bayburt</a>
          <a href="${R}portfolio/yozgat.html">Yozgat</a>
        </div>
      </li>
      <li class="nav__item"><a href="${R}investor-relations.html">Investor Relations</a></li>
      <li class="nav__item"><a href="${R}newsroom.html">Newsroom</a></li>
      <li class="nav__item"><a href="${R}contact.html">Contact</a></li>
    </ul>
    <div class="nav__lang" id="navLang">
      <a href="#" class="active">EN</a><span>|</span><a href="${R}${equiv}">TR</a>
    </div>
    <button class="nav__hamburger" id="navHamburger" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
</nav>`;

  const navTR = `
<nav class="nav" id="mainNav">
  <div class="nav__container">
    <a href="${R}index.html" class="nav__logo"><img src="${R}assets/images/logo-tr.svg" alt="DOKA Madencilik"></a>
    <ul class="nav__links" id="navLinks">
      <li class="nav__item nav__item--dropdown">
        <a href="${R}about/overview.html">Hakkımızda</a>
        <div class="nav__dropdown">
          <a href="${R}about/overview.html">Genel Bakış</a>
          <a href="${R}about/vision.html">Vizyon, Misyon &amp; Değerler</a>
          <a href="${R}about/social-responsibility.html">Sosyal Sorumluluk</a>
        </div>
      </li>
      <li class="nav__item"><a href="${R}sustainability.html">Sürdürülebilirlik</a></li>
      <li class="nav__item nav__item--dropdown">
        <a href="${R}portfolio/index.html">Portföyümüz</a>
        <div class="nav__dropdown">
          <a href="${R}portfolio/index.html">Genel Bakış</a>
          <a href="${R}portfolio/kirsehir.html">Kırşehir</a>
          <a href="${R}portfolio/bayburt.html">Bayburt</a>
          <a href="${R}portfolio/yozgat.html">Yozgat</a>
        </div>
      </li>
      <li class="nav__item"><a href="${R}investor-relations.html">Yatırımcı İlişkileri</a></li>
      <li class="nav__item"><a href="${R}newsroom.html">Haberler</a></li>
      <li class="nav__item"><a href="${R}contact.html">İletişim</a></li>
    </ul>
    <div class="nav__lang" id="navLang">
      <a href="${R}${equiv}">EN</a><span>|</span><a href="#" class="active">TR</a>
    </div>
    <button class="nav__hamburger" id="navHamburger" aria-label="Menü"><span></span><span></span><span></span></button>
  </div>
</nav>`;

  /* ── FOOTERS ───────────────────────────────────────────────── */
  const footerEN = `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__logo">
        <img src="${R}assets/images/logo.svg" alt="DOKA Mining">
        <p class="footer__tagline">Responsible precious metals mining across Anatolia, guided by environmental stewardship and long-term value creation.</p>
      </div>
      <div class="footer__col"><h5>Company</h5><ul>
        <li><a href="${R}about/overview.html">About DOKA</a></li>
        <li><a href="${R}about/vision.html">Vision &amp; Values</a></li>
        <li><a href="${R}about/social-responsibility.html">Social Responsibility</a></li>
        <li><a href="${R}sustainability.html">Sustainability</a></li>
      </ul></div>
      <div class="footer__col"><h5>Operations</h5><ul>
        <li><a href="${R}portfolio/index.html">Our Portfolio</a></li>
        <li><a href="${R}portfolio/kirsehir.html">Kırşehir</a></li>
        <li><a href="${R}portfolio/bayburt.html">Bayburt</a></li>
        <li><a href="${R}portfolio/yozgat.html">Yozgat</a></li>
      </ul></div>
      <div class="footer__col"><h5>Investors &amp; Media</h5><ul>
        <li><a href="${R}investor-relations.html">Investor Relations</a></li>
        <li><a href="${R}newsroom.html">Newsroom</a></li>
        <li><a href="${R}contact.html">Contact</a></li>
      </ul></div>
    </div>
    <div class="footer__bottom">
      <p class="footer__copy">&copy; 2025 DOKA Madencilik. All rights reserved.</p>
      <div class="footer__bottom-links">
        <a href="#">Privacy Policy</a><a href="#">Legal Notice</a><a href="#">Cookie Policy</a>
      </div>
    </div>
  </div>
</footer>`;

  const footerTR = `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__logo">
        <img src="${R}assets/images/logo-tr.svg" alt="DOKA Madencilik">
        <p class="footer__tagline">Anadolu'nun değerli madenlerini çevre sorumluluğu ve uzun vadeli değer yaratma ilkeleriyle çıkarıyoruz.</p>
      </div>
      <div class="footer__col"><h5>Şirket</h5><ul>
        <li><a href="${R}about/overview.html">DOKA Hakkında</a></li>
        <li><a href="${R}about/vision.html">Vizyon &amp; Değerler</a></li>
        <li><a href="${R}about/social-responsibility.html">Sosyal Sorumluluk</a></li>
        <li><a href="${R}sustainability.html">Sürdürülebilirlik</a></li>
      </ul></div>
      <div class="footer__col"><h5>Operasyonlar</h5><ul>
        <li><a href="${R}portfolio/index.html">Portföyümüz</a></li>
        <li><a href="${R}portfolio/kirsehir.html">Kırşehir</a></li>
        <li><a href="${R}portfolio/bayburt.html">Bayburt</a></li>
        <li><a href="${R}portfolio/yozgat.html">Yozgat</a></li>
      </ul></div>
      <div class="footer__col"><h5>Yatırımcı &amp; Medya</h5><ul>
        <li><a href="${R}investor-relations.html">Yatırımcı İlişkileri</a></li>
        <li><a href="${R}newsroom.html">Haberler</a></li>
        <li><a href="${R}contact.html">İletişim</a></li>
      </ul></div>
    </div>
    <div class="footer__bottom">
      <p class="footer__copy">&copy; 2025 DOKA Madencilik. Tüm hakları saklıdır.</p>
      <div class="footer__bottom-links">
        <a href="#">Gizlilik Politikası</a><a href="#">Yasal Uyarı</a><a href="#">Çerez Politikası</a>
      </div>
    </div>
  </div>
</footer>`;

  /* ── INJECT ────────────────────────────────────────────────── */
  const navTarget    = document.getElementById('nav-placeholder');
  const footerTarget = document.getElementById('footer-placeholder');
  if (navTarget)    navTarget.outerHTML    = isTR ? navTR    : navEN;
  if (footerTarget) footerTarget.outerHTML = isTR ? footerTR : footerEN;

  /* ── ACTIVE LINK ───────────────────────────────────────────── */
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav__links a, .nav__dropdown a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href !== '#' && currentPath.endsWith(href.replace(/^.*\//, '')))
      link.classList.add('active');
  });

  /* ── SCROLL NAV ────────────────────────────────────────────── */
  const nav = document.getElementById('mainNav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── HAMBURGER ─────────────────────────────────────────────── */
  const hamburger = document.getElementById('navHamburger');
  const navLinks  = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
      const spans = hamburger.querySelectorAll('span');
      if (open) {
        spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
    document.querySelectorAll('.nav__item--dropdown').forEach(item => {
      item.querySelector('a').addEventListener('click', e => {
        if (window.innerWidth <= 768) { e.preventDefault(); item.classList.toggle('open'); }
      });
    });
  }

  /* ── SCROLL REVEAL ─────────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => obs.observe(el));
  }

})();
