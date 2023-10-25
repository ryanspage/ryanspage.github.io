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

  /* Countdown Timers */
  const romeDate = '/4/21';
  const halloweenDate = '/10/31';
  const christmasDate = '/12/25';

  let romeYear = getCountdownYear(romeDate);
  let halloweenYear = getCountdownYear(halloweenDate);
  let christmasYear = getCountdownYear(christmasDate);

  let romeCountdownStr = romeYear.concat(romeDate);
  let halloweenCountdownStr = halloweenYear.concat(halloweenDate);
  let christmasCountdownStr = christmasYear.concat(christmasDate);

  //Set Countdown Titles
  document.getElementById('countdown-rome').innerHTML = ('Dies Natalis Romae ').concat(romeYear);
  document.getElementById('countdown-halloween').innerHTML = ('&nbsp;Halloween ').concat(halloweenYear + '&nbsp;');
  document.getElementById('countdown-christmas').innerHTML = ('Christmas ').concat(christmasYear);

  // Rome Countdown Finished (Only on 04/21)
  $('#clock-rome').countdown(romeCountdownStr).on('finish.countdown', function(event) {
    document.getElementById('countdown-rome').innerHTML = 'Felix Dies Natalis Romae!';
    var $this = $(this).html(event.strftime(''
      + '<div class="holder m-2"><span class="h3 font-weight-bold">00</span> Day%!D</div>'
      + '<div class="holder m-2"><span class="h3 font-weight-bold">00</span> Hr%!H</div>'
      + '<div class="holder m-2"><span class="h3 font-weight-bold">00</span> Min</div>'
      + '<div class="holder m-2"><span class="h3 font-weight-bold">00</span> Sec</div>'));
  });

  // Rome Countdown Update
  $('#clock-rome').countdown(romeCountdownStr).on('update.countdown', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<div class="holder m-2"><span class="h3 font-weight-bold">%D</span> Day%!D</div>'
      + '<div class="holder m-2"><span class="h3 font-weight-bold">%H</span> Hr%!H</div>'
      + '<div class="holder m-2"><span class="h3 font-weight-bold">%M</span> Min</div>'
      + '<div class="holder m-2"><span class="h3 font-weight-bold">%S</span> Sec</div>'));
  });

  // Halloween Countdown Finished (Only on 10/31)
  $('#clock-halloween').countdown(halloweenCountdownStr).on('finish.countdown', function(event) {
    document.getElementById('countdown-halloween').innerHTML = '&nbsp;Happy Halloween&nbsp;';
    var $this = $(this).html(event.strftime(''
      + '<div class="holder m-2"><span class="h3 font-weight-bold">00</span> Day%!D</div>'
      + '<div class="holder m-2"><span class="h3 font-weight-bold">00</span> Hr%!H</div>'
      + '<div class="holder m-2"><span class="h3 font-weight-bold">00</span> Min</div>'
      + '<div class="holder m-2"><span class="h3 font-weight-bold">00</span> Sec</div>'));
  });

  // Halloween Countdown Update
  $('#clock-halloween').countdown(halloweenCountdownStr).on('update.countdown', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<div class="holder m-2"><span class="h3 font-weight-bold">%D</span> Day%!D</div>'
      + '<div class="holder m-2"><span class="h3 font-weight-bold">%H</span> Hr%!H</div>'
      + '<div class="holder m-2"><span class="h3 font-weight-bold">%M</span> Min</div>'
      + '<div class="holder m-2"><span class="h3 font-weight-bold">%S</span> Sec</div>'));
  });

  // Christmas Countdown Finished (Only on 12/25)
  $('#clock-christmas').countdown(christmasCountdownStr).on('finish.countdown', function(event) {
    document.getElementById('countdown-christmas').innerHTML = 'Merry Christmas!';
    var $this = $(this).html(event.strftime(''
      + '<div class="holder m-2"><span class="h3 font-weight-bold">00</span> Day%!D</div>'
      + '<div class="holder m-2"><span class="h3 font-weight-bold">00</span> Hr%!H</div>'
      + '<div class="holder m-2"><span class="h3 font-weight-bold">00</span> Min</div>'
      + '<div class="holder m-2"><span class="h3 font-weight-bold">00</span> Sec</div>'));
  });

  // Christmas Countdown Update
  $('#clock-christmas').countdown(christmasCountdownStr).on('update.countdown', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<div class="holder m-2"><span class="h3 font-weight-bold">%D</span> Day%!D</div>'
      + '<div class="holder m-2"><span class="h3 font-weight-bold">%H</span> Hr%!H</div>'
      + '<div class="holder m-2"><span class="h3 font-weight-bold">%M</span> Min</div>'
      + '<div class="holder m-2"><span class="h3 font-weight-bold">%S</span> Sec</div>'));
  });
  /* End Countdown Timers */
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

/* Get Countdown Year */
function getCountdownYear(eventDate) {
  let curDate = new Date();
  let curYear = String(curDate.getFullYear());
  let curMonth = String(curDate.getMonth()+1);
  let curDay = String(curDate.getDate());

  eventDateCurYear = curYear.concat(eventDate);

  let curDateCurYear = curYear + '/' + curMonth + '/' + curDay;

  let dateComparison = compareDates(curDateCurYear, eventDateCurYear);

  if (dateComparison <= 0) { // Date has not yet passed this year
    return String(curYear);
  }
  else { // Date has passed this year set to next year
    return String(new Date().getFullYear()+1);
  }
}

/* Compare Dates */
function compareDates(d1, d2) {
  let date1 = new Date(d1).getTime();
  let date2 = new Date(d2).getTime();

  if (date1 < date2) { // Date 1 is before Date 2
    return -1;
  } else if (date1 > date2) { // Date 1 is after Date 2
    return 1;
  } else { // Dates are the same
    return 0;
  }
}
