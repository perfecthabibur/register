let deferredPrompt;
const installBtn = document.getElementById('installAppBtn');

// যেকোন ব্রাউজারে দেখাবে, কাজ করবে শুধু যেগুলো সাপোর্ট করে
installBtn.disabled = true; // শুরুতে বন্ধ থাকবে

// ইন্সটল প্রম্পট স্টোর করা
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.disabled = false; // সাপোর্ট করলে সক্রিয় করো
});

// বাটনে ক্লিক করলে প্রম্পট দেখাও (যদি পাওয়া যায়)
installBtn.addEventListener('click', () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choice => {
      if (choice.outcome === 'accepted') {
        console.log('App installed');
      } else {
        console.log('User dismissed the prompt');
      }
      deferredPrompt = null;
    });
  } else {
    alert("দুঃখিত, আপনার ব্রাউজারে ইনস্টল অপশন সাপোর্ট করে না।");
  }
});

// যদি ইন্সটল হয়ে যায়
window.addEventListener('appinstalled', () => {
  console.log("PWA Installed");
  installBtn.disabled = true;
});

// Service worker রেজিস্টার
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => console.log('SW registered', reg))
      .catch(err => console.error('SW error', err));
  });
}