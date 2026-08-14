/* Aloha Window Bros · analytics event layer (GA4 · G-MRSP8D9CQG)
 *
 * The gtag base snippet and the five conversion events (phone_call,
 * email_click, text_click, quote_click, reviews_click) live in
 * src/layouts/Base.astro and are NOT repeated here. This file is the layer
 * underneath them: how far people read, which services they look at, where
 * they hesitate, and every step of the quote form up to the moment it sends.
 *
 * Rules:
 *  - observes only. Nothing here changes behaviour, and deleting this file
 *    leaves the site working exactly as it does now.
 *  - never sends a field VALUE that a person typed. Names, phone numbers,
 *    emails and the message box send only "filled / not filled". The two
 *    dropdowns (city, service) send their choice, which is a menu option we
 *    wrote, not personal information.
 *  - custom event names never collide with GA4 Enhanced Measurement's own,
 *    or with the conversion events already firing in Base.astro.
 */
(function () {
  'use strict';

  if (typeof window.gtag !== 'function') return;

  var PATH = location.pathname.replace(/\/$/, '') || '/';
  var CITIES = ['agoura', 'camarillo', 'newbury', 'ojai', 'oxnard', 'santa-barbara', 'simi-valley', 'thousand-oaks', 'ventura', 'westlake'];
  var SLUG = PATH.split('/').filter(Boolean).pop() || 'home';
  var GROUP =
    PATH === '/' ? 'home' :
    CITIES.indexOf(SLUG) > -1 ? 'city' :
    PATH.indexOf('/services') === 0 ? 'service' :
    PATH.indexOf('/blog') === 0 ? 'blog' :
    PATH.indexOf('/contact') === 0 ? 'contact' :
    'other';

  var sent = {};
  var engagedMs = 0;
  var lastTick = Date.now();

  function send(name, params) {
    try {
      var p = params || {};
      p.page_name = SLUG;
      p.page_group = GROUP;
      window.gtag('event', name, p);
    } catch (e) {}
  }
  function once(key, name, params) {
    if (sent[key]) return;
    sent[key] = 1;
    send(name, params);
  }
  function label(el) {
    return (el.getAttribute('aria-label') || el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 60);
  }
  function zone(el) {
    var s = el.closest ? el.closest('section[id], section[class], footer, header, nav') : null;
    if (!s) return 'page';
    return s.id || (s.className || '').split(/\s+/)[0] || s.tagName.toLowerCase();
  }
  function hostOf(h) { try { return new URL(h, location.href).hostname; } catch (e) { return 'unknown'; } }

  /* ------------------------------------------------------------ arrival --- */

  var q = new URLSearchParams(location.search);

  try {
    window.gtag('set', 'user_properties', {
      viewport: window.innerWidth < 700 ? 'phone' : window.innerWidth < 1100 ? 'tablet' : 'desktop',
      referrer_host: document.referrer ? hostOf(document.referrer) : 'direct',
    });
  } catch (e) {}

  send('session_context', {
    landing_page: SLUG,
    referrer_host: document.referrer ? hostOf(document.referrer) : 'direct',
    utm_source: q.get('utm_source') || 'none',
    utm_campaign: q.get('utm_campaign') || 'none',
    /* Which city page or CTA sent them to /contact/ — the quote form is the
       whole point of the site, so knowing its inbound path matters. */
    from: q.get('from') || 'none',
  });

  /* -------------------------------------------------------------- clicks --- */
  /* tel:, mailto:, sms:, /contact/ and the reviews link are already tracked
     as conversions in Base.astro. Skipped here on purpose: double-counting a
     phone call would quietly inflate every report we send Aloha. */

  document.addEventListener('click', function (ev) {
    var el = ev.target.closest ? ev.target.closest('a, button, summary, .faq-question') : null;
    if (!el) return;
    var href = el.getAttribute ? (el.getAttribute('href') || '') : '';
    if (/^(tel:|mailto:|sms:)/.test(href)) return;
    if (href === '/contact/' || href.indexOf('/contact/?') === 0) return;
    if (href.indexOf('google.com/search') > -1 && href.indexOf('reviews') > -1) return;

    var base = { label: label(el), zone: zone(el) };

    if (/^https?:\/\//i.test(href) && hostOf(href) !== location.hostname) {
      return send('outbound_click', Object.assign(base, { destination: hostOf(href) }));
    }
    if (el.tagName === 'SUMMARY' || (el.className || '').indexOf('faq') > -1) {
      return send('faq_open', { question: label(el), zone: base.zone });
    }
    if (href && href.charAt(0) === '/') {
      var to = href.split('?')[0].split('/').filter(Boolean).pop() || 'home';
      var inNav = !!(el.closest && el.closest('header, nav'));
      var inFoot = !!(el.closest && el.closest('footer'));
      return send(inNav ? 'nav_click' : inFoot ? 'footer_click' : 'internal_nav',
        Object.assign(base, { destination: to, is_city_page: CITIES.indexOf(to) > -1 ? 'yes' : 'no' }));
    }
    if (el.tagName === 'BUTTON' && el.type !== 'submit') {
      return send('ui_click', base);
    }
  }, true);

  /* --------------------------------------------------------- quote form --- */

  var form = document.getElementById('inquiry-form');
  if (form) {
    var startedAt = 0;

    form.addEventListener('focusin', function () {
      if (!sent['fs']) startedAt = Date.now();
      once('fs', 'form_start', { form: 'quote_request' });
    });

    form.addEventListener('change', function (ev) {
      var f = ev.target;
      if (!f.name || f.name === 'company') return; /* company = honeypot */
      var p = { form: 'quote_request', field: f.name };
      /* Menu choices only. Never a typed value. */
      if (f.name === 'city' || f.name === 'service') p.choice = String(f.value).slice(0, 40);
      once('ff:' + f.name, 'form_field', p);
    });

    form.addEventListener('submit', function () {
      sent['submitted'] = 1;
      send('form_submit', {
        form: 'quote_request',
        fields_filled: filled(form),
        service: value(form, 'service'),
        city: value(form, 'city'),
        has_message: value(form, 'message') ? 'yes' : 'no',
        seconds_to_submit: startedAt ? Math.round((Date.now() - startedAt) / 1000) : 0,
      });
    });

    /* The form posts by fetch and writes the outcome into #form-status, so
       success and failure are only visible in the DOM. Watch it rather than
       reaching into the page's own script. */
    var status = document.getElementById('form-status');
    if (status && 'MutationObserver' in window) {
      new MutationObserver(function () {
        var t = (status.textContent || '').trim();
        if (!t) return;
        var bad = /sorry|error|problem|try again|failed|wrong/i.test(t);
        once(bad ? 'ferr' : 'fok', bad ? 'form_error' : 'form_success', {
          form: 'quote_request',
          message: t.slice(0, 80),
        });
      }).observe(status, { childList: true, characterData: true, subtree: true });
    }

    window.addEventListener('pagehide', function () {
      if (sent['fs'] && !sent['submitted']) {
        send('form_abandon', { form: 'quote_request', fields_filled: filled(form), last_field: sent['lastField'] || 'unknown' });
      }
    });
    form.addEventListener('focusout', function (ev) { if (ev.target.name) sent['lastField'] = ev.target.name; });
  }

  function filled(f) {
    var n = 0;
    Array.prototype.forEach.call(f.elements, function (el) {
      if (el.name && el.name !== 'company' && el.type !== 'submit' && String(el.value).trim()) n++;
    });
    return n;
  }
  function value(f, name) {
    var el = f.elements[name];
    return el ? String(el.value).slice(0, 40) : '';
  }

  /* -------------------------------------------------------- reading depth --- */

  var MARKS = [25, 50, 75, 90, 100];
  window.addEventListener('scroll', throttle(function () {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    if (max <= 0) return;
    var pct = Math.round((h.scrollTop / max) * 100);
    MARKS.forEach(function (m) { if (pct >= m) once('sd' + m, 'scroll_depth', { percent: m }); });
  }, 400), { passive: true });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting || !e.target.id) return;
        once('sec:' + e.target.id, 'section_view', { section: e.target.id });
      });
    }, { threshold: 0.4 });
    document.querySelectorAll('section[id]').forEach(function (s) { io.observe(s); });
  }

  setInterval(function () {
    var now = Date.now();
    if (document.visibilityState === 'visible') engagedMs += now - lastTick;
    lastTick = now;
    [15, 30, 60, 120, 300].forEach(function (s) {
      if (engagedMs >= s * 1000) once('et' + s, 'engaged_time', { seconds: s });
    });
  }, 5000);

  /* ------------------------------------------------------------ friction --- */

  var clicks = [];
  document.addEventListener('click', function (ev) {
    /* Keyboard activation (Enter on a link) reports 0,0. Three of those in a
       row is a person tabbing, not a person hammering a dead button. */
    if (!ev.clientX && !ev.clientY) return;
    var now = Date.now();
    clicks.push({ t: now, x: ev.clientX, y: ev.clientY });
    clicks = clicks.filter(function (c) { return now - c.t < 600; });
    if (clicks.length >= 3) {
      var a = clicks[0], b = clicks[clicks.length - 1];
      if (Math.abs(a.x - b.x) < 30 && Math.abs(a.y - b.y) < 30) {
        clicks = [];
        send('rage_click', { zone: zone(ev.target), element: (ev.target.tagName || '').toLowerCase() });
      }
    }
  }, true);

  document.addEventListener('copy', function () {
    /* Length only. People copy the phone number and the service list; we want
       to know THAT they did, never what the page said. */
    var sel = String(window.getSelection ? window.getSelection() : '').trim();
    if (sel) send('copy_text', { length: sel.length });
  });

  window.addEventListener('beforeprint', function () { send('page_print', {}); });

  document.addEventListener('mouseout', function (ev) {
    if (ev.clientY <= 0 && !ev.relatedTarget) once('exit', 'exit_intent', { scrolled: sent['sd50'] ? 'past_half' : 'shallow' });
  });

  window.addEventListener('error', function (ev) {
    send('js_error', {
      message: String(ev.message || '').slice(0, 100),
      source: String(ev.filename || '').split('/').pop().slice(0, 50),
      line: ev.lineno || 0,
    });
  });

  if ('PerformanceObserver' in window) {
    var lcp = 0, cls = 0, inp = 0;
    obs('largest-contentful-paint', function (e) { lcp = Math.round(e.startTime); });
    obs('layout-shift', function (e) { if (!e.hadRecentInput) cls += e.value; });
    obs('event', function (e) { if (e.duration > inp) inp = Math.round(e.duration); }, { durationThreshold: 40 });
    window.addEventListener('pagehide', function () {
      once('v', 'web_vitals', { lcp_ms: lcp, cls: Math.round(cls * 1000) / 1000, inp_ms: inp });
    });
  }

  function obs(type, fn, extra) {
    try {
      new PerformanceObserver(function (l) { l.getEntries().forEach(fn); })
        .observe(Object.assign({ type: type, buffered: true }, extra || {}));
    } catch (e) {}
  }

  function throttle(fn, ms) {
    var last = 0, timer;
    return function () {
      var now = Date.now();
      if (now - last >= ms) { last = now; fn(); }
      else { clearTimeout(timer); timer = setTimeout(function () { last = Date.now(); fn(); }, ms); }
    };
  }
})();
