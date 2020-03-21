export interface Sender {
	cep: number
	name: string
	address: string
	country: string
	city: string
	state: string
}

export interface Receiver extends Sender {

}