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
