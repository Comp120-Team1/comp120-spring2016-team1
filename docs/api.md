# COMP 120 Spring 2015: Incident Reporter

## API

Zach Kirsch, Derek Benson, Danielle Zelin, Michael Seltzer

### Introduction

This is the description of a RESTful API for [Incidents Reporter](https://incidentreporter.herokuapp.com). The [full API documentation](https://incidentreporter.herokuapp.com/api) is an extensive documentation for the different endpoints and options that this API offers.

The API offers full CRUD capability for incidents via POST, GET, PATCH, and DELETE requests.

The API offers GET, POST, and PATCH endpoints for creating, updating, and viewing users.

### Instruction for Use

Refer to our [API documentation](https://incidentreporter.herokuapp.com/api) for detailed descriptions of the endpoints and *live* testing of the API.

### Choices Explained

#### Swagger

[Swagger](http://swagger.io) is a framework for implementing a RESTful API. We decided to use it for documenting API because it aligns with what we believe is the best way for a developer to learn; that is, it's more effective to *learn by doing* rather than *learn by seeing*. While we do give a description and the requirements for each endpoint, Swagger allows us to embed live HTTP requests with customizable fields so that the developer can interact directly with the API. Additionally, equivalent `curl` commands are show for the requests that are being sent. We integrated Swagger into this Rails projects using the [swagger-docs](https://github.com/richhollis/swagger-docs) gem.

#### Other frameworks (or lack thereof)

We considered the use of an API-builder (such as [ruby-grape](https://github.com/ruby-grape/grape)). We decided not to for two reasons. First, because we all have little experience with API-building, it was more educational to learn the under-the-hood process and requirements for building an API. For a larger-scale product, it is probably more effective to use a framework. In this case, for this project, we felt that the educational benefits of building the API outweighed the costs. Second, it was very easy to enable the API without the use of frameworks, because the endpoints *already* exist as they are accessed by our views in the live application. Using a framework requires a lot of duplication of our existing endpoints and descriptions, which is not very modular.

#### API design choices

**User deletion:** Attempting to delete a user does not give feedback as to whether the user ID specified is valid. While we do not have authentication enabled thus far, we felt that it was a security vulnerability to give verification on the validity of an ID (similar to how most websites will not verify if a e-mail address is a valid login unless both a valid email and matching password are used).

### Future Plans

Certain endpoints of our API require different levels of authorization. Retrieving incidents will require basic authorization and can be accessed by individuals that are already a part of the system. Private incidents are an exception to this, and can only be viewed by the poster and the specific department(s) included on the incident.

The users-related endpoints require care because they have clear security implications. Administrators will have unlimited access to these endpoints. Other users can access their own information, and possibly view limited information about other users.
