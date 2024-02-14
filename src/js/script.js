// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    document.getElementById('darkModeToggle').checked = true; // Marcar el botón si está en modo oscuro
} else {
    document.documentElement.classList.remove('dark');
    document.getElementById('darkModeToggle').checked = false; // Desmarcar el botón si está en modo claro
}

// Whenever the user explicitly chooses light mode
function setLightMode() {
    localStorage.theme = 'light';
    document.documentElement.classList.remove('dark');
}

// Whenever the user explicitly chooses dark mode
function setDarkMode() {
    localStorage.theme = 'dark';
    document.documentElement.classList.add('dark');
}

// Whenever the user explicitly chooses to respect the OS preference
function setAutoMode() {
    localStorage.removeItem('theme');
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

// Event listener for dark mode toggle
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            setDarkMode();
        } else {
            setLightMode();
        }
    });
});
