
// // Wait for the YouTube controls to load
// const interval = setInterval(() => {
//     const controls = document.querySelector('.ytp-right-controls');
//     if (controls && !document.getElementById('screenshot-btn')) {
//         clearInterval(interval);

//         // Create the + button
//         const btn = document.createElement('button');
//         btn.id = 'screenshot-btn';
//         btn.textContent = '+';
//         btn.style.cssText = `
//             background-color: #1E88E5;
//             color: white;
//             border: none;
//             font-size: 20px;
//             padding: 4px 10px;
//             margin-right: 8px;
//             cursor: pointer;
//             border-radius: 4px;
//         `;

//         btn.onclick = () => {
//             const video = document.querySelector('video');
//             if (!video) return alert("Video not found!");

//             const canvas = document.createElement('canvas');
//             canvas.width = video.videoWidth;
//             canvas.height = video.videoHeight;
//             const ctx = canvas.getContext('2d');
//             ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
//             const imgData = canvas.toDataURL('image/png');

//             const currentTime = formatTime(video.currentTime);
//             showPopup(imgData, currentTime);
//         };

//         controls.insertBefore(btn, controls.querySelector('.ytp-subtitles-button'));
//     }
// }, 1000);

// function formatTime(seconds) {
//     const m = Math.floor(seconds / 60).toString().padStart(2, '0');
//     const s = Math.floor(seconds % 60).toString().padStart(2, '0');
//     return `${m}:${s}`;
// }

// function showPopup(imageData, time) {
//     let popup = document.getElementById('screenshot-popup');
//     if (!popup) {
//         popup = document.createElement('div');
//         popup.id = 'screenshot-popup';
//         popup.style.cssText = `
//             position: fixed;
//             top: 80px;
//             right: 20px;
//             background: white;
//             border: 1px solid #ccc;
//             padding: 10px;
//             z-index: 99999;
//             max-width: 300px;
//             box-shadow: 0 2px 10px rgba(0,0,0,0.2);
//         `;
//         document.body.appendChild(popup);
//     }

//     const entry = document.createElement('div');
//     entry.style.marginBottom = '10px';
//     entry.innerHTML = `<div><strong>${time}</strong></div><img src="${imageData}" style="width: 100%;"/>`;
//     popup.prepend(entry);
// }
// Wait for the YouTube controls to load
const interval = setInterval(() => {
    const controls = document.querySelector('.ytp-right-controls');
    if (controls && !document.getElementById('screenshot-btn')) {
        clearInterval(interval);

        const btn = document.createElement('button');
        btn.id = 'screenshot-btn';
        btn.textContent = '+';
       btn.style.cssText = `
    background-color: #1D36F0;
    color: white;
    border: none;
    font-size: 14px;
    padding: 2px 8px;
    cursor: pointer;
    border-radius: 4px;
    height: 28px;
    margin-right: 6px;
    position: relative;
    top: -16px;
    z-index: 9999;
`;


        btn.onclick = () => {
            const video = document.querySelector('video');
            if (!video) return alert("Video not found!");

            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imgData = canvas.toDataURL('image/png');
            const currentTime = formatTime(video.currentTime);
            showPopup(imgData, currentTime);
        };

        controls.insertBefore(btn, controls.firstChild);
    }
}, 1000);

function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

function showPopup(imageData, time) {
    let popup = document.getElementById('screenshot-popup');
    if (!popup) {
        popup = document.createElement('div');
        popup.id = 'screenshot-popup';
        popup.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: white;
            border: 1px solid #ccc;
            padding: 10px 10px 30px;
            z-index: 99999;
            max-width: 300px;
            max-height: 400px;
            overflow-y: auto;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        `;

        const closeBtn = document.createElement('button');
        closeBtn.textContent = '✖';
        closeBtn.style.cssText = `
            position: absolute;
            top: 5px;
            right: 5px;
            background: transparent;
            border: none;
            font-size: 16px;
            cursor: pointer;
        `;
        closeBtn.onclick = () => popup.remove();
        popup.appendChild(closeBtn);

        document.body.appendChild(popup);
    }

    const entry = document.createElement('div');
    entry.style.marginBottom = '10px';
    entry.innerHTML = `<div><strong>${time}</strong></div><img src="${imageData}" style="width: 100%;"/>`;
    popup.appendChild(entry);
}
