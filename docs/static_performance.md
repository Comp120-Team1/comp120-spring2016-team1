What optimization techniques did you use?
	- We used a content delivery network in order to store the static content in a separate server.
	- We combined all of the CSS files into one file before it serves to the user to reduce the number
		of GET requests.
	- We combined all of the Javascript files for the same reason as above.
	- We minified the javascript and css files to make the file size a lot smaller.
	- We put all of our javascript at the bottom of the pages so the scripts will load after the HTML 
		is already loaded. Otherwise, we have to wait for the javascript to load before anything else.

What tools did you use to test the performance of your product before and after optimizations made? Using no tools for this leg is not acceptable! More below.
	- We used Loader.io to stress test
	- We used YSlow in order to view which methods of optimization we can improve

What performance aspects have been improved (e.g., loading time, file size)?
Please provide numbers, percentages, or letter grades.
	- 

Are there any lingering potential performance issues?
