import DecodeUserAuthTokenService from "@asgardian/services/DecodeUserAuthToken"

import { UserAuthTokenData } from "@asgardian/interfaces/UserAuth"

describe("Decode User Auth Token", () => {
  it("should decode a given token", async () => {
		const userAuthTokenData: UserAuthTokenData = {
			id: 1,
			name: "Guilherme Mota",
			email: "guilhermebromonschenkel@gmail.com",
			admin: true
		}

		// Token generated with the payload above
		const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikd1aWxoZXJtZSBNb3RhIiwiZW1haWwiOiJndWlsaGVybWVicm9tb25zY2hlbmtlbEBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTg1MjE1MDk0fQ.S6eWS6ksYsoYQCfh3wOecccjFceGukHBV6MCHk8j600"

		const decoded = DecodeUserAuthTokenService.run(token)

		expect(decoded).toMatchObject(userAuthTokenData)
	})

	it("should fail to decoded a expired token", async () => {
		const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikd1aWxoZXJtZSBNb3RhIiwiZW1haWwiOiJndWlsaGVybWVicm9tb25zY2hlbmtlbEBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTg0OTU3NTc2LCJleHAiOjE1ODQ5NjQ3NzZ9.K1iInu8_kbm4Su0T5-HocuUwyNyu47rzvqEFUfieIlE"

		const decoded = DecodeUserAuthTokenService.run(token)

		expect(decoded).toBeFalsy()
	})
})
