import express from "express"
import cors from "cors"

const middlewares = [
	express.json(),
	cors()
]

export default middlewares
