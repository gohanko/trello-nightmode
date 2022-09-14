theme_config = {
    dark_mode: {
        '#header': '#2b2b2b',
        '.list': '#2b2b2b',
    }
}

function applyTheme(theme) {
    theme_config[theme].entries().forEach(([key, value]) => {
        var element = document.querySelector(key);
        element.style.background_colpr = value;
    });
}