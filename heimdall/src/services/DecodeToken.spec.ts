import DecodeTokenService from "@services/DecodeToken"

describe("Decode Token", () => {
  it("should decode a given token", async () => {
		const PAYLOAD = {
			id: 1,
			name: "Guilherme Mota",
			email: "guilhermebromonschenkel@gmail.com",
			admin: true
		}

		// Token generated with the payload above
		const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikd1aWxoZXJtZSBNb3RhIiwiZW1haWwiOiJndWlsaGVybWVicm9tb25zY2hlbmtlbEBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTg0OTU3NTc2LCJleHAiOjE1ODQ5NjQ3NzZ9.K1iInu8_kbm4Su0T5-HocuUwyNyu47rzvqEFUfieIlE"

		const decoded = DecodeTokenService.run(token)

		expect(decoded).toMatchObject(PAYLOAD)
	})
})
