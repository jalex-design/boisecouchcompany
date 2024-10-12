// Load reusable components
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(html => {
            document.getElementById(id).innerHTML = html;
        });
}

// Load header and footer components
loadComponent('navbar-container', '/global-section/navbar.html');
loadComponent('footer-container', '/footer.html');
