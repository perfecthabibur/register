$(document).ready(function () {

  const themeMeta = document.getElementById("theme-color");
  const icon = document.querySelector(".switch iconify-icon");

  function setTheme(theme) {
    if (theme === "dark") {
      $("body").addClass("darkmode");
      localStorage.setItem("theme", "dark");

      // address bar + mobile bottom bar
      themeMeta.setAttribute("content", "#000000");

      // icon
      icon.setAttribute("icon", "line-md:sun-rising-loop");
    } else {
      $("body").removeClass("darkmode");
      localStorage.setItem("theme", "light");

      themeMeta.setAttribute("content", "#ffffff");

      icon.setAttribute("icon", "line-md:moon-alt-loop");
    }
  }

  // Load saved theme on refresh
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme("light");
  }

  // Toggle theme
  $(".switch").on("click", function () {
    if ($("body").hasClass("darkmode")) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  });

});


(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#sspinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
})(jQuery);
//contact====
window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Error!";
  }
// handle the form submission event
form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
//contact====
     var menuItems = document.querySelectorAll('ul li a');
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', function() {
            // Remove active state from all menu items
            for (var j = 0; j < menuItems.length; j++) {
                menuItems[j].classList.remove('active');
            }
            // Add active state to clicked menu item
            this.classList.add('active');
        });
    }

//contact====
//button animation=====
document.querySelectorAll(".ripple-hover").forEach(el => {
  el.addEventListener("mouseenter", function (e) {

    const ripple = document.createElement("span");
    ripple.className = "hover-ripple";

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
    ripple.style.top = (e.clientY - rect.top - size / 2) + "px";

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 700);
  });
});

//Protflio====
const filterButtons = document.querySelectorAll(".portfolio-filter button");
const items = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    items.forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
//Testimoial=====
const testimonials = document.querySelectorAll(".testimonial-item");
const dots = document.querySelectorAll(".testimonial-controls .dot");
let index = 0;

function showTestimonial(i) {
  testimonials.forEach(t => t.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  testimonials[i].classList.add("active");
  dots[i].classList.add("active");
  index = i;
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showTestimonial(i));
});

setInterval(() => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}, 5000);


// card ====
document.querySelectorAll(".particle-card").forEach(card => {
  const canvas = card.querySelector(".particle-canvas");
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = card.offsetWidth;
    canvas.height = card.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const particles = [];

  for (let i = 0; i < 10; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

      ctx.fillStyle = document.body.classList.contains("darkmode")
        ? "rgba(150,150,255,0.6)"
        : "rgba(100,100,255,0.4)";

      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });

    requestAnimationFrame(draw);
  }

  draw();
});

//border color
function updateGradientBorder() {
  const root = document.documentElement;
  const dark = document.body.classList.contains("darkmode");

  if (dark) {
    root.style.setProperty("--gb-c1", "#6c63ff");
    root.style.setProperty("--gb-c2", "#00d4ff");
    root.style.setProperty("--gb-c3", "#8b5cf6");
  } else {
    root.style.setProperty("--gb-c1", "#ff7a18");
    root.style.setProperty("--gb-c2", "#ffb347");
    root.style.setProperty("--gb-c3", "#ffd194");
  }
}

/* initial */
updateGradientBorder();

/* যদি তোমার toggle JS থাকে */
document.addEventListener("click", e => {
  if (e.target.closest(".switch")) {
    setTimeout(updateGradientBorder, 50);
  }
});


