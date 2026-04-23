document.getElementById('leadForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const status = document.getElementById('status');
    const submitBtn = e.target.querySelector('button');

    // Yeni gizli mail hesabınla oluşturduğun GÜNCEL URL (Uyumlu ✅)
    const ANTIGRAVITY_ENDPOINT = "https://script.google.com/macros/s/AKfycbyaI-Aqgb9pqa5Bdg3uHemk7yNfnjQvaM9UO0Z6H7ILY-6coDobxO2sUpNvk0M1O1wd/exec";

    // HTML'deki ID'lerden verileri toplama (Uyumlu ✅)
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    status.innerText = "Gönderiliyor... 🚀";
    status.style.color = "#007bff";
    submitBtn.disabled = true;

    try {
        const response = await fetch(ANTIGRAVITY_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(formData) // Google Sheets'e gönderim
        });

        status.innerText = "✅ Başarıyla gönderildi! Google Sheets'i kontrol edebilirsiniz.";
        status.style.color = "#28a745";
        document.getElementById('leadForm').reset();
    } catch (error) {
        status.innerText = "⚠️ Bağlantı hatası! İnternetinizi kontrol edin.";
        status.style.color = "#dc3545";
        console.error('Hata:', error);
    } finally {
        submitBtn.disabled = false;
    }
});