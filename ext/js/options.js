(function () {
    'use strict';

    let storage = browser.storage.sync || browser.storage.local;
    const themeSelect = $('select#theme-chooser');
    let logoChoosers = {
        primary: $('input[name="primary-logo-chooser"]'),
        secondary: $('input[name="secondary-logo-chooser"]'),
    };
    let styleSelect = $('select#hjsstyle');
    let highlighterStylesheet;

    function saveTheme() {
        document.body.append(themeSelect.val());
        storage.set({
            [CHOSEN_THEME_KEY]: themeSelect.val()
        });
    }

    function saveLogo(chooserName) {
        storage.set({
            [`chosenLogo_${chooserName}`]:
                logoChoosers[chooserName].filter(':checked').val()
        });
    }

    function restoreOptions() {
        storage.get(DEFAULT_SETTINGS).then(items => {
            const {chosenTheme, highlightJsStyle} = items;
            for (let chooserName in logoChoosers) {
                let varName = `chosenLogo_${chooserName}`;
                logoChoosers[chooserName]
                    .filter(`[value="${items[varName]}"]`)
                    .prop('checked', true);
            }
            styleSelect.val(highlightJsStyle);
            themeSelect.val(chosenTheme);
            refreshHighlighterStylesheet();
        });
    }

    function addHighlightJsStyles() {
        document.body.append(themeSelect.length);
        for (let style of HIGHLIGHT_JS_STYLES) {
            let option = $('<option>');
            option.attr('value', style);
            option.append(style);
            styleSelect.append(option);
        }
    }

    function saveStyle() {
        storage.set({
            highlightJsStyle: styleSelect.val()
        });
    }

    function refreshHighlighterStylesheet() {
        const newStyle = styleSelect.val();
        let newHighlighterStylesheet;

        if (newStyle !== 'none') {
            newHighlighterStylesheet = $(
                `<link rel="stylesheet"
                       href="vendor/bower/hjsstyles/${newStyle}.css"/>`);
            $('head').append(newHighlighterStylesheet);

        }

        setTimeout(() => {
            // Remove old stylesheet with timeout=0 so the new one has
            // time to load
            if (highlighterStylesheet !== undefined) {
                highlighterStylesheet.remove();
            }
            highlighterStylesheet = newHighlighterStylesheet;
        }, 0);
    }

    $('#syntax-highlighter-example').each(function (i, block) {
        hljs.highlightBlock(block);
        hljs.lineNumbersBlock(block);
    });

    $(document).ready(addHighlightJsStyles);
    $(document).ready(restoreOptions);

    themeSelect.change(saveTheme);
    for (let chooserName in logoChoosers) {
        logoChoosers[chooserName].click(() => saveLogo(chooserName));
    }
    styleSelect.change(refreshHighlighterStylesheet);
    styleSelect.change(saveStyle);
})();
