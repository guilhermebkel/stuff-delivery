import io from "socket.io"

import { MicroserviceName } from "../interfaces/Microservice"

function SocketService(microserviceName: MicroserviceName) {
	const socket = io(`${process.env.REACT_APP_API_URL}/${microserviceName}`)

	return socket
}

export default SocketService