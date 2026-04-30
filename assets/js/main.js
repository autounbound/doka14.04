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
  /*
   * FIX: navTR previously used ${R} for all page links, which resolves to the
   * EN root when called from /tr/ pages. All internal TR page links must use
   * ${R}tr/ so they resolve to /tr/page paths regardless of nesting depth.
   * The ${R}assets/... paths remain as-is because assets are shared.
   * The language-switcher link ${R}${equiv} uses LANG_EQUIV set per-page and
   * is already correct — do NOT add tr/ prefix there.
   *
   * A .nav__lang--mobile <li> is appended inside the <ul> so that the
   * language switcher is accessible when the mobile menu is open.
   * It is hidden on desktop via CSS (display:none on .nav__lang--mobile).
   */

  const navEN = `
<nav class="nav" id="mainNav">
  <div class="nav__container">
    <a href="${R}index.html" class="nav__logo"><img src="${R}assets/images/logo.svg" alt="DOKA Mining"></a>
    <ul class="nav__links" id="navLinks">
      <li class="nav__item nav__item--dropdown">
        <a href="${R}about/overview.html">About <span class="nav__chevron" aria-hidden="true"></span></a>
        <div class="nav__dropdown">
          <a href="${R}about/overview.html">Overview</a>
          <a href="${R}about/vision.html">Vision, Mission &amp; Values</a>
          <a href="${R}about/social-responsibility.html">Social Responsibility</a>
        </div>
      </li>
      <li class="nav__item"><a href="${R}sustainability.html">Sustainability</a></li>
      <li class="nav__item nav__item--dropdown">
        <a href="${R}portfolio/index.html">Our Portfolio <span class="nav__chevron" aria-hidden="true"></span></a>
        <div class="nav__dropdown">
          <a href="${R}portfolio/index.html">Overview</a>
          <a href="${R}portfolio/kirsehir.html">K&#x131;r&#x15F;ehir</a>
          <a href="${R}portfolio/bayburt.html">Bayburt</a>
          <a href="${R}portfolio/yozgat.html">Yozgat</a>
        </div>
      </li>
      <li class="nav__item"><a href="${R}investor-relations.html">Investor Relations</a></li>
      <li class="nav__item"><a href="${R}newsroom.html">Newsroom</a></li>
      <li class="nav__item"><a href="${R}contact.html">Contact</a></li>
      <li class="nav__item nav__lang--mobile"><a href="${R}${equiv}">TR &mdash; T&uuml;rk&ccedil;e</a></li>
    </ul>
    <div class="nav__lang" id="navLang">
      <a href="#" class="active">EN</a><span>|</span><a href="${R}${equiv}">TR</a>
    </div>
    <button class="nav__hamburger" id="navHamburger" aria-label="Open navigation menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

  const navTR = `
