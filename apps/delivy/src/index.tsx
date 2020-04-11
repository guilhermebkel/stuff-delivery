import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "@material-ui/core"

import App from "@delivy/App"

import { theme } from "@delivy/styles"
import "@delivy/styles/global.scss"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
