document.addEventListener("DOMContentLoaded", function () {
    loadComponent("navbar-container", "../components/navbar.html");
    loadComponent("footer-container", "../components/footer.html");
});

function loadComponent(containerId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
            highlightActivePage();
        });
}

function highlightActivePage() {
    const links = document.querySelectorAll(".navbar a");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
}
