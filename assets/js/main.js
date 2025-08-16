// Main site JS: nav, year, i18n toggle, and lightweight analytics
(function(){
  // Year
  var yEl = document.getElementById('year');
  if(yEl) yEl.textContent = new Date().getFullYear();

  // Lightweight analytics
  function track(event, payload){
    try{
      if(window.dataLayer){
        window.dataLayer.push(Object.assign({event:event}, payload||{}));
      } else {
        console.info('[analytics]', event, payload||{});
      }
    }catch(e){/* noop */}
  }
  // view_page on load
  track('view_page', {path: location.pathname + location.search});

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  if(toggle && menu){
    toggle.addEventListener('click', function(){
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('open');
    });
  }

  // Click analytics for elements tagged with data-ev
  document.addEventListener('click', function(e){
    var el = e.target.closest('[data-ev]');
    if(!el) return;
    track(el.getAttribute('data-ev'), {label: el.getAttribute('data-label')});
  });

  // Generic form submit tracking when form has data-ev
  document.addEventListener('submit', function(e){
    var form = e.target.closest('form[data-ev]');
    if(!form) return;
    var ev = form.getAttribute('data-ev');
    var label = form.getAttribute('data-label');
    track(ev, {label: label});
  }, true);

  // Subscribe form handling (demo)
  var subForm = document.querySelector('.subscribe-form');
  if(subForm){
    subForm.addEventListener('submit', function(e){
      e.preventDefault();
      var email = subForm.querySelector('input[type="email"]').value;
      track('cta_click', {label:'subscribe'});
      subForm.innerHTML = '<p>Thanks! You\'re subscribed: '+ email +'</p>';
    });
  }

  // i18n: EN/AR toggle based on ?lang=ar
  var params = new URLSearchParams(location.search);
  var lang = params.get('lang') || 'en';
  var isAR = lang.toLowerCase() === 'ar';
  document.documentElement.lang = isAR ? 'ar' : 'en';
  document.documentElement.dir = isAR ? 'rtl' : 'ltr';
  var langLinks = document.querySelectorAll('.lang-switch a');
  langLinks.forEach(function(a){
    var ar = a.getAttribute('lang') === 'ar';
    if((isAR && ar) || (!isAR && !ar)) a.classList.add('active'); else a.classList.remove('active');
  });
  // Minimal key string translations
  var dict = {
    ar: {
      getPassport: 'احصل على جواز الجاهزية المعملية',
      bookSession: 'سجّل جلسة بإشراف',
      partnerLab: 'شراكة معمل/جامعة',
      safetyPolicies: 'السلامة والسياسات'
    }
  };
  // Swap CTA texts when possible
  if(isAR){
    var map = [
      {sel: '.hero .btn.primary', key: 'getPassport'},
      {sel: '.hero .btn.outline', key: 'partnerLab'}
    ];
    map.forEach(function(m){
      var el = document.querySelector(m.sel);
      if(el && dict.ar[m.key]) el.textContent = dict.ar[m.key];
    });
  }

  // Track language switch clicks
  langLinks.forEach(function(a){
    a.addEventListener('click', function(){
      track('language_switch', {label: isAR ? 'ar→en' : 'en→ar'});
    });
  });

  // Tag CTA buttons with analytics labels if missing
  document.querySelectorAll('.btn').forEach(function(b){
    if(!b.hasAttribute('data-ev')){
      var label = b.textContent.trim().toLowerCase().replace(/\s+/g,'_');
      b.setAttribute('data-ev','cta_click');
      b.setAttribute('data-label', label);
    }
  });
})();

// Progressive enhancements: reveal + parallax + speed tweaks
(function(){
  // Passive listeners where safe
  var passive = {passive:true};

  // Scroll reveal
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if('IntersectionObserver' in window && reveals.length){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    },{rootMargin:'0px 0px -10% 0px', threshold:0.1});
    reveals.forEach(function(el){ io.observe(el); });
  } else {
    // Fallback
    reveals.forEach(function(el){ el.classList.add('in'); });
  }

  // Parallax: translate small amount based on scroll
  var px = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  if(px.length){
    var lastY = window.scrollY;
    function raf(){
      var y = window.scrollY;
      if(Math.abs(y-lastY) < 1){ requestAnimationFrame(raf); return; }
      lastY = y;
      px.forEach(function(el){
        var speed = 0.08; // subtle
        var offset = (el.getBoundingClientRect().top + y) * speed * -0.02;
        el.style.transform = 'translate3d(0,'+ offset.toFixed(2) +'px,0)';
      });
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    window.addEventListener('scroll', function(){/* noop to trigger paint */}, passive);
  }

  // Prefetch on hover for same-origin links
  var prefetchSupported = 'prefetch' in document.createElement('link');
  if(prefetchSupported){
    document.addEventListener('mouseover', function(e){
      var a = e.target.closest('a[href]');
      if(!a) return;
      try{
        var url = new URL(a.href);
        if(url.origin === location.origin){
          var l = document.createElement('link');
          l.rel = 'prefetch';
          l.href = url.pathname;
          document.head.appendChild(l);
        }
      }catch(_){}
    }, passive);
  }
})();

(function(){
  // Dialog open/close
  function setupDialogTriggers(){
    document.querySelectorAll('[data-open]').forEach(function(btn){
      btn.addEventListener('click', function(){
        var sel = btn.getAttribute('data-open');
        var dlg = document.querySelector(sel);
        if(dlg && typeof dlg.showModal === 'function'){ dlg.showModal(); }
      });
    });
    document.querySelectorAll('dialog.auth-modal').forEach(function(dlg){
      dlg.addEventListener('click', function(e){
        var rect = dlg.getBoundingClientRect();
        if(e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom){
          dlg.close();
        }
      });
    });
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', setupDialogTriggers, {once:true});
  } else { setupDialogTriggers(); }
})();

(function(){
  // Mark current link in both sidebar and top nav
  var path = location.pathname.replace(/index\.html$/, '/');
  document.querySelectorAll('nav a[href]').forEach(function(a){
    try{
      var url = new URL(a.href);
      var ap = url.pathname;
      if(ap === path || (ap.endsWith('.html') && ap === location.pathname)){
        a.setAttribute('aria-current','page');
      }
    }catch(_){}
  });

  // Ensure reveal on any section missing the class
  document.querySelectorAll('main section').forEach(function(s){
    if(!s.classList.contains('reveal')) s.classList.add('reveal');
  });

  // Smooth scroll for #hash links
  document.addEventListener('click', function(e){
    var a = e.target.closest('a[href^="#"]');
    if(!a) return;
    var target = document.querySelector(a.getAttribute('href'));
    if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
  }, {passive:false});
})();
