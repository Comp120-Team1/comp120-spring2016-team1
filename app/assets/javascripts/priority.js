function highlight_priorities() {
  $(document).ready( function() {
    grid = $("table")

      // grid.find('tr').each(function (i) {
      //    //$(this).css({ background: "#FFF" });//  <= this line
      //    // check to see if search term matches Name column
      //  priority = $('td:first', $(this)).text();
      //  console.log(priority)
      //  if (priority == "!!!") {
      //    $(this).addClass("danger");
      //  } else if (priority == "!!") {
      //    $(this).css("background-color", "#fff5e6");
      //  } else if (priority == "!") {
      //    $(this).addClass("warning");
      //  }
      //    //if ($(this).find('td:first-child').text().toUpperCase().match(text.toUpperCase()))
      //       //$(this).css({ background: "#FC6" });
      //    //  $(this).show(); // show matching row
      // });

      $('td:first-child').each(function() {
        priority = $(this).text();
        if (priority == "!!!") {
          $(this).addClass("danger");
        } else if (priority == "!!") {
          $(this).css("background-color", "#fff5e6");
        } else if (priority == "!") {
          $(this).addClass("warning");
        }
      });
  });
}

