import cors from "cors"
import express from "express"

export default [
	express.json(),
	cors()
]