<nav class="nav" id="mainNav">
  <div class="nav__container">
    <a href="${R}tr/index.html" class="nav__logo"><img src="${R}assets/images/logo-tr.svg" alt="DOKA Madencilik"></a>
    <ul class="nav__links" id="navLinks">
      <li class="nav__item nav__item--dropdown">
        <a href="${R}tr/about/overview.html">Hakk&#x131;m&#x131;zda <span class="nav__chevron" aria-hidden="true"></span></a>
        <div class="nav__dropdown">
          <a href="${R}tr/about/overview.html">Genel Bak&#x131;&#x15F;</a>
          <a href="${R}tr/about/vision.html">Vizyon, Misyon &amp; De&#x11F;erler</a>
          <a href="${R}tr/about/social-responsibility.html">Sosyal Sorumluluk</a>
        </div>
      </li>
      <li class="nav__item"><a href="${R}tr/sustainability.html">S&uuml;rd&uuml;r&uuml;lebilirlik</a></li>
      <li class="nav__item nav__item--dropdown">
        <a href="${R}tr/portfolio/index.html">Portf&ouml;y&uuml;m&uuml;z <span class="nav__chevron" aria-hidden="true"></span></a>
        <div class="nav__dropdown">
          <a href="${R}tr/portfolio/index.html">Genel Bak&#x131;&#x15F;</a>
          <a href="${R}tr/portfolio/kirsehir.html">K&#x131;r&#x15F;ehir</a>
          <a href="${R}tr/portfolio/bayburt.html">Bayburt</a>
          <a href="${R}tr/portfolio/yozgat.html">Yozgat</a>
        </div>
      </li>
      <li class="nav__item"><a href="${R}tr/investor-relations.html">Yat&#x131;r&#x131;mc&#x131; &#x130;li&#x15F;kileri</a></li>
      <li class="nav__item"><a href="${R}tr/newsroom.html">Haberler</a></li>
      <li class="nav__item"><a href="${R}tr/contact.html">&#x130;leti&#x15F;im</a></li>
      <li class="nav__item nav__lang--mobile"><a href="${R}${equiv}">EN &mdash; English</a></li>
    </ul>
    <div class="nav__lang" id="navLang">
      <a href="${R}${equiv}">EN</a><span>|</span><a href="#" class="active">TR</a>
    </div>
    <button class="nav__hamburger" id="navHamburger" aria-label="Navigasyon men&uuml;s&uuml;n&uuml; a&ccedil;" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

  /* ── FOOTERS ───────────────────────────────────────────────── */
  /*
   * FIX: footerTR previously linked to EN pages. All internal TR links
   * must use ${R}tr/ prefix, matching the navTR fix above.
   * Asset paths (images) remain ${R}assets/... — shared, unchanged.
   */

  const footerEN = `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__logo">
        <img src="${R}assets/images/logo.svg" alt="DOKA Mining">
        <p class="footer__tagline">Responsible base and precious metals mining across Anatolia, guided by environmental stewardship and long-term value creation.</p>
        <p class="footer__group-credit">A member of the <a href="https://oltankoleogluenerji.com/en" target="_blank" rel="noopener noreferrer">Oltankoleoglu Group</a></p>
      </div>
      <div class="footer__col"><h5>Company</h5><ul>
        <li><a href="${R}about/overview.html">About DOKA</a></li>
        <li><a href="${R}about/vision.html">Vision &amp; Values</a></li>
        <li><a href="${R}about/social-responsibility.html">Social Responsibility</a></li>
        <li><a href="${R}sustainability.html">Sustainability</a></li>
      </ul></div>
      <div class="footer__col"><h5>Operations</h5><ul>
        <li><a href="${R}portfolio/index.html">Our Portfolio</a></li>
        <li><a href="${R}portfolio/kirsehir.html">K&#x131;r&#x15F;ehir</a></li>
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
        <a href="#">Privacy Policy</a>
        <a href="#">Legal Notice</a>
        <a href="#">Cookie Policy</a>
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
        <p class="footer__tagline">Anadolu'nun de&#x11F;erli madenlerini &ccedil;evre sorumlulu&#x11F;u ve uzun vadeli de&#x11F;er yaratma ilkeleriyle &ccedil;&#x131;kar&#x131;yoruz.</p>
        <p class="footer__group-credit"><a href="https://oltankoleogluenerji.com" target="_blank" rel="noopener noreferrer">Oltankoleoglu Grubu</a> b&uuml;nyesinde faaliyet g&ouml;stermektedir.</p>
      </div>
      <div class="footer__col"><h5>&#x15E;irket</h5><ul>
        <li><a href="${R}tr/about/overview.html">DOKA Hakk&#x131;nda</a></li>
        <li><a href="${R}tr/about/vision.html">Vizyon &amp; De&#x11F;erler</a></li>
        <li><a href="${R}tr/about/social-responsibility.html">Sosyal Sorumluluk</a></li>
        <li><a href="${R}tr/sustainability.html">S&uuml;rd&uuml;r&uuml;lebilirlik</a></li>
      </ul></div>
      <div class="footer__col"><h5>Operasyonlar</h5><ul>
        <li><a href="${R}tr/portfolio/index.html">Portf&ouml;y&uuml;m&uuml;z</a></li>
        <li><a href="${R}tr/portfolio/kirsehir.html">K&#x131;r&#x15F;ehir</a></li>
        <li><a href="${R}tr/portfolio/bayburt.html">Bayburt</a></li>
        <li><a href="${R}tr/portfolio/yozgat.html">Yozgat</a></li>
      </ul></div>
      <div class="footer__col"><h5>Yat&#x131;r&#x131;mc&#x131; &amp; Medya</h5><ul>
        <li><a href="${R}tr/investor-relations.html">Yat&#x131;r&#x131;mc&#x131; &#x130;li&#x15F;kileri</a></li>
        <li><a href="${R}tr/newsroom.html">Haberler</a></li>
        <li><a href="${R}tr/contact.html">&#x130;leti&#x15F;im</a></li>
      </ul></div>
    </div>
    <div class="footer__bottom">
      <p class="footer__copy">&copy; 2025 DOKA Madencilik. T&uuml;m haklar&#x131; sakl&#x131;d&#x131;r.</p>
      <div class="footer__bottom-links">
        <a href="#">Gizlilik Politikas&#x131;</a>
        <a href="#">Yasal Uyar&#x131;</a>
        <a href="#">&#xC7;erez Politikas&#x131;</a>
      </div>
    </div>
  </div>
</footer>`;

  /* ── INJECT MOBILE CSS ─────────────────────────────────────── */
  /*
   * Injecting mobile.css here means every page that loads main.js
   * automatically gets the mobile styles — no HTML changes needed.
   * Placed before nav injection so styles are ready on first paint.
   */
  (function () {
    const link = document.createElement('link');
    link.rel   = 'stylesheet';
    link.href  = R + 'assets/css/mobile.css';
    document.head.appendChild(link);
  }());

  /* ── INJECT NAV + FOOTER ────────────────────────────────────── */
  const navTarget    = document.getElementById('nav-placeholder');
  const footerTarget = document.getElementById('footer-placeholder');
  if (navTarget)    navTarget.outerHTML    = isTR ? navTR    : navEN;
  if (footerTarget) footerTarget.outerHTML = isTR ? footerTR : footerEN;

  /* ── ACTIVE LINK ───────────────────────────────────────────── */
  /*
   * FIX: previous approach used endsWith(filename) which incorrectly
   * highlighted "Portfolio" when on any index.html page (including news/index.html).
   * New approach resolves each href to an absolute pathname and compares exactly.
   */
  document.querySelectorAll('.nav__links a, .nav__dropdown a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    try {
      const resolved = new URL(href, window.location.href).pathname;
      if (resolved === window.location.pathname) link.classList.add('active');
    } catch (e) { /* ignore malformed hrefs */ }
  });

  /* ── SCROLL NAV ────────────────────────────────────────────── */
  const navEl = document.getElementById('mainNav');
  if (navEl) {
    const onScroll = () => navEl.classList.toggle('scrolled', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── MOBILE MENU ───────────────────────────────────────────── */
  const hamburger = document.getElementById('navHamburger');
  const navLinks  = document.getElementById('navLinks');

  function openMenu() {
    if (!navLinks || !hamburger) return;
    navLinks.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
  }

  function closeMenu() {
    if (!navLinks || !hamburger) return;
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
    hamburger.querySelectorAll('span').forEach(s => {
      s.style.transform = '';
      s.style.opacity   = '';
    });
    /* also collapse any open dropdown items */
    document.querySelectorAll('.nav__item--dropdown.open').forEach(item => {
      item.classList.remove('open');
    });
  }

  if (hamburger && navLinks) {
    /* Toggle on hamburger click */
    hamburger.addEventListener('click', e => {
      e.stopPropagation();
      navLinks.classList.contains('open') ? closeMenu() : openMenu();
    });

    /* Accordion dropdowns on mobile/touch */
    document.querySelectorAll('.nav__item--dropdown').forEach(item => {
      const trigger = item.querySelector(':scope > a');
      if (!trigger) return;
      trigger.addEventListener('click', e => {
        /* Use pointer type: if touch or narrow screen treat as accordion */
        const isMobileView = window.innerWidth <= 900 ||
          (e.pointerType && e.pointerType !== 'mouse');
        if (isMobileView) {
          e.preventDefault();
          /* Close siblings */
          document.querySelectorAll('.nav__item--dropdown.open').forEach(other => {
            if (other !== item) other.classList.remove('open');
          });
          item.classList.toggle('open');
        }
      });
    });

    /* Close on ESC */
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMenu();
    });

    /* Close on click outside the nav */
    document.addEventListener('click', e => {
      if (navLinks.classList.contains('open') && !e.target.closest('#mainNav')) {
        closeMenu();
      }
    });
  }

  /* ── HERO SCROLL INDICATOR — MOBILE FADE ──────────────────── */
  /*
   * On mobile the indicator is position:fixed (see mobile.css).
   * Fade it out once the user scrolls past 55% of the hero height.
   * On desktop it stays position:absolute clipped by overflow:hidden — no JS needed.
   */
  const heroScrollEl = document.querySelector('.hero__scroll');
  const heroSectionEl = document.querySelector('.hero');
  if (heroScrollEl && heroSectionEl) {
    const onHeroScroll = () => {
      if (window.innerWidth <= 900) {
        heroScrollEl.classList.toggle(
          'hero__scroll--hidden',
          window.scrollY > heroSectionEl.offsetHeight * 0.55
        );
      } else {
        heroScrollEl.classList.remove('hero__scroll--hidden');
      }
    };
    window.addEventListener('scroll', onHeroScroll, { passive: true });
    window.addEventListener('resize', onHeroScroll, { passive: true });
    onHeroScroll();
  }

  /* ── SCROLL REVEAL ─────────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });
    revealEls.forEach(el => obs.observe(el));
  }

})();
