(function($) {
  /* Toggle Open & Close of Wiktionary Language Selection Dropdown */
  $("#btn-wiktionary-lang-select").on('click', function (event) {
    $("#dropdown-wiktionary-lang-select").toggleClass('show');
  });

  /* Close Wiktionary Language Selection Dropdown if Click Outside Dropdown */
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
})(jQuery);

/* Wiktionary Search */
function wiktionarySearch(searchBar, searchText) {
  let wiktionaryURL = "https://en.wiktionary.org/wiki/";
  let googleURL = "https://google.com/search?q=";
  let searchURL = "";

  const language = getWiktionaryLanguage(searchBar); //Get selected language

  if (language == 0) { //English
    searchURL = wiktionaryURL + searchText + "#English";
  }
  else if (language == 1) { //Latin
    searchURL = wiktionaryURL + searchText + "#Latin";
  }
  else { //Ancient Greek
    searchURL = googleURL + searchText + "+ancient+greek+wiktionary";
  }

  window.open(searchURL,'_blank');
}

/* Return Selected Language for Wiktionary Search*/
function getWiktionaryLanguage(searchBar) {
  let langs = [];

  if (searchBar == 0) { //Desktop Topbar Search Box
    langs = document.getElementsByName('langs1');
  }
  else { //Mobile Device Dropdown Search Box
    langs = document.getElementsByName('langs2');
  }

  //Iterate through language radio buttons until active (selected) found
  for (let i = 0, length = langs.length; i < length; i++) {
    if (langs[i].classList.contains('active')) {
      return i;
    }
  }
}
