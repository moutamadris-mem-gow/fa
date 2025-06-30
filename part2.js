// part2.js
function getUserInfo() {
    console.log('Fetching user info...');
    return axios.get('https://api.ipify.org?format=json')
        .then(response => {
            const ip = response.data.ip;
            const userAgent = navigator.userAgent;
            const platform = navigator.platform;
            const screenWidth = screen.width;
            const screenHeight = screen.height;
            const deviceType = /mobile/i.test(navigator.userAgent) ? 'Mobile' : 'Computer';

            console.log('User info fetched successfully:', { ip, userAgent, platform, screenWidth, screenHeight, deviceType });

            return {
                ip,
                userAgent,
                platform,
                screenWidth,
                screenHeight,
                deviceType
            };
        })
        .catch(err => {
            console.error('Error fetching IP:', err);
            throw err;
        });
}

console.log('Part 2 loaded: User info collection ready.');