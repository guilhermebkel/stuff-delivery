import DecodeUserAuthTokenService from "@services/DecodeUserAuthToken"

import { UserAuthTokenData } from "@interfaces/UserAuth"

describe("Decode User Auth Token", () => {
  it("should decode a given token", async () => {
		const userAuthTokenData: UserAuthTokenData = {
			id: 1,
			name: "Guilherme Mota",
			email: "guilhermebromonschenkel@gmail.com",
			admin: true
		}

		// Token generated with the payload above
		const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikd1aWxoZXJtZSBNb3RhIiwiZW1haWwiOiJndWlsaGVybWVicm9tb25zY2hlbmtlbEBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTg0OTU3NTc2LCJleHAiOjE1ODQ5NjQ3NzZ9.K1iInu8_kbm4Su0T5-HocuUwyNyu47rzvqEFUfieIlE"

		const decoded = DecodeUserAuthTokenService.run(token)

		expect(decoded).toMatchObject(userAuthTokenData)
	})
})
