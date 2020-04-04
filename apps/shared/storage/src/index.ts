import { S3 } from "aws-sdk"

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
		this.storage = new S3({
			credentials: storageConfig as any
		})
	}

	async upload(params: UploadParams) {
		return await this.storage.upload(params).promise()
	}
}

export default new StorageService()
