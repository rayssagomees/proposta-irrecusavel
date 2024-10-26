function sim(){
    alert("Vai para o quarto e se prepare. Eu vou-lhe usar.");
    location.href = "https://music.youtube.com/watch?v=izGwDsrQ1eQ";
}

function nao(elemento){
    elemento.style.position = 'absolute';
    elemento.style.top = randomNumber(10, 90);
    elemento.style.left = randomNumber(10, 90);
}

function randomNumber(min, max){
    return (Math.random() * (max - min) + (min)) + '%';
}

function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

if (isMobile()) {
    document.getElementById('mobile-message').style.display = 'block';
}