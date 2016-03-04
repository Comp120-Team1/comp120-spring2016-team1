# COMP 120 Spring 2015: Incident Reporter

## Performance Analysis

Danielle Zelin, Michael Seltzer, Derek Benson, Zach Kirsch.

### Otimization techniques

We used a content delivery network in order to store the static content in a separate server.

We combined all of the CSS files into one file before it serves to the user
to reduce the number of GET requests.

We combined all of the Javascript files for the same reason as above.

We minified the javascript and css files to make the file size a lot smaller.

We put all of our javascript at the bottom of the pages so the scripts will load after the HTML is already loaded. Otherwise, we have to wait for the javascript to load before anything else.

### Analysis

We used Loader.io to stress test by bombarding our server with thousands of POST and GET requests to find the server's capacity.

We used YSlow in order to view which areas could be optimized for performance.

### Improvements

Overall, our loading times and file sizes reduced dramatically and our capacity increased. This is demonstrated in a YSlow rating improvement from 85 to 99.

#### Photo Evidence:

![YSlow Before]
(yslow-before.jpg)

![YSlow After]
(yslow-after.jpg)

### Lingering issues

Our biggest optimization moving forward is to reduce the number of incidents that are sent on page load. Because we have pagination enabled, we will only fetch the first page of incidents, rather than the entire contents of the database, to greatly improve load time.
