# stuff-delivery
:mailbox: An example of a delivery service application based on an event driven microservices architecture

## Technologies

- Kafka
- Node.js
- Kubernetes
- Docker
- React.js
- AWS SES
- rGPC

## CI Flow

- Merge branch into master
- Run tests
- Create docker image
- Generate a new container for this image
- Container gets up and visible into production after 30s
- Old container gets down

## Architecture

- Microservices
	- Tracking
	- Authentication
	- User
	- Mailing