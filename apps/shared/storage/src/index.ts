import { S3, Endpoint } from "aws-sdk"

import storageConfig from "./config"

interface UploadParams {
	Key: string
	Bucket: string
	ContentType: string
	ACL: S3.ObjectCannedACL
	Body: S3.Body
}

class StorageService {
	storage: S3

	constructor() {
		if (process.env.NODE_ENV === "development") {
			this.storage = new S3({
				// Localstack S3 URL
				endpoint: new Endpoint(`http://localhost:4572`) as any
			})
		} else {
			this.storage = new S3({
				credentials: storageConfig as any
			})
		}
	}

	async upload(params: UploadParams) {
		return await this.storage.upload(params).promise()
	}
}

export default new StorageService()
