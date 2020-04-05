import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "@material-ui/core"

import App from "./App"

import { theme } from "./styles"
import "./styles/global.scss"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
