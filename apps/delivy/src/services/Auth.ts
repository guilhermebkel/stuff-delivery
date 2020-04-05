class AuthService {
	private _tokenKey: string = "d3l1v!"

	login(token: string) {
		localStorage.setItem(this._tokenKey, token)
		window.location.pathname = "/"
	}

	logout() {
		localStorage.removeItem(this._tokenKey)
		window.location.pathname = "/login"
	}

	get token() {
		return localStorage.getItem(this._tokenKey)
	}
}

export default new AuthService()
