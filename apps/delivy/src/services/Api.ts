import axios from "axios"

import AuthService from "./Auth"

export type MicroserviceName = "hermes" | "asgardian"

function ApiService(microserviceName: MicroserviceName) {
	const client = axios.create({
		baseURL: `${process.env.REACT_APP_API_URL}/${microserviceName}`
	})

	client.interceptors.request.use(config => {
		config.headers = {
			...config.headers,
			...(AuthService.token ? { Authorization: `Bearer ${AuthService.token}`} : {})
		}

		return config
	})

	return client
}

export default ApiService