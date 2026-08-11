(function () {
  var header = document.getElementById("header");
  var toggle = document.querySelector(".nav-toggle");
  var navMenu = document.querySelector(".nav-menu");

  function syncHeader() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 30);
  }
  window.addEventListener("scroll", syncHeader, { passive: true });
  syncHeader();

  if (toggle && navMenu) {
    toggle.addEventListener("click", function () {
      var open = navMenu.classList.toggle("open");
      toggle.classList.toggle("active", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        toggle.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Gallery carousel (mobile) */
  (function () {
    var track = document.getElementById("galleryTrack");
    var prevBtn = document.getElementById("galleryPrev");
    var nextBtn = document.getElementById("galleryNext");
    var dotsContainer = document.getElementById("galleryDots");
    if (!track || !dotsContainer) return;

    var slides = track.querySelectorAll(".gallery-slide");
    var total = slides.length;
    var current = 0;

    for (var i = 0; i < total; i++) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "gallery-dot" + (i === 0 ? " active" : "");
      dot.setAttribute("aria-label", "Slide " + (i + 1));
      dot.setAttribute("data-index", String(i));
      dotsContainer.appendChild(dot);
    }
    var dots = dotsContainer.querySelectorAll(".gallery-dot");

    function goTo(index) {
      if (index < 0) index = total - 1;
      if (index >= total) index = 0;
      current = index;
      track.style.transform = "translateX(-" + current * 100 + "%)";
      dots.forEach(function (d, idx) {
        d.classList.toggle("active", idx === current);
      });
    }

    if (prevBtn) prevBtn.addEventListener("click", function () { goTo(current - 1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { goTo(current + 1); });
    dotsContainer.addEventListener("click", function (e) {
      if (e.target.classList.contains("gallery-dot")) {
        goTo(parseInt(e.target.getAttribute("data-index"), 10));
      }
    });

    var startX = 0;
    track.addEventListener("touchstart", function (e) {
      startX = e.changedTouches[0].screenX;
    }, { passive: true });
    track.addEventListener("touchend", function (e) {
      var dx = e.changedTouches[0].screenX - startX;
      if (Math.abs(dx) < 40) return;
      if (dx < 0) goTo(current + 1);
      else goTo(current - 1);
    }, { passive: true });
  })();

  /* Reveal */
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  document
    .querySelectorAll(".section-head, .about-grid, .feature, .opt-group, .menu-card, .access-grid, .gallery-mobile, .gallery-grid-desktop")
    .forEach(function (el) {
      el.classList.add("reveal");
      observer.observe(el);
    });

  /* Opt-group: radio choice + shared book button */
  document.querySelectorAll(".opt-group[data-opt-select]").forEach(function (group) {
    var book = group.querySelector(".opt-group-book");
    if (!book) return;
    var lang = book.getAttribute("data-lang") || "en";
    function syncBook() {
      var selected = group.querySelector('input[type="radio"]:checked');
      if (!selected) return;
      book.href = "../booking.html?lang=" + encodeURIComponent(lang) + "&service=" + encodeURIComponent(selected.value);
    }
    group.querySelectorAll('input[type="radio"]').forEach(function (radio) {
      radio.addEventListener("change", syncBook);
    });
    syncBook();
  });

  /* 菜单项：名称+价格能同一行则并排，否则价格下移与时长左右分列 */
  (function () {
    var rows = document.querySelectorAll(".opt-choice.has-desc");
    if (!rows.length) return;
    var resizeTimer = 0;
    var syncing = false;

    function syncPriceLayout() {
      if (syncing) return;
      syncing = true;

      rows.forEach(function (row) {
        var name = row.querySelector(".opt-name");
        var price = row.querySelector(".opt-price");
        if (!name || !price) return;

        row.classList.remove("is-price-stacked");

        var prevWhiteSpace = name.style.whiteSpace;
        var prevOverflowWrap = name.style.overflowWrap;
        var prevWordBreak = name.style.wordBreak;
        name.style.whiteSpace = "nowrap";
        name.style.overflowWrap = "normal";
        name.style.wordBreak = "keep-all";

        var nameNatural = name.scrollWidth;
        var nameCol = name.clientWidth;
        name.style.whiteSpace = prevWhiteSpace;
        name.style.overflowWrap = prevOverflowWrap;
        name.style.wordBreak = prevWordBreak;

        // 名称单行放不进并排列宽 → 价格放到右下（与时长同一行）
        if (nameNatural > nameCol + 1) {
          row.classList.add("is-price-stacked");
        }
      });

      syncing = false;
    }

    function scheduleSync() {
      if (syncing) return;
      if (resizeTimer) window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(function () {
        resizeTimer = 0;
        syncPriceLayout();
      }, 50);
    }

    syncPriceLayout();
    window.addEventListener("resize", scheduleSync);
    if (typeof ResizeObserver !== "undefined") {
      var ro = new ResizeObserver(scheduleSync);
      rows.forEach(function (row) { ro.observe(row); });
    }
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(syncPriceLayout).catch(function () {});
    }
  })();

  /* Back to top */
  var topBtn = document.getElementById("backToTop");
  if (topBtn) {
    window.addEventListener("scroll", function () {
      topBtn.classList.toggle("show", window.scrollY > 500);
    }, { passive: true });
    topBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
