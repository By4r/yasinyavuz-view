/* Çerez / KVKK onay bandı — buildless, tüm sayfalarda ortak (Beyar revizesi 2026-07-08).
   Metin Beyar tarafından verildi. Seçim localStorage'da saklanır; bir kez gösterilir.
   Bağlantılar footer yasal linkleriyle aynı canlı kaynağa gider (uydurma metin yok). */
(function () {
  'use strict';
  var KEY = 'yy-cookie-consent';

  try { if (localStorage.getItem(KEY)) return; } catch (e) { /* storage kapalıysa yine göster */ }

  function persist(choice) {
    try { localStorage.setItem(KEY, choice); } catch (e) { /* sessizce geç */ }
  }

  function build() {
    if (document.querySelector('.cookie-bar')) return;

    var bar = document.createElement('div');
    bar.className = 'cookie-bar';
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', 'Çerez bildirimi');
    bar.innerHTML =
      '<div class="container cookie-bar__inner">' +
        '<p class="cookie-bar__text">Kişisel verileriniz, deneyiminizi iyileştirmek ve hizmetlerimizi ' +
        'geliştirmek amacıyla KVKK’ya uygun şekilde işlenmektedir. Detaylı bilgi için ' +
        '<a href="aydinlatma-metni.html">Aydınlatma Metni</a> ve ' +
        '<a href="cerez-politikasi.html">Çerez Politikası</a> ' +
        'sayfalarını inceleyebilirsiniz.</p>' +
        '<div class="cookie-bar__actions">' +
          '<button type="button" class="btn btn--primary" data-cc="all">Kabul Et</button>' +
          '<button type="button" class="btn btn--ghost" data-cc="essential">Yalnızca Zorunlu</button>' +
        '</div>' +
      '</div>';

    bar.addEventListener('click', function (e) {
      var b = e.target.closest('[data-cc]');
      if (!b) return;
      persist(b.getAttribute('data-cc'));
      bar.classList.add('is-hiding');
      var done = function () { if (bar.parentNode) bar.remove(); };
      bar.addEventListener('transitionend', done, { once: true });
      setTimeout(done, 500);
    });

    document.body.appendChild(bar);
    requestAnimationFrame(function () { bar.classList.add('is-in'); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
