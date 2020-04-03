export type SendMailTemplate =
"test" |
"self-welcome"

export interface SendMailContext {
	userName: string
}

export interface SendMailSchema {
	to: string
	subject: string
	template: SendMailTemplate
	context: SendMailContext
}
