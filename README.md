# dotnet-angular-docker

A boilerplaite project for building applications in with dotnet core webapi and angular 7+ and hosted with docker images.

## Project setup
the project is split up in 3 sections `api`, `router` and `ui` each with there own pupose.

### api

the `api` is where the the api endpoints are located. we use dotnet core in this example but you are free to use what you like.

### router

the `router` is where the different docker images are exposed to the outside world. this is also the entry point of the application. All request should go through the `router` which will dispatch the request to the appropriate service.

### ui

the `ui` is where the graphical interfaces are located. In this example we are using Angular 7+ but you are free to use what you like.

## Building