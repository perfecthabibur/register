/* ============================================
   PORTFOLIO APP — MAIN JAVASCRIPT
   ============================================ */

(function () {
  "use strict";

  /* ----------------------------------------
     STATE
     ---------------------------------------- */
  let currentLang = localStorage.getItem("lang") || "bn";
  let currentTheme = localStorage.getItem("theme") || null;
  let currentFilter = "all";
  let currentSkillTab = "frontend";

  /* ----------------------------------------
     DOM READY
     ---------------------------------------- */
  document.addEventListener("DOMContentLoaded", init);

  function init() {
    applyTheme();
    applyLanguage();
    renderHeroSocial();
    renderProjects();
    renderSkills();
    renderExperience();
    renderTestimonials();
    setupNavbar();
    setupThemeToggle();
    setupLangToggle();
    setupMobileMenu();
    setupFilters();
    setupSkillTabs();
    setupContactForm();
    setupScrollAnimations();
    setupCountAnimations();
    setupSmoothScroll();
  }

  /* ----------------------------------------
     THEME SYSTEM
     ---------------------------------------- */
  function applyTheme() {
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
    }
    updateThemeIcons();
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    currentTheme = next;
    updateThemeIcons();
  }

  function updateThemeIcons() {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const sunIcon = document.getElementById("sunIcon");
    const moonIcon = document.getElementById("moonIcon");
    const mobileSun = document.querySelector(".mobile-sun");
    const mobileMoon = document.querySelector(".mobile-moon");
    if (sunIcon) sunIcon.style.display = isDark ? "none" : "block";
    if (moonIcon) moonIcon.style.display = isDark ? "block" : "none";
    if (mobileSun) mobileSun.style.display = isDark ? "none" : "block";
    if (mobileMoon) mobileMoon.style.display = isDark ? "block" : "none";
  }

  function setupThemeToggle() {
    var btn = document.getElementById("themeToggle");
    if (btn) btn.addEventListener("click", toggleTheme);
    var btnM = document.getElementById("themeToggleMobile");
    if (btnM) btnM.addEventListener("click", toggleTheme);
  }

  /* ----------------------------------------
     LANGUAGE SYSTEM
     ---------------------------------------- */
  function applyLanguage() {
    document.documentElement.setAttribute("lang", currentLang);
    document.documentElement.setAttribute("data-lang", currentLang);
    updateAllTranslations();
    updateLangLabels();
  }

  function t(key) {
    var keys = key.split(".");
    var val = TRANSLATIONS[currentLang];
    for (var i = 0; i < keys.length; i++) {
      if (val && val[keys[i]] !== undefined) {
        val = val[keys[i]];
      } else {
        return key;
      }
    }
    return val;
  }

  function updateAllTranslations() {
    document.querySelectorAll("[data-tr]").forEach(function (el) {
      var key = el.getAttribute("data-tr");
      var text = t(key);
      if (text !== key) {
        el.textContent = text;
      }
    });
  }

  function updateLangLabels() {
    var label = document.getElementById("langLabel");
    var labelM = document.getElementById("langLabelMobile");
    var newLabel = currentLang === "bn" ? "EN" : "BN";
    if (label) label.textContent = newLabel;
    if (labelM) labelM.textContent = newLabel;
  }

  function toggleLanguage() {
    currentLang = currentLang === "bn" ? "en" : "bn";
    localStorage.setItem("lang", currentLang);
    document.body.classList.add("lang-transitioning");
    applyLanguage();
    renderProjects();
    renderSkills();
    renderExperience();
    renderTestimonials();
    updateProjectModal();
    setTimeout(function () {
      document.body.classList.remove("lang-transitioning");
    }, 300);
  }

  function setupLangToggle() {
    var btn = document.getElementById("langToggle");
    if (btn) btn.addEventListener("click", toggleLanguage);
    var btnM = document.getElementById("langToggleMobile");
    if (btnM) btnM.addEventListener("click", toggleLanguage);
  }

  /* ----------------------------------------
     BANGLA FONT AUTO-DETECTION
     ---------------------------------------- */
  var bnCharRegex = /[\u0980-\u09FF]/;

  function detectFont(text) {
    return bnCharRegex.test(text) ? '"Anek Bangla", sans-serif' : '"Roboto", sans-serif';
  }

  function applyFontDetection() {
    document.querySelectorAll("[data-auto-font]").forEach(function (el) {
      var text = el.textContent;
      el.style.fontFamily = detectFont(text);
    });
  }

  /* ----------------------------------------
     HERO SOCIAL ICONS
     ---------------------------------------- */
  var SOCIAL_ICONS = {
    facebook: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    youtube: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
    instagram: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>',
    github: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    whatsapp: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
    messenger: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.2l3.131 3.259L19.752 8.2l-6.561 6.763z"/></svg>',
  };

  function renderHeroSocial() {
    var container = document.getElementById("heroSocial");
    if (!container || typeof SOCIAL_LINKS === "undefined") return;
    container.innerHTML = "";

    SOCIAL_LINKS.forEach(function (link) {
      var a = document.createElement("a");
      a.className = "hero-social-link";
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", link.name);
      a.title = link.name;
      a.innerHTML = SOCIAL_ICONS[link.icon] || "";
      container.appendChild(a);
    });
  }

  /* ----------------------------------------
     RENDER PROJECTS
     ---------------------------------------- */
  function renderProjects() {
    var grid = document.getElementById("projectsGrid");
    if (!grid) return;
    grid.innerHTML = "";

    var filtered = currentFilter === "all"
      ? PROJECTS
      : PROJECTS.filter(function (p) { return p.category === currentFilter; });

    filtered.forEach(function (project) {
      var card = document.createElement("div");
      card.className = "project-card animate-on-scroll";
      card.setAttribute("data-category", project.category);

      var tagsHtml = project.tags.map(function (tag) {
        return '<span class="project-tag">' + tag + '</span>';
      }).join("");

      card.innerHTML =
        '<div class="project-card-image">' +
          '<div class="project-card-gradient" style="background: linear-gradient(135deg, ' + project.color + '22, ' + project.color + '44);">' +
            '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="' + project.color + '" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>' +
          '</div>' +
          '<div class="project-card-overlay">' +
            '<button class="btn btn-primary btn-sm" data-project-id="' + project.id + '">' +
              '<span data-tr="projects.viewProject">' + t("projects.viewProject") + '</span>' +
            '</button>' +
          '</div>' +
        '</div>' +
        '<div class="project-card-body">' +
          '<div class="project-card-tags">' + tagsHtml + '</div>' +
          '<h3 class="project-card-title" data-auto-font>' + project.title[currentLang] + '</h3>' +
          '<p class="project-card-desc" data-auto-font>' + project.description[currentLang] + '</p>' +
        '</div>';

      card.querySelector(".project-card-overlay .btn").addEventListener("click", function (e) {
        e.stopPropagation();
        openProjectModal(project);
      });

      card.addEventListener("click", function () {
        openProjectModal(project);
      });

      grid.appendChild(card);
    });

    applyFontDetection();
    observeNewElements();
  }

  /* ----------------------------------------
     PROJECT MODAL
     ---------------------------------------- */
  function openProjectModal(project) {
    var modal = document.getElementById("projectModal");
    var title = document.getElementById("modalTitle");
    var tags = document.getElementById("modalTags");
    var desc = document.getElementById("modalDesc");

    title.textContent = project.title[currentLang];
    desc.textContent = project.description[currentLang];

    tags.innerHTML = project.tags.map(function (tag) {
      return '<span class="project-tag">' + tag + '</span>';
    }).join("");

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeProjectModal() {
    var modal = document.getElementById("projectModal");
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  function updateProjectModal() {
    var title = document.getElementById("modalTitle");
    var desc = document.getElementById("modalDesc");
    if (title && title.textContent) {
      var project = PROJECTS.find(function (p) {
        return p.title[currentLang] === title.textContent || p.title.bn === title.textContent || p.title.en === title.textContent;
      });
      if (project) {
        title.textContent = project.title[currentLang];
        desc.textContent = project.description[currentLang];
      }
    }
  }

  document.addEventListener("click", function (e) {
    if (e.target.id === "projectModal") closeProjectModal();
  });

  var modalCloseBtn = document.getElementById("modalClose");
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProjectModal);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeProjectModal();
  });

  /* ----------------------------------------
     RENDER SKILLS
     ---------------------------------------- */
  function renderSkills() {
    var grid = document.getElementById("skillsGrid");
    if (!grid) return;
    grid.innerHTML = "";

    var skills = SKILLS[currentSkillTab] || [];
    skills.forEach(function (skill) {
      var item = document.createElement("div");
      item.className = "skill-item animate-on-scroll";
      item.innerHTML =
        '<div class="skill-header">' +
          '<span class="skill-name" data-auto-font>' + skill.name + '</span>' +
          '<span class="skill-level">' + skill.level + '%</span>' +
        '</div>' +
        '<div class="skill-bar">' +
          '<div class="skill-bar-fill" data-level="' + skill.level + '"></div>' +
        '</div>';
      grid.appendChild(item);
    });

    setTimeout(animateSkillBars, 100);
    observeNewElements();
  }

  function animateSkillBars() {
    document.querySelectorAll(".skill-bar-fill").forEach(function (bar) {
      var level = bar.getAttribute("data-level");
      bar.style.width = level + "%";
    });
  }

  function setupSkillTabs() {
    document.querySelectorAll(".skill-tab").forEach(function (tab) {
      tab.addEventListener("click", function () {
        document.querySelectorAll(".skill-tab").forEach(function (t) { t.classList.remove("active"); });
        tab.classList.add("active");
        currentSkillTab = tab.getAttribute("data-skill");
        renderSkills();
      });
    });
  }

  /* ----------------------------------------
     RENDER EXPERIENCE
     ---------------------------------------- */
  function renderExperience() {
    var timeline = document.getElementById("timeline");
    if (!timeline) return;
    timeline.innerHTML = "";

    EXPERIENCE.forEach(function (exp) {
      var item = document.createElement("div");
      item.className = "timeline-item animate-on-scroll";
      item.innerHTML =
        '<div class="timeline-dot"></div>' +
        '<div class="timeline-card">' +
          '<h3 class="timeline-title" data-auto-font>' + exp.title[currentLang] + '</h3>' +
          '<div class="timeline-company" data-auto-font>' + exp.company[currentLang] + '</div>' +
          '<div class="timeline-period" data-auto-font>' + exp.period[currentLang] + '</div>' +
          '<p class="timeline-desc" data-auto-font>' + exp.description[currentLang] + '</p>' +
        '</div>';
      timeline.appendChild(item);
    });

    applyFontDetection();
    observeNewElements();
  }

  /* ----------------------------------------
     RENDER TESTIMONIALS
     ---------------------------------------- */
  function renderTestimonials() {
    var grid = document.getElementById("testimonialsGrid");
    if (!grid) return;
    grid.innerHTML = "";

    TESTIMONIALS.forEach(function (test) {
      var card = document.createElement("div");
      card.className = "testimonial-card animate-on-scroll";
      var initials = getInitials(test.name[currentLang]);
      card.innerHTML =
        '<div class="testimonial-quote">&ldquo;</div>' +
        '<p class="testimonial-text" data-auto-font>' + test.text[currentLang] + '</p>' +
        '<div class="testimonial-author">' +
          '<div class="testimonial-avatar">' + initials + '</div>' +
          '<div>' +
            '<div class="testimonial-name" data-auto-font>' + test.name[currentLang] + '</div>' +
            '<div class="testimonial-role" data-auto-font>' + test.role[currentLang] + '</div>' +
          '</div>' +
        '</div>';
      grid.appendChild(card);
    });

    applyFontDetection();
    observeNewElements();
  }

  function getInitials(name) {
    var parts = name.split(" ");
    if (parts.length >= 2) {
      return parts[0].charAt(0) + parts[1].charAt(0);
    }
    return name.charAt(0);
  }

  /* ----------------------------------------
     NAVIGATION
     ---------------------------------------- */
  function setupNavbar() {
    var navbar = document.getElementById("navbar");
    var sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }

      var scrollY = window.scrollY + 100;
      sections.forEach(function (section) {
        var top = section.offsetTop;
        var height = section.offsetHeight;
        var id = section.getAttribute("id");
        var link = document.querySelector('.nav-links a[href="#' + id + '"]');
        if (link) {
          if (scrollY >= top && scrollY < top + height) {
            document.querySelectorAll(".nav-links a").forEach(function (a) { a.classList.remove("active"); });
            link.classList.add("active");
          }
        }
      });
    });
  }

  /* ----------------------------------------
     MOBILE MENU
     ---------------------------------------- */
  function setupMobileMenu() {
    var btn = document.getElementById("mobileMenuBtn");
    var menu = document.getElementById("mobileMenu");
    var overlay = document.getElementById("mobileMenuOverlay");

    function closeMenu() {
      btn.classList.remove("active");
      menu.classList.remove("open");
      if (overlay) overlay.classList.remove("open");
      document.body.style.overflow = "";
    }

    function openMenu() {
      btn.classList.add("active");
      menu.classList.add("open");
      if (overlay) overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }

    if (btn && menu) {
      btn.addEventListener("click", function () {
        if (menu.classList.contains("open")) {
          closeMenu();
        } else {
          openMenu();
        }
      });

      if (overlay) {
        overlay.addEventListener("click", closeMenu);
      }

      menu.querySelectorAll(".mobile-link").forEach(function (link) {
        link.addEventListener("click", closeMenu);
      });
    }
  }

  /* ----------------------------------------
     PROJECT FILTERS
     ---------------------------------------- */
  function setupFilters() {
    document.querySelectorAll(".filter-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelectorAll(".filter-btn").forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        currentFilter = btn.getAttribute("data-filter");
        renderProjects();
      });
    });
  }

  /* ----------------------------------------
     CONTACT FORM
     ---------------------------------------- */
  function setupContactForm() {
    var form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector(".btn-primary span");
      var originalText = btn.textContent;
      btn.textContent = t("contact.sending");

      setTimeout(function () {
        btn.textContent = t("contact.success");
        form.reset();
        setTimeout(function () {
          btn.textContent = originalText;
        }, 3000);
      }, 1500);
    });
  }

  /* ----------------------------------------
     SCROLL ANIMATIONS (Intersection Observer)
     ---------------------------------------- */
  var observer = null;

  function setupScrollAnimations() {
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      document.querySelectorAll(".animate-on-scroll").forEach(function (el) {
        observer.observe(el);
      });
    } else {
      document.querySelectorAll(".animate-on-scroll").forEach(function (el) {
        el.classList.add("visible");
      });
    }
  }

  function observeNewElements() {
    if (!observer) return;
    document.querySelectorAll(".animate-on-scroll:not(.visible)").forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ----------------------------------------
     COUNT ANIMATIONS
     ---------------------------------------- */
  function setupCountAnimations() {
    if (!("IntersectionObserver" in window)) return;

    var countObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            countObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll(".stat-number[data-count]").forEach(function (el) {
      countObserver.observe(el);
    });
  }

  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var suffix = el.getAttribute("data-suffix") || "";
    var duration = 1800;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.floor(eased * target);
      el.textContent = current + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  /* ----------------------------------------
     SMOOTH SCROLL
     ---------------------------------------- */
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute("href"));
        if (target) {
          var offset = 80;
          var top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: top, behavior: "smooth" });
        }
      });
    });
  }

  /* ----------------------------------------
     LISTEN FOR SYSTEM THEME CHANGES
     ---------------------------------------- */
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
    if (!localStorage.getItem("theme")) {
      document.documentElement.setAttribute("data-theme", e.matches ? "dark" : "light");
      updateThemeIcons();
    }
  });
})();
