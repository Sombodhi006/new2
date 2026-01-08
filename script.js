document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('gift-box');
    const sound = document.getElementById('open-sound');
    let isOpened = false;

    box.addEventListener('click', () => {
        if (!isOpened) {
            box.classList.add('open');
            if (sound) {
                sound.play().catch(() => console.log("Sound enabled after interaction"));
            }
            isOpened = true;
            document.querySelector('.status-text').innerText = "BOX KHULE GELOOOO";
        } else {
            box.classList.remove('open');
            isOpened = false;
            document.querySelector('.status-text').innerText = "TAP THE BOX";
        }
    });
});
