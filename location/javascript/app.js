
if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log("✅ Service Worker Registered"))
    .catch(err => console.error("❌ SW Registration Failed:", err));
}
// app code
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
// ডিফল্ট প্রম্পট ব্লক করো
e.preventDefault();
deferredPrompt = e;

// কাস্টম নোটিফিকেশন দেখাও (তুমি চাইলে বাটন ইউআইও দিতে পারো)
const installDiv = document.createElement("div");
installDiv.innerHTML = `
    <div style="padding: 10px; background: #dbeafe; border: 1px solid #60a5fa; border-radius: 6px; margin-top: 20px;">
    📲 আপনি কি এই অ্যাপটি ইন্সটল করতে চান?
    <button id="installBtn" style="margin-left: 10px; padding: 5px 12px;">ইন্সটল করুন</button>
    </div>
`;
document.body.appendChild(installDiv);

// বাটন ক্লিকে প্রম্পট দেখাও
document.getElementById('installBtn').addEventListener('click', () => {
    installDiv.remove(); // ইনস্টল করার পর ইউআই সরাও
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
        console.log('✅ ইউজার ইনস্টল করলো');
    } else {
        console.log('❌ ইউজার বাতিল করলো');
    }
    deferredPrompt = null;
    });
});
});

