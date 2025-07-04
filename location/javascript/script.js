   (function () {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") {
        document.documentElement.classList.add("dark-mode");
      }
    })();
    
    
  //Dark Light//
    function toggleTheme(e) {
      const html = document.documentElement;
      const isDark = html.classList.toggle("dark-mode");
      document.getElementById("theme-icon").className = isDark ? "fa-solid fa-moon" : "fa-solid fa-sun";
      localStorage.setItem("theme", isDark ? "dark" : "light");
      document.querySelector('meta[name="theme-color"]').setAttribute('content', isDark ? '#1e1e1e' : '#e0e5ec');
    }

    window.onload = () => {
      const savedTheme = localStorage.getItem("theme");
      const icon = document.getElementById("theme-icon");
      if (savedTheme === "dark") {
        icon.className = "fa-solid fa-moon";
        document.querySelector('meta[name="theme-color"]').setAttribute('content', '#1e1e1e');
      } else {
        icon.className = "fa-solid fa-sun";
        document.querySelector('meta[name="theme-color"]').setAttribute('content', '#e0e5ec');
      }
    }


// 🎇 Updated Firework Effect Generator
function createFirework() {
  const firework = document.createElement("div");
  firework.className = "firework";
  firework.style.left = Math.random() * 100 + "vw";
  firework.style.top = Math.random() * 100 + "vh";
  firework.style.background = `radial-gradient(circle, ${randomColor()}, ${randomColor()})`;
  document.body.appendChild(firework);
  setTimeout(() => firework.remove(), 2000);
}

function randomColor() {
  const colors = ["#ff0", "#f00", "#0ff", "#f0f", "#0f0", "#00f", "#fff"];
  return colors[Math.floor(Math.random() * colors.length)];
}

setInterval(createFirework, 250);

// Location Option
function searchLocation() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  const resultDiv = document.getElementById("searchResult");

  if (query === "") {
    resultDiv.innerHTML = "";
    return;
  }

  let found = false;
  let output = '';
  let idCounter = 0;

  for (const division in locationData) {
    for (const district in locationData[division]) {
      for (const upazila in locationData[division][district]) {
        for (const union in locationData[division][district][upazila]) {
          for (const post in locationData[division][district][upazila][union]) {
            const villages = locationData[division][district][upazila][union][post];

            for (const village of villages) {
              const bn = village.split(" (")[0].toLowerCase().trim();
              const enMatch = village.match(/\((.*?)\)/);
              const en = enMatch ? enMatch[1].toLowerCase().trim() : "";

              if (bn.includes(query) || en.includes(query)) {
                const printId = `printSection-${idCounter++}`;

                output += `
                  <div id="${printId}" style="margin-bottom: 15px; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
                    <p>
                        <p>বিভাগ: ${division}</p>
                        <p>জেলা: ${district}</p>
                        <p>উপজেলা: ${upazila}</p>
                        <p>ইউনিয়ন:${union}</p>
                        <p>পোস্ট অফিস: ${post}</p>
                        <p>গ্রাম: ${village}</p>
                    </p>
                    <button onclick="printResult('${printId}')" style="padding: 5px 10px;">প্রিন্ট করুন</button>
                  </div>
                `;
                found = true;
              }
            }
          }
        }
      }
    }
  }

  resultDiv.innerHTML = found ? output : "কিছু খুঁজে পাওয়া যায়নি।";
}

// 🔧 শুধু নির্দিষ্ট রেজাল্ট প্রিন্ট করার ফাংশন
function printResult(id) {
  const content = document.getElementById(id).innerHTML;
  const printWindow = window.open('', '', 'width=600,height=400');
  printWindow.document.write(`<html><head><title>প্রিন্ট করুন</title></head><body>${content}</body></html>`);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
  printWindow.close();
}

function clearSearch() {
  document.getElementById("searchInput").value = "";
  document.getElementById("searchResult").innerHTML = "";
}

