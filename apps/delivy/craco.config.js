const path = require("path")

module.exports = {
  webpack: {
    alias: {
      "@delivy": path.resolve(__dirname, "src")
    }
  }
}
