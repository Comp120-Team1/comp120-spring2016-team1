# Leg 7

## Polling

Our design for polling uses the DataTables plugin liveAjax to poll the server 
and dynamically update the table when the data changes. Using our normal API for
fetching Incidents, each client polls the server and compares what is returned 
to its own data and updates what is necessary in the table. This occurs at a 
frequency of 30 seconds. If the client stops interacting with the webpage for 2
minutes then the polling will stop until the client acts with the page again.

# Cache
