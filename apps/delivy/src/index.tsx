import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "@material-ui/core"
import { ConfirmProvider } from "material-ui-confirm"

import App from "@delivy/App"

import { theme } from "@delivy/styles"
import "@delivy/styles/global.scss"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ConfirmProvider>
        <App />
      </ConfirmProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
