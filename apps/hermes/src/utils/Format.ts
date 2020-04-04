import slugify from "slugify"

class FormatUtil {
	slugify(text: string) {
		return slugify(text)
	}
}

export default new FormatUtil()
