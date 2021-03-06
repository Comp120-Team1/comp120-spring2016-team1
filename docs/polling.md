# COMP 120 Spring 2016
## Leg 6: Polling and Memory Caching
##### Zach Kirsch, Derek Benson, Danielle Zelin & Michael Seltzer

### Polling

Our design for polling uses the DataTables plugin liveAjax to poll the server and dynamically update the table when the data changes. Using our normal API for fetching incidents, each client polls the server and compares what is returned to its own data and updates what is necessary in the table. This occurs at a frequency of 30 seconds.

We decided to update the page automatically every 30 seconds, which took a lot of discussion and weighing of costs and benefits. On the one hand, polling too frequently can be burdensome to the server, especially as we scale up to *n* number of users. On the other hand, polling too infrequently can be burdensome to users, who end up refreshing manually because the update takes too long. We felt that 30 seconds was a good middle ground between these costs and benefits. In the future, we plan to implement an option for individual users to change this polling time; as an example, police departments can opt to have polling near-instantaneously.

Additionally, a fear of ours is that users will not know or not trust that the system is updating automatically. To counter this, we added a badge ("Auto Updated") in the top-right corner of the page that displays when polling is enabled. We hope that this will alert users to this new functionality, and prevent unnecessary manual refreshing of the page. Since we are using AJAX calls which are expensive, we want to make sure that if a user leaves a session unattended it will not continue to request new data. To this end, we made an engineering decision that after 120 seconds of inactivity (based on mouse movement), the client will pause live updating and the badge that indicates that the data is auto updated disappears. Once a user returns to the session and becomes active, live updating resumes and the badge reappears. 

### Cache

We decided to serve the list of departments directly from the cache, rather than querying the database each time. We decided to do this because the list of departments almost never changes, and re-querying for every visit is an unnecessary waste of server capacity and time.

We implemented caching using MemCachier, an extension for Heroku that integrates directly with the built-in Rails caching system. The largest benefit of using MemCachier is that we can view the caching data on an online dashboard on Heroku. On the dashboard, we can view cache hits and cache misses (currently there have been 31 cache hits and 2 cache misses), evictions, and memory used among other statistics. Also, we can easily flush the cache manually if necessary.

We spoke at length about where else to implement caching, but at this point we decided that caching other parts of the system may not be beneficial. The most obvious choice for caching material is the list of incidents, but we decided that since they are frequency updated and edited (unlike the list of departments), it is not ideal for caching. In fact, attempting to cache material that is often created, modified, or deleted can be less efficient by constantly updating both the cache and the database with every update.
