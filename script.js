let isHindi = false;
const toggleBtn = document.getElementById('toggleLang');

toggleBtn.addEventListener('click', () => {
    isHindi = !isHindi;
    document.querySelectorAll('.lang').forEach(el => {
        el.textContent = isHindi ? el.getAttribute('data-hi') : el.getAttribute('data-en');
    });
    toggleBtn.textContent = isHindi ? 'English' : 'हिंदी';
    
    // Example for sections
    document.getElementById('homeTitle').textContent = isHindi 
        ? 'विश्वसनीय कानूनी सलाह, कभी भी, कहीं भी' 
        : 'Trusted Legal Advice, Anytime, Anywhere';
});
