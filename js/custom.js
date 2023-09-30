$("#btn-wiktionary-lang-select").on('click', function (event) {
  $("#dropdown-wiktionary-lang-select").toggleClass('show');
});

$('body').on('click', function (e) {
    const btnWiktionaryLangSelect = document.getElementById("btn-wiktionary-lang-select");
    const wiktionaryDropdownLangSelect = document.getElementById("dropdown-wiktionary-lang-select");
    if (btnWiktionaryLangSelect !== e.target &&
        wiktionaryDropdownLangSelect !== e.target &&
        !wiktionaryDropdownLangSelect.contains(e.target))
    {
      wiktionaryDropdownLangSelect.classList.remove('show');
    }
});
