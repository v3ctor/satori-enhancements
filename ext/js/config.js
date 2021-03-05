const SATORI_URL = 'satori.tcs.uj.edu.pl/';
const SATORI_URL_HTTP = 'http://' + SATORI_URL;
const SATORI_URL_HTTPS = 'https://' + SATORI_URL;
const PROBLEM_URL_REGEX =
    /https:\/\/satori\.tcs\.uj\.edu\.pl\/contest\/(\d+)\//;

const CHOSEN_THEME_KEY = 'chosenTheme';
const CHOSEN_LOGO_PRIMARY_KEY = 'chosenLogo_primary';
const CHOSEN_LOGO_SECONDARY_KEY = 'chosenLogo_secondary';
const HIGHLIGHT_JS_STYLE_KEY = 'highlightJsStyle';

const DEFAULT_SETTINGS = {
    [CHOSEN_THEME_KEY]: 'satori',
    [CHOSEN_LOGO_PRIMARY_KEY]: 'satoriPremium',
    [CHOSEN_LOGO_SECONDARY_KEY]: 'tcs',
    [HIGHLIGHT_JS_STYLE_KEY]: 'atom-one-light'
};

const HIGHLIGHT_JS_STYLES = [
    'agate',
    'atom-one-dark',
    'atom-one-light',
    'color-brewer',
    'darcula',
    'idea',
    'mono-blue',
    'monokai-sublime',
    'qtcreator_dark',
    'qtcreator_light',
    'railscasts',
    'rainbow',
    'solarized-dark',
    'solarized-light',
    'tomorrow',
    'vs',
    'vs2015',
    'zenburn'
];

if (typeof module !== 'undefined') {
    module.exports = {
        SATORI_URL,
        SATORI_URL_HTTP,
        SATORI_URL_HTTPS,
        PROBLEM_URL_REGEX,

        CHOSEN_THEME_KEY,
        CHOSEN_LOGO_PRIMARY_KEY,
        CHOSEN_LOGO_SECONDARY_KEY,
        HIGHLIGHT_JS_STYLE_KEY,
        DEFAULT_SETTINGS,

        HIGHLIGHT_JS_STYLES,
    };
}
