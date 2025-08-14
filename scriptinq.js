window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inquiryForm');
    const submitButton = document.getElementById('submitForm');
    
    // --- 重要 ---
    // GASのデプロイ時に発行されたウェブアプリのURLをここに貼り付けてください
    const GAS_URL = 'https://script.google.com/macros/s/AKfycbx45f7zoFZpE8Wp4pFoqU8rdd7-XhMnM3kXuoG8jucJ02TxWjSPWAz191CwE7f2qHoDdA/exec'; 
    // Code.gsで設定したシークレットキーと完全に一致させてください
    const SCRIPT_SECRET = '8qZ$p#vT2@nK*wG7hB5!sF8aU'; 
    // ------------

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (!document.getElementById('agreeCheckbox').checked) {
            showAlert('プライバシーポリシーに同意してください。');
            return;
        }

        submitButton.disabled = true;
        submitButton.textContent = '送信中...';

        // フォームデータをオブジェクトとして収集
        const formData = {
            secret: SCRIPT_SECRET,
            landingPageID: document.getElementById('landingPageID').value,
            inquiryType: document.getElementById('inquiryType').value,
            fullName: document.getElementById('fullName').value,
            furigana: document.getElementById('furigana').value,
            companyName: document.getElementById('companyName').value,
            departmentName: document.getElementById('departmentName').value,
            email: document.getElementById('email').value,
            phoneNumber: document.getElementById('phoneNumber').value,
            message: document.getElementById('message').value,
            // フォームに存在しない項目は送信しないか、空文字を送る
            detailType: document.getElementById('detailType') ? document.getElementById('detailType').value : '',
        };

        // GASにデータを送信
        fetch(GAS_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                window.location.href = 'thankyou.html';
            } else {
                showAlert('送信に失敗しました: ' + (data.message || '不明なエラーです。'));
                submitButton.disabled = false;
                submitButton.textContent = '上記に同意して送信';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showAlert('送信中にエラーが発生しました。');
            submitButton.disabled = false;
            submitButton.textContent = '上記に同意して送信';
        });
    });

    // --- カスタムアラート用の関数 ---
    const customAlert = document.getElementById('customAlert');
    const customAlertMessage = document.getElementById('customAlertMessage');
    const customAlertClose = document.getElementById('customAlertClose');
    const customAlertOverlay = document.getElementById('customAlertOverlay');

    function showAlert(message) {
        customAlertMessage.textContent = message;
        customAlert.classList.remove('hidden');
        customAlertOverlay.classList.remove('hidden');
    }

    customAlertClose.addEventListener('click', function() {
        customAlert.classList.add('hidden');
        customAlertOverlay.classList.add('hidden');
    });
});