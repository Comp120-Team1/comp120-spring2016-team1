# COMP 120: Web Engineering

## Spring 2016 Semester Project

### Leg 1: Data Schema and Wireframe

#### Michael Seltzer, Danielle Zelin, Derek Benson, Zach Kirsch

## Data Schema

![Our Data Schema](./Data.png)

We chose to try and give us as much freedom as possible with our current Schema.
We want to be able to create as many relationships between the incidents and
the responses as possible. To accomplish this we have references to connect
an incident submitter to their personal information, relationships between
departments, incidents, and individuals, as well as relationships between
comments, incidents, people, and other comments.


## User Interface

![View of the feed](./Incidents.png)

For the feed we wanted to keep it fairly simple. Events are contained inside
boxes that just show a headline, these boxes can expand to show the details
of an incident and any comments on it.

![View of the report an incident page](./Reporting.png)

Once again we wanted to keep this page both simple and familiar, it just consists
of an easy to understand form for submitting information about a new incident.
