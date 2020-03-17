# stuff-delivery
:mailbox: An example of a delivery service application based on an event driven microservices architecture

## Technologies

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