function printResult(id) {
  const section = document.getElementById(id).cloneNode(true);
  // প্রিন্ট বাটন মুছে ফেলো
  const btn = section.querySelector("button");
  if (btn) btn.remove();

  const printWindow = window.open('', 'width=800,height=600');
  printWindow.document.write(`
    <html>
      <head>
        <title>প্রিন্ট করুন</title>
        <style>
          body { font-family: sans-serif; padding: 20px; }
        </style>
      </head>
      <body onload="window.print()">
        ${section.innerHTML}
      </body>
    </html>
  `);
  printWindow.document.close();
}









function populateSelect(id, options) {
  const select = document.getElementById(id);
  select.innerHTML = `<option value="">নির্বাচন করুন</option>`;
  options.forEach(opt => {
    const option = document.createElement("option");
    option.value = opt;
    option.text = opt;
    select.add(option);
  });
  $(`#${id}`).trigger('change.select2'); // Refresh Select2
}

function clearBelow(levels) {
  levels.forEach(id => populateSelect(id, []));
}

window.onload = () => {
  $('.select2').select2({
    placeholder: "নির্বাচন করুন...",
    width: '100%'
  });

  populateSelect("division", Object.keys(locationData));
};

function loadDistricts() {
  const division = document.getElementById("division").value;
  clearBelow(["district", "upazila", "union", "postOffice", "village"]);
  if (division && locationData[division]) {
    populateSelect("district", Object.keys(locationData[division]));
  }
}

function loadUpazilas() {
  const division = document.getElementById("division").value;
  const district = document.getElementById("district").value;
  clearBelow(["upazila", "union", "postOffice", "village"]);
  if (locationData[division] && locationData[division][district]) {
    populateSelect("upazila", Object.keys(locationData[division][district]));
  }
}

function loadUnions() {
  const division = document.getElementById("division").value;
  const district = document.getElementById("district").value;
  const upazila = document.getElementById("upazila").value;
  clearBelow(["union", "postOffice", "village"]);
  if (locationData[division]?.[district]?.[upazila]) {
    populateSelect("union", Object.keys(locationData[division][district][upazila]));
  }
}

function loadPostOffices() {
  const division = document.getElementById("division").value;
  const district = document.getElementById("district").value;
  const upazila = document.getElementById("upazila").value;
  const union = document.getElementById("union").value;
  clearBelow(["postOffice", "village"]);
  if (locationData[division]?.[district]?.[upazila]?.[union]) {
    populateSelect("postOffice", Object.keys(locationData[division][district][upazila][union]));
  }
}

function loadVillages() {
  const division = document.getElementById("division").value;
  const district = document.getElementById("district").value;
  const upazila = document.getElementById("upazila").value;
  const union = document.getElementById("union").value;
  const postOffice = document.getElementById("postOffice").value;
  if (locationData[division]?.[district]?.[upazila]?.[union]?.[postOffice]) {
    populateSelect("village", locationData[division][district][upazila][union][postOffice]);
  }
}

function showLocationSummary() {
  const division = document.getElementById("division").value;
  const district = document.getElementById("district").value;
  const upazila = document.getElementById("upazila").value;
  const union = document.getElementById("union").value;
  const postOffice = document.getElementById("postOffice").value;
  const village = document.getElementById("village").value;

  if (!division || !district || !upazila || !union || !postOffice || !village) {
    alert("অনুগ্রহ করে সব ফিল্ড নির্বাচন করুন।");
    return;
  }

  const container = document.getElementById("locationSummary");

  container.innerHTML = "";

  // নতুন লাইনের মতো করে তৈরি করো
  const lines = [
    `বিভাগ: ${division}`,
    `জেলা: ${district}`,
    `উপজেলা: ${upazila}`,
    `ইউনিয়ন: ${union}`,
    `পোস্ট অফিস: ${postOffice}`,
    `গ্রাম: ${village}`
  ];

  lines.forEach(text => {
    const p = document.createElement("p");
    p.textContent = text;
    p.style.margin = "4px 0";
    container.appendChild(p);
  });
}

