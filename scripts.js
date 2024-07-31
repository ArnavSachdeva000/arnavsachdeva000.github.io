// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('toggle-icon');

    if (document.body.classList.contains('dark-mode')) {
        icon.src = 'icon-dark.png';
    } else {
        icon.src = 'icon-light.png';
    }
}

// Toggle menu visibility
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

// Initialize the page to show the correct menu button based on the default mode
document.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('dark-mode')) {
        const icon = document.getElementById('toggle-icon');
        icon.src = 'icon-dark.png';
    }
});
