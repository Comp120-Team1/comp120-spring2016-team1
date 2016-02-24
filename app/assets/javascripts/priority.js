function highlight_priorities() {
	grid = $("table")

	grid.find('tr').each(function (i) {
	   //$(this).css({ background: "#FFF" });//  <= this line
	   // check to see if search term matches Name column
		priority = $('td:first', $(this)).text();
		if (priority == "!!!") {
			$(this).addClass("danger")
		} else if (priority == "!!") {
			$(this).addClass("warning")
		} else if (priority == "!") {
			$(this).addClass("success")
		}
	   //if ($(this).find('td:first-child').text().toUpperCase().match(text.toUpperCase()))
			   //$(this).css({ background: "#FC6" });
			//  $(this).show(); // show matching row
	});
}
