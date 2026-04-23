document.getElementById('leadForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const status = document.getElementById('status');
    const submitBtn = e.target.querySelector('button');

    // DİKKAT: Henüz URL almadığın için burası boş kalacak. 
    // URL'yi Agent'tan alınca tırnak içine yapıştıracaksın.
    const ANTIGRAVITY_ENDPOINT = "BURAYA_URL_GELECEK";

    // Form verilerini obje haline getiriyoruz
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Kullanıcıya işlemin başladığını gösterelim
    status.innerText = "Gönderiliyor... 🚀";
    status.style.color = "#007bff";
    submitBtn.disabled = true; // Çift tıklamayı engellemek için butonu dondur

    try {
        const response = await fetch(ANTIGRAVITY_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            // Başarılı senaryo
            status.innerText = "✅ Başarıyla gönderildi! Google Sheets'i kontrol edebilirsiniz.";
            status.style.color = "#28a745";
            document.getElementById('leadForm').reset(); // Formu temizle
        } else {
            // Sunucu hatası senaryosu
            status.innerText = "❌ Bir hata oluştu. URL veya Antigravity ayarlarını kontrol edin.";
            status.style.color = "#dc3545";
        }
    } catch (error) {
        // Bağlantı hatası (İnternet yoksa veya URL yanlışsa)
        status.innerText = "⚠️ Bağlantı hatası! URL'nin doğru olduğundan emin olun.";
        status.style.color = "#dc3545";
        console.error('Hata:', error);
    } finally {
        submitBtn.disabled = false; // İşlem bitince butonu tekrar aç
    }
});