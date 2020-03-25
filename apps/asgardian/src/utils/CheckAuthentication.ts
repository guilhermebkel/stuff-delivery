import DecodeUserAuthTokenService from "@asgardian/services/DecodeUserAuthToken"

class CheckAuthenticationUtil {
	run(token: string) {
		const decoded = DecodeUserAuthTokenService.run(token)

		if (decoded) {
			return true
		} else {
			return false
		}
	}
}

export default new CheckAuthenticationUtil()
