document.addEventListener('DOMContentLoaded', function () {
    var scrollBtn = document.createElement('div');
    scrollBtn.innerHTML = '<button onclick="scrollToTop()">Topo</button>';
    document.body.appendChild(scrollBtn);

    window.onscroll = function () {
        showScrollButton();
    };
});

function showScrollButton() {
    var scrollBtn = document.querySelector('button');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}