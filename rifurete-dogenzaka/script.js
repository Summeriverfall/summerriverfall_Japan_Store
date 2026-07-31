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

  /* Opt-group: radio choice + shared book button (+ package/custom mode) */
  document.querySelectorAll(".opt-group[data-opt-select]").forEach(function (group) {
    var book = group.querySelector(".opt-group-book");
    if (!book) return;
    var lang = book.getAttribute("data-lang") || "en";
    var modeToggle = group.querySelector(".js-package-mode");
    var packagePanel = group.querySelector('[data-panel="package"]');
    var customPanel = group.querySelector('[data-panel="custom"]');

    function isPackageMode() {
      return !modeToggle || modeToggle.checked;
    }

    function activePanel() {
      return isPackageMode() ? packagePanel : customPanel;
    }

    function syncPanels() {
      if (!packagePanel || !customPanel) return;
      var pkg = isPackageMode();
      packagePanel.hidden = !pkg;
      customPanel.hidden = pkg;
      packagePanel.classList.toggle("is-active", pkg);
      customPanel.classList.toggle("is-active", !pkg);
    }

    function syncBook() {
      var panel = activePanel() || group;
      var selected = panel.querySelector('input[type="radio"]:checked');
      if (!selected) {
        selected = group.querySelector('input[type="radio"]:checked');
      }
      if (!selected) return;

      var href = "../booking.html?lang=" + encodeURIComponent(lang) + "&service=" + encodeURIComponent(selected.value);
      if (!isPackageMode()) {
        var picks = [];
        var labels = [];
        group.querySelectorAll('input[name="menu-pick"]:checked').forEach(function (cb) {
          picks.push(cb.value);
          labels.push(cb.getAttribute("data-label") || cb.value);
        });
        href += "&mode=custom";
        if (picks.length) {
          href += "&picks=" + encodeURIComponent(picks.join("|"));
          href += "&pickLabels=" + encodeURIComponent(labels.join(" · "));
        }
        book.classList.toggle("is-disabled", picks.length === 0);
        if (picks.length === 0) {
          book.setAttribute("aria-disabled", "true");
        } else {
          book.removeAttribute("aria-disabled");
        }
      } else {
        book.classList.remove("is-disabled");
        book.removeAttribute("aria-disabled");
      }
      book.href = href;
    }

    if (modeToggle) {
      modeToggle.addEventListener("change", function () {
        syncPanels();
        syncBook();
      });
    }
    group.querySelectorAll('input[type="radio"], input[name="menu-pick"]').forEach(function (input) {
      input.addEventListener("change", syncBook);
    });
    book.addEventListener("click", function (e) {
      if (book.classList.contains("is-disabled")) {
        e.preventDefault();
        var hint = group.querySelector(".menu-pick-hint");
        if (hint) {
          hint.classList.add("is-warn");
          window.setTimeout(function () { hint.classList.remove("is-warn"); }, 1600);
        }
      }
    });
    syncPanels();
    syncBook();
  });

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