// Force select2 dropdown open on label click
document.querySelectorAll("label").forEach(label => {
  label.addEventListener("click", function() {
    const id = label.getAttribute("for");
    if (id) {
      $(`#${id}`).select2("open");
    }
  });
});

// disabled Option

function loadDistricts() {
  const division = document.getElementById("division").value;
  const district = document.getElementById("district");
  clearBelow(["district", "upazila", "union", "postOffice", "village"]);

  if (division && locationData[division]) {
    populateSelect("district", Object.keys(locationData[division]));
    district.disabled = false;
  } else {
    district.disabled = true;
  }
}

function loadUpazilas() {
  const division = document.getElementById("division").value;
  const district = document.getElementById("district").value;
  const upazila = document.getElementById("upazila");
  clearBelow(["upazila", "union", "postOffice", "village"]);

  if (locationData[division]?.[district]) {
    populateSelect("upazila", Object.keys(locationData[division][district]));
    upazila.disabled = false;
  } else {
    upazila.disabled = true;
  }
}

function loadUnions() {
  const division = document.getElementById("division").value;
  const district = document.getElementById("district").value;
  const upazila = document.getElementById("upazila").value;
  const union = document.getElementById("union");
  clearBelow(["union", "postOffice", "village"]);

  if (locationData[division]?.[district]?.[upazila]) {
    populateSelect("union", Object.keys(locationData[division][district][upazila]));
    union.disabled = false;
  } else {
    union.disabled = true;
  }
}

function loadPostOffices() {
  const division = document.getElementById("division").value;
  const district = document.getElementById("district").value;
  const upazila = document.getElementById("upazila").value;
  const union = document.getElementById("union").value;
  const postOffice = document.getElementById("postOffice");
  clearBelow(["postOffice", "village"]);

  if (locationData[division]?.[district]?.[upazila]?.[union]) {
    populateSelect("postOffice", Object.keys(locationData[division][district][upazila][union]));
    postOffice.disabled = false;
  } else {
    postOffice.disabled = true;
  }
}

function loadVillages() {
  const division = document.getElementById("division").value;
  const district = document.getElementById("district").value;
  const upazila = document.getElementById("upazila").value;
  const union = document.getElementById("union").value;
  const postOffice = document.getElementById("postOffice").value;
  const village = document.getElementById("village");

  if (locationData[division]?.[district]?.[upazila]?.[union]?.[postOffice]) {
    populateSelect("village", locationData[division][district][upazila][union][postOffice]);
    village.disabled = false;
  } else {
    village.disabled = true;
  }
}

function clearBelow(ids) {
  ids.forEach(id => {
    populateSelect(id, []);
    document.getElementById(id).disabled = true;
  });
}


// লেবেল ক্লিক করলে select2 ফোকাস ও কারসর যাবে সার্চ বক্সে
  $(document).ready(function () {
    // Select2 ইনিশিয়ালাইজ
    $('.select2').select2({
      placeholder: "নির্বাচন করুন...",
      width: '100%'
    });

    // ড্রপডাউন খোলার সময় সার্চ ইনপুটে কারসর যাবে
    $(document).on('select2:open', () => {
      setTimeout(() => {
        let searchInput = document.querySelector('.select2-container--open .select2-search__field');
        if (searchInput) {
          searchInput.placeholder = "এখানে লিখে খুঁজুন...";
          searchInput.focus();
        }
      }, 0);
    });

    // label-এ ক্লিক করলে select2 খোলে এবং কারসর ফোকাস হয়
    document.querySelectorAll("label[for]").forEach(label => {
      label.addEventListener("click", function () {
        const selectId = label.getAttribute("for");
        const $select = $(`#${selectId}`);
        if ($select.length > 0) {
          $select.select2('open');

          setTimeout(() => {
            const searchInput = document.querySelector('.select2-container--open .select2-search__field');
            if (searchInput) {
              searchInput.focus();
            }
          }, 0);
        }
      });
    });
  });

