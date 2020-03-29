export interface Sender {
	zip_code: number
	name: string
	address: string
	country: string
	city: string
	state: string
}

export interface Receiver extends Sender {

}

export interface PayloadDimensions {
	weight: number
	length: number
	width: number
	height: number
}

export interface PayloadSchema {
	name: string
	sender: Sender
	receiver: Receiver
	payloadDimensions: PayloadDimensions
}
