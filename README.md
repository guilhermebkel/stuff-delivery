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
- rGPC
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


## CI Flow

- Merge branch into master
- Run tests
- Create docker image
- Generate a new container for this image
- Container gets up and visible into production after 30s
- Old container gets down

## Architecture

- Event Source
	- With help of **Apache Kafka** stores and delivers all real-time events responsible for driving the microservices/microfronts actions;
	- Saves all events on a **Postgres Database** and mark them with 'Processed = true' when it gets processed.

- Microservices
	- Tracking:
		- Publishes the actual position of delivers (using coordinates);
		- Uses the **Notification Microservice** to send a mail/notification to people subscribed to the current stuff being delivered.
	- Authentication:
		- Uses the **User Microservice** to get the necessary information to log users in.
	- User:
		- Makes CRUD actions on related user tables.
	- Notification:
		- Sends push notifications/mail to people that are subscribed to some stuff being delivered.

- Microfronts
	- User Client:
		- Shows to user current status of stuff he is watching;
		- Makes him able to update profile data.
	- Admin Client:
		- Shows current tracking position of delivers;
		- Makes the admin able to register new stuffs and delivers.

- Ingress Controller:
	- With help of **Nginx**, creates a gateway between the internet and the microservices/microfronts, what makes them accessible by exposed routes.

- Monitoring:
	- Uses **Fluentd** on every microservice to track logs;
	- Uses **ElasticSearch** to store all logs;
	- Uses **Kibana** to show logs;
	- Uses **Grafana** to show current status of every microservice system usage.

## Business Rules

### Hermes (Tracking Microservice)

- Events - (payload)
	- **DeliveryPayloadChangedLocation** - (user_id, delivery_payload_id, location)
		1. Hermes.setDeliveryPayloadLocation(delivery_payload_id, location)
		2. gRPC Asgardian.getUserData(user_id)
		3. Hermes.buildNewPayloadLocationNotificationData(delivery_payload_id, userData)
		4. gRPC Iris.sendPushNotification(newPayloadLocationNotificationData)
		5. Hermes.buildNewPayloadLocationMailData(delivery_payload_id, userData)
		6. gRPC Iris.sendMail(newPayloadLocationMailData)

	- **DeliveryPayloadRegistered** - (delivery_payload_id)
		1. Hermes.getDeliveryPayloadData(delivery_payload_id)
		2. Hermes.generateDeliveryPayloadReceipt(deliveryPayloadData)
		3. Hermes.sendToBucket(deliveryPayloadReceiptData)

- Services - (trigger)
	- **createNewPayloadSubscription** - POST /tracking/payload/:payload_tracking_code (title)
		1. Hermes.createNewPayloadSubscription(title, payload_tracking_code, user_id)

	- **removePayloadSubscription** - DELETE /tracking/payload/:payload_tracking_code
		1. Hermes.removePayloadSubscription(user_id)
	
	- **getAllPayloadSubscriptions** - GET /tracking/payload
		1. Hermes.getAllPayloadSubscriptions(user_id)

### Iris (Notification Microservice)

- Services - (trigger)
	- **sendPushNotification** - gRPC Iris.sendPushNotification(pushNotificationData)
		1. Iris.sendPushNotification(pushNotificationData)

	- **sendMail** - gRPC Iris.sendMail(mailData)
		1. Iris.sendMail(mailData)

### Asgardian (User Microservice)

- Events - (payload)
	- **UserCreated** - (user_id, delivery_payload_id, location)
		1. Asgardian.getUserData(user_id)
		2. Asgardian.buildSelfWelcomeMailData(userData)
		3. gRPC Iris.sendMail(selfWelcomeMailData)

- Services - (trigger)
	- **getUserData** - gRPC Asgardian.getUserData(user_id)
		1. Asgardian.getUserData(user_id)

	- **getUserLoginTokenData** - gRPC Asgardian.getUserLoginTokenData(email, password)
		1. Asgardian.getUserLoginTokenData(email)

	- **getProfileData** - GET /user/profile
		1. Asgardian.getProfileData(user_id)

	- **updateProfileData** - PUT /user/profile (data)
		1. Asgardian.updateProfileData(user_id, data)

	- **requestPasswordRecover** - POST /user/recover ({ email })
		1. Asgardian.getUserData(email)
		2. Asgardian.generateResetToken(user_id)
		3. Asgardian.buildRecoverPasswordMail(userData)
		4. gRPC Iris.sendMail(recoveryPasswordMail) 

	- **resetPassword** - PUT /user/recover (password, token)
		1. Asgardian.resetPassword(token, password)

	- **login** - POST /auth/login ({ email, password })
		1. Asgardian.getUserLoginTokenData(email, password)
		2. Asgardian.generateUserAuthToken(userLoginTokenData)

	- **isAuthenticated** - gRPC Asgardian.isAuthenticated(token)
		1. Asgardian.decodeToken(token)
