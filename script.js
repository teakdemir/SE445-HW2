document.getElementById('leadForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const status = document.getElementById('status');
    const submitBtn = e.target.querySelector('button');

    // Yeni gizli mail hesabınla oluşturduğun GÜNCEL URL (Uyumlu ✅)
    const ANTIGRAVITY_ENDPOINT = "https://script.google.com/macros/s/AKfycbxWw0tIKW98XHZslIDRinM0DwYO5GuDBBpMeujGCbY7-OIo7aBujZooRTQ_4URQ8A3Y/exec";

    // HTML'deki ID'lerden verileri toplama (Uyumlu ✅)
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    status.innerText = "Sending... 🚀";
    status.style.color = "#007bff";
    submitBtn.disabled = true;

    try {
        const response = await fetch(ANTIGRAVITY_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(formData) // Google Sheets'e gönderim
        });

        status.innerText = "✅ Successfully sent! You can check Google Sheets.";
        status.style.color = "#28a745";
        document.getElementById('leadForm').reset();
    } catch (error) {
        status.innerText = "⚠️ Connection error!";
        status.style.color = "#dc3545";
        console.error('Error:', error);
    } finally {
        submitBtn.disabled = false;
    }
});