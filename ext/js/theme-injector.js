const storage = browser.storage.sync || browser.storage.local;

function injectCSS(content) {
  const style = document.createElement('style');
  style.textContent = content;
  document.documentElement.appendChild(style);
}

function injectTheme() {
  storage.get({
    [CHOSEN_THEME_KEY]: DEFAULT_SETTINGS[CHOSEN_THEME_KEY]
  }).then(response => {
    const themeName = response[CHOSEN_THEME_KEY];
    injectCSS(THEMES[themeName]);
  });
}

injectTheme();
