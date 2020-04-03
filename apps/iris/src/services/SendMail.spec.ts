import SendMailService from "@iris/services/SendMail"

describe("Send email", () => {
  it("should send a test mail", async () => {
    const isMailSent = await SendMailService.run({
      to: "Test <test@gmail.com>",
      subject: "Test Mail",
      template: "test",
      context: {
        userName: "Mota"
      }
		})

		expect(isMailSent).toBeTruthy()
	})
})
