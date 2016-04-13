"use strict";
(function() {
  let i = 0;
  /**
   * Makes the placeholder change of the terminal change
   * @param {[type]} function( [description]
   */
  setInterval(function() {
    if (i === 0) {
      $('#terminalInput').attr('placeholder', '');
      i = 1;
    } else {
      $('#terminalInput').attr('placeholder', '_');
      i = 0;
    }
  }, 600);

  /* ****
   * Easter Egg (you reading this, huh? No surprise for you)
   **** */
  var keys = [];
  var konami = '38,38,40,40,37,39,37,39,66,65';
  /**
   * Looks for konami code input on the website
   */
  $(document).keydown(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    keys.push(keycode);
    if (keys.toString().indexOf(konami) >= 0) {
      $('#terminalTrigger').css({
        display: 'block'
      });
      keys = [];
    }
  });

  /* ****
   * Terminal
   **** */
  let j = 0;
  /**
   * Makes the trigger(buttton) work on click
   */
  $('#terminalTrigger').click(function() {
    if (j === 0) {
      $('#terminal').css({
        display: 'block',
        height: '100px',
      });
      $('#terminalOutput').html('Have fun; much biene');
      $('#terminalInput').focus();
      $('#terminalInput').val('');
      j = 1;
    } else {
      $('#terminal').css({
        display: 'none',
        height: '0',
      });
      j = 0;
    }
  });

  $('#terminalInput').on("keydown", function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    var input = $('#terminalInput').val();
    if (keycode == '13') {
      if (input.trim() === 'fun') {
        changeColor(100, 10);
        $('#terminalOutput').html('FUN COMMAND TRIGGERED')
      } else if (input.trim() === 'biene') {
        var count = 0;
        $('#terminalOutput').html('BIENE COMMAND TRIGGERED')
        var biene = setInterval(function() {
          $('#biene').append('biene ');
          count++;
          if (count === 1000) clearInterval(biene);
        }, 50);
      }
    }
  });
})();


function changeColor(times, frames) {
  var count = 1;

  function counter() {
    document.body.id = "b" + count;
    count++;
    if (count === frames) {
      count = 1;
    }
  }
  var change = window.setInterval(counter, times);
};
