const countdown = document.querySelector('#countdown');

do {
    var question = Number(prompt('Enter time in minutes'));
} while (isNaN(question));

let n = question;
let seconds = n * 60;

let x = setInterval(timer, 1000);

function timer() {

    if (seconds === 0) {
        let alert = document.querySelector('.alert');
        alert.innerText = `Time's up !`;
        alert.style.opacity = '1';

        let btn = document.querySelector('.btn');
        btn.style.opacity = '1';

        btn.addEventListener('click', refreshPage);

        function refreshPage() {
            window.location.reload();
        }

        function stop() {
            clearInterval(x);
        }
        stop();
    }

    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;

    sec = sec < 10 ? '0' + sec : sec;
    min = min < 10 ? '0' + min : min;

    countdown.innerHTML = `${min}:${sec}`;
    seconds--;
    seconds = seconds < 0 ? 0 : seconds;
}

timer();
