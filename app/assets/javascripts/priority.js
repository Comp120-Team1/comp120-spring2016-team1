function highlight_priorities() {
	grid = $("table")

	grid.find('tr').each(function (i) {
	   //$(this).css({ background: "#FFF" });//  <= this line
	   // check to see if search term matches Name column
		priority = $('td:first', $(this)).text();
		if (priority >= 8) {
			$(this).addClass("danger")
		} else if (priority >= 5) {
			$(this).addClass("warning")
		} else if (priority >= 1) {
			$(this).addClass("success")
		}
	   //if ($(this).find('td:first-child').text().toUpperCase().match(text.toUpperCase()))
			   //$(this).css({ background: "#FC6" });
			//  $(this).show(); // show matching row
	});
}

