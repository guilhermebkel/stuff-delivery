<p align="center">
  <img src="./assets/box.png" height="150" width="150" alt="Unform" />
</p>

<h3 align="center">
  A Delivery Service with monorepo event driven microservices architecture 📨
</h3>

<p align="center">
	<a href="https://lerna.js.org/">
		<img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="maintained with lerna"/>
	</a>
	<a href="https://github.com/guilhermebkel/stuff-delivery">
		<img alt="mit license" src="https://img.shields.io/github/license/guilhermebkel/stuff-delivery?color=0051ff">
	</a>
</p>

## 📌 Overview

Stuff Delivery is a simple study of a microservice architecture using the most famous (and some new ones as well) technologies.

My advice is not to use this repo as the absolute path/truth to build a microservice architecture, since it depends on the business gaps you're living with.

## 🔧 Technologies

- Kafka
- Node.js
- Kubernetes
- Docker
- React.js
- RPC
- Kibana
- ElasticSearch
- Fluentd
- Grafana
- Redis
- Postgres
- Nginx

## 🛸 Microservices

We have currently 3 main microservices:

<img src="./assets/asgardian.png" align="left" width="70">

### Asgardian

Responsible for making all related User business rules, per example: User Authentication, Profile Update, Authentication Token Verification and so on.

<img src="./assets/hermes.png" align="left" width="70">

### Hermes

Owns the responsability of Tracking Packages and Delivery Mans.

<img src="./assets/iris.png" align="left" width="70">

### Iris

Controls all notification that needs to be sent, per example: Emails and Push Notifications.

## 🌆 Architecture

### Application Structure

We have three basic ways to make communication with/between the microservices:

1. **REST:** In case someone outside needs to use a resource from some microservice. Ex: Someone tries to log in.
2. **RPC:** In case a microservice needs to use a resource from another that does not need to be processed in background. Ex: The microservice(1) needs to know if a user is authenticated, but this method is owned by microservice(2).
3. **Pub/Sub:** In case a microservice requests a resource from another that needs to be processed in background. Ex: An action ocurred and an email needs to be sent.

The **REST Requests** relies on **Nginx** since we use it as a Ingress Controller and Load Balancer. Below you can see an example:

```
A user attempts to log in
> POST /asgardian/login

The request goes first to Nginx, the path is verified and forwarded to the needed microservice
> PROXY_PASS asgardian:3040
```

The **RPC System** relies on **gRPC** in order to make fast communication between microservices. Below you can see an example:
```
A user tries to get his current list of packages being tracked
> GET /hermes/deliveries { token }

The Hermes Microservice uses Asgardian Microservice to verify if user is authenticated
> RPC Asgardian.isAuthenticated { token }
```

The **Pub/Sub System** relies on **Kafka** and every message send there comes in the format of an event. Below you can see an example:

```
A user signs up
> POST /asgardian/signup { email, password }

The Asgardian Microservice publishes a message to Kafka
> PUBLISH CustomerSignedUp { email, password }

The Iris Microservice is subscribed to CustomerSignedUp event and makes the action of sending a email to new user
> SERVICE Iris.sendWelcomeMail { email, password }
```

### Tests

All the services inside each microservice follow the TDD principles.

## 🌀 Repo Management

That's a monorepo managed by **Lerna**, the microservices can be found on ```/apps``` folder. The modules shared between all of them can be found on ```/apps/shared```.

## 🚀 Getting started (Currently not available)

1. Clone this repository
2. Open root directory and run the following command:
```sh
docker-compose up # Inits all needed resources
```
3. Install all dependencies:
```sh
npm run bootstrap # Will use lerna to install every repo dependency
```
4. Goes inside every repo inside apps folder and do the following:
	1. Duplicate .env.example
	2. Change .env.example name to .env
	3. Add the needed environmental variables
	4. Execute the command: ```npm run dev```

Now the resources will be available at:
- http://localhost/asgardian (Asgardian Microservice)
- http://localhost/hermes (Hermes Microservice)
- http://localhost/api-docs (REST API Documentation)

If you use **Insomnia** you can download the [**Insomnia File with all routes**](./insomnia.json).
