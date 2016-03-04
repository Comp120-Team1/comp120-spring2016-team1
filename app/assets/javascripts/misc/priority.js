function highlight_priorities(callback) {
    grid = $("table")

      var HIGH = 3
      var MED  = 2
      var LOW  = 1

      $('td:first-child').each(function() {
        priority = $(this).text();
        $(this).text("")
        if (priority == HIGH) {
          $(this).append("<div style='display: none;'>3</div>") // for sorting
          $(this).append('<span class="glyphicon glyphicon-exclamation-sign priority_high" aria-hidden="true"></span>')
          $(this).append('<span class="glyphicon glyphicon-exclamation-sign priority_high" aria-hidden="true"></span>')
          $(this).append('<span class="glyphicon glyphicon-exclamation-sign priority_high" aria-hidden="true"></span>')
        } else if (priority == MED) {
          $(this).append("<div style='display: none;'>2</div>") // for sorting
          $(this).append('<span class="glyphicon glyphicon-exclamation-sign priority_med" aria-hidden="true"></span>')
          $(this).append('<span class="glyphicon glyphicon-exclamation-sign priority_med" aria-hidden="true"></span>')
        } else if (priority == LOW) {
          $(this).append("<div style='display: none;'>1</div>") // for sorting
          $(this).append('<span class="glyphicon glyphicon-exclamation-sign priority_low" aria-hidden="true"></span>')
        }
    });
    if (callback)
      callback()
}

function priority_to_text(priority)
{
  if (priority == 3)
    return "High"
  else if (priority == 2)
    return "Medium"
  else if (priority == 1)
    return "Low"
  else return 0
}